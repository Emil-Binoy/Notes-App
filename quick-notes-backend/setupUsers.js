require('dotenv').config()
const db = require('./database')
async function createUsers() {
    try{
        await db.query(`CREATE TABLE IF NOT EXISTS users(
            id SERIAL PRIMARY KEY,
            username TEXT UNIQUE  NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL
        )`)
        console.log("users table created")
        process.exit()
    }
    catch(err){
        console.log(err)
        process.exit()
    }
}
createUsers()