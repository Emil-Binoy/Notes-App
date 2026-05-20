const express=require("express")
const router=express.Router()

const {getNotes,addNote,deleteNote,updateNote} = require('../controllers/notesController')
const auth = require('../middleware/authMiddleware')

router.get('/',auth,getNotes)
router.post('/',auth,addNote)
router.delete('/:id',auth,deleteNote)
router.put('/:id',auth,updateNote)

module.exports=router