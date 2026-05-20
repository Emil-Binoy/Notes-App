require("dotenv").config()

const db=require("./database")

async function updateTable(){

    try{

        await db.query(`

        ALTER TABLE notes
        ADD COLUMN user_id INTEGER

        `)

        console.log(
            "user_id added"
        )

        process.exit()

    }

    catch(err){

        console.log(err)

        process.exit()

    }

}

updateTable()