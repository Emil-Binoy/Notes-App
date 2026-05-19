const db=require("../database")

const getNotes=(req,res)=>{
    db.all(
        "SELECT * FROM notes",
        [],
        (err,rows)=>{
            if(err){
                return res.status(500).json(err)
            }
            res.json(rows)
        }
    )
}

const addNote=(req,res)=>{

    if(!req.body.text){
        return res.status(400).json({
            messsage:"string is empty"
        })
    }

    db.run(
        "INSERT INTO notes(text) VALUES(?)",
        [req.body.text],

        function(err){
            if(err){
                return res.status(500).json(err)
            }

            res.status(201).json({
                id:this.lastID,
                messsage:"note added"
            })
        }
    )
}

const deleteNote=(req,res)=>{
    const id = req.params.id

    db.run(
        "DELETE FROM notes WHERE id = ?",

        [id],

        function(err){
            if(err){
                return res.status(500).json(err)
            }

            res.json({
                messsage:"note deleted"
            })
        }
    )
}

const updateNote=(req,res)=>{
    const id = req.params.id
    const text=req.body.text
    if(!text){
        return res.status(400).json({
            messsage:"text required"
        })
    }

    db.run(
        'UPDATE notes SET text=? WHERE id=?',
        [text,id],
        function(err){
            if(err){
                return res.status(500).json(err)
            }
            res.json({
                messsage:"note updated"
            })
        }
    )
}

module.exports={getNotes,addNote,deleteNote,updateNote}