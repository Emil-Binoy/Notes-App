const jwt = require("jsonwebtoken");
const db = require("../database");
const bcrypt=require("bcrypt")


const signup = async (req,res) => {
    try {
        const{username,email,password}=req.body
        if (!username||!email||!password) {
            return res.status(400).json({
                message:"all fields required"
            })
        }
        const hashedPassword = await bcrypt.hash(password,10)

        const result = await db.query(`INSERT INTO users(username,email,password)
            VALUES ($1,$2,$3)
            RETURNING id,username,email`,

            [username,email,hashedPassword]
        )
        const newUser = result.rows[0];
        const token= jwt.sign(
            {id:newUser.id},
            process.env.JWT_SECRET,
            {expiresIn:"7d"}
        )

        res.status(201).json({
            token,
            user:{
                id:newUser.id,
                username:newUser.username,
                email:newUser.email
            },
            message:"signup successful"
        })
        
    } catch (error) {
        console.error("Signup Error:", error);
        res.status(500).json({ message: error.message });
    }
}

const login = async (req,res) => {
    try {
        const {email,password}=req.body
        if (!email||!password) {
            return res.status(400).json({
                message:"all fields required"
            })
        }
        const result = await db.query(`SELECT * FROM users WHERE email =$1`
            ,
            [email]
        )
        const user = result.rows[0]

        if (!user) {
            return res.status(404).json({
                message:"user not found"
            })
        }

        const isMatch = await bcrypt.compare(password,user.password)
        if (!isMatch) {
            return res.status(401).json({
                message:"wrong password"
            })
        }
        const token = jwt.sign(
            {
                id:user.id
            },
            process.env.JWT_SECRET,
            {
                expiresIn:"7d"
            }
        )

        res.json({
            token,
            user:{
                id:user.id,
                username:user.username,
                email:user.email
            }
        })
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports={signup,login}