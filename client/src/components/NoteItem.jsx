import { MdEdit,MdDelete,MdDone  } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const NoteItem = ({
    note, editText, editId, updateNote, setEditId, setEditText, deleteNote, cancelEdit
}) => {
  return (
    <div>
      
        {
            editId===note.id 
            
            ? 
            
            <div className="gap-2 flex flex-col lg:flex-row justify-between px-5 py-2 rounded-lg mx-5 my-2 border-2 border-amber-300 bg-amber-200 items-center">
              <input  
               value={editText}
               onChange={(e)=>setEditText(e.target.value)}
               className="w-full p-2 border-2 border-gray-400 rounded-md bg-white"
              />
              <div className="flex gap-2 w-full lg:w-auto">
                <button 
                  onClick={updateNote}
                  className="flex items-center bg-purple-600 text-white px-3 p-1 rounded-md w-full lg:w-auto text-center justify-center"
                >
                  <MdDone />
                  <h1>Save</h1>
                </button>
                <button 
                  onClick={cancelEdit}
                  className="flex items-center bg-gray-100 border-2 border-gray-300  px-3 p-1 rounded-md w-full lg:w-auto text-center justify-center"
                >
                  <IoMdClose />
                  <h1>Cancel</h1>
                </button>
              </div>
            </div>
            
            :
            
            <div className="flex flex-col lg:flex-row justify-between px-5 py-2 rounded-lg mx-5 my-2 border-2 border-gray-400 items-center">
              <p>{note.text}</p>
              <div className="flex gap-2 w-full lg:w-auto">
                <button 
                  onClick={()=>{
                    setEditId(note.id)
                    setEditText(note.text)
                  }}
                  className="border-2 border-blue-300 flex items-center text-blue-700 px-3 p-1 rounded-md w-full lg:w-auto text-center justify-center"
                >
                  <MdEdit />
                  <h1>Edit</h1>
                </button>
                <button 
                  onClick={()=>deleteNote(note.id)}
                  className="border-2 border-red-300 flex items-center text-red-700 px-3 p-1 rounded-md w-full lg:w-auto text-center justify-center"
                >
                  <MdDelete />
                  <h1>delete</h1>
                </button>
              </div>
            </div>
        }
        
    </div>
  )
}

export default NoteItem