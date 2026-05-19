import { useState,useEffect } from "react"
import toast from "react-hot-toast"
import faah from "../assets/faahh.mp3"
import { 
  getNotes,
  addNote as addNoteApi,
  deleteNote as deleteNoteApi,
  updateNote as updateNoteApi
} from "../services/api"

const sound=new Audio(faah)

const useNotes=()=>{
    const [notes, setNotes]=useState([])
    const [text, setText]=useState("")

    const [editId, setEditId]=useState(null)
    const [editText, setEditText]=useState('')

    const [loading, setLoading]=useState(false)
    const [error,setError] = useState("")

    useEffect(()=>{
        loadNotes()
    },[])

    const loadNotes = ()=>{
        setLoading(true)
        setError("")
        getNotes()
        .then(res=>res.json())
        .then(data=>{
        setNotes(data)
        })
        .catch(()=>{
        setError("failed to load notes")
        })
        .finally(()=>{
        setLoading(false)
        })
    }

    const addNote =()=>{
        if(!text.trim()) {
        sound.play()
        toast.error("Empty note not allowed 😤")
        return
        }

        addNoteApi(text)
        .then(res=>res.json())
        .then(()=>{
        loadNotes()
        setText("")
        })
    }

    const deleteNote =(id)=>{
        deleteNoteApi(id)
        .then(res=>res.json())
        .then(()=>{
        loadNotes()
        })
    }

    const updateNote=()=>{
        if(!editText.trim()) return

        updateNoteApi(editId,editText)
        .then(res=>res.json())
        .then(()=>{
        loadNotes()
        setEditId(null)
        setEditText('')
        })
    }

    const cancelEdit=()=>{
        setEditId(null)
        setEditText("")
    }

    return{
        notes,text,setText,editId,setEditId,editText,setEditText,loading,error,addNote,deleteNote,updateNote,cancelEdit
    }

}

export default useNotes