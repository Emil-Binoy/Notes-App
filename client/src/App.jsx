import NoteInput from './components/NoteInput'
import NoteItem from './components/NoteItem'
import { FaFileAlt } from "react-icons/fa";

import Header from './components/layout/Header'
import EmptyState from './components/ui/EmptyState'

import useNotes from './hooks/useNotes';


const App = () => {

  const{notes,text,setText,editId,setEditId,editText,setEditText,loading,error,addNote,deleteNote,updateNote,cancelEdit}=useNotes();

  return (
    <div>
      <Header/>
      <NoteInput
        text={text} 
        setText={setText}
        addNote={addNote}
      />

      <div className='flex flex-col items-center text-center justify-center m-5'>
        {loading && <h1 className='font-bold text-2xl'>loading...</h1>}
        {error && <h1 className='text-lg text-red-600'>{error}</h1>}
      </div>

      {
        notes.length===0
        &&
        !loading
        &&
        <EmptyState/>
      }

      {
        notes.length>0 &&
          <div className="inset-shadow-sm inset-shadow-gray-900/50 rounded-2xl m-5 p-3">

          <div className="flex text-center items-center gap-2 justify-center mb-4">
            <FaFileAlt />
            <h1 className="font-semibold text-xl">
              Your notes
            </h1>
          </div>

          {notes.map(note => (
            <NoteItem
              key={note.id}
              note={note}
              editText={editText}
              editId={editId}
              updateNote={updateNote}
              setEditId={setEditId}
              setEditText={setEditText}
              deleteNote={deleteNote}
              cancelEdit={cancelEdit}
            />
          ))}

        </div>
      }
    </div>
  )
}

export default App