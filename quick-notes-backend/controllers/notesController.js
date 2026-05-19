const db=require("../database")


const getNotes=async(req,res)=>{

    try{

        const result=await db.query(
            "SELECT * FROM notes"
        )

        res.json(result.rows)

    }

    catch(err){

        res.status(500)
        .json(err)

    }

}


const addNote=async(req,res)=>{

    try{

        if(!req.body.text){

            return res.status(400)
            .json({

                message:"string is empty"

            })

        }

        const result=
        await db.query(

            "INSERT INTO notes(text) VALUES($1) RETURNING *",

            [req.body.text]

        )

        res.status(201)
        .json({

            note:result.rows[0],

            message:"note added"

        })

    }

    catch(err){

        res.status(500)
        .json(err)

    }

}


const deleteNote=async(req,res)=>{

    try{

        await db.query(

            "DELETE FROM notes WHERE id=$1",

            [req.params.id]

        )

        res.json({

            message:"note deleted"

        })

    }

    catch(err){

        res.status(500)
        .json(err)

    }

}


const updateNote=async(req,res)=>{

    try{

        const text=req.body.text

        if(!text){

            return res.status(400)
            .json({

                message:"text required"

            })

        }

        await db.query(

            "UPDATE notes SET text=$1 WHERE id=$2",

            [text,req.params.id]

        )

        res.json({

            message:"note updated"

        })

    }

    catch(err){

        res.status(500)
        .json(err)

    }

}


module.exports={
    getNotes,
    addNote,
    deleteNote,
    updateNote
}