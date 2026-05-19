const express=require("express")
const router=express.Router()

const {getNotes,addNote,deleteNote,updateNote} = require('../controllers/notesController')

router.get('/',getNotes)
router.post('/',addNote)
router.delete('/:id',deleteNote)
router.put('/:id',updateNote)

module.exports=router