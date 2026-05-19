const db=require("../database")


const getNotes=(req,res)=>{

    try{

        const rows=db
        .prepare(
            "SELECT * FROM notes"
        )
        .all()

        res.json(rows)

    }

    catch(err){

        res.status(500)
        .json(err)

    }

}


const addNote=(req,res)=>{

    try{

        if(!req.body.text){

            return res.status(400)
            .json({

                message:"string is empty"

            })

        }


        const result=db
        .prepare(
            "INSERT INTO notes(text) VALUES(?)"
        )
        .run(req.body.text)


        res.status(201)
        .json({

            id:result.lastInsertRowid,

            message:"note added"

        })

    }

    catch(err){

        res.status(500)
        .json(err)

    }

}


const deleteNote=(req,res)=>{

    try{

        const id=req.params.id

        db.prepare(
            "DELETE FROM notes WHERE id=?"
        )
        .run(id)

        res.json({

            message:"note deleted"

        })

    }

    catch(err){

        res.status(500)
        .json(err)

    }

}


const updateNote=(req,res)=>{

    try{

        const id=req.params.id

        const text=req.body.text

        if(!text){

            return res.status(400)
            .json({

                message:"text required"

            })

        }


        db.prepare(
            "UPDATE notes SET text=? WHERE id=?"
        )
        .run(text,id)


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