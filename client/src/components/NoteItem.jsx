import { MdEdit, MdDelete, MdDone } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const NoteItem = ({
  note, editText, editId, updateNote, setEditId, setEditText, deleteNote, cancelEdit
}) => {
  const isEditing = editId === note.id;

  return (
    <div className="transition-all duration-200">
      {isEditing ? (
        <div className="gap-3 flex flex-col sm:flex-row justify-between p-4 rounded-xl border border-amber-200 dark:border-amber-900/50 bg-amber-50/60 dark:bg-amber-950/20 shadow-sm backdrop-blur-sm items-center">
          <input  
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="w-full px-3 py-2 border border-amber-300 dark:border-amber-800 rounded-lg bg-white dark:bg-slate-900 shadow-inner focus:outline-none focus:ring-2 focus:ring-amber-400 text-slate-800 dark:text-slate-100 text-sm"
            autoFocus
          />
          <div className="flex gap-2 w-full sm:w-auto shrink-0">
            <button 
              onClick={updateNote}
              className="flex items-center justify-center gap-1 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg w-full sm:w-auto text-sm font-medium shadow-sm active:scale-95 transition-all"
            >
              <MdDone className="text-base" />
              <span>Save</span>
            </button>
            <button 
              onClick={cancelEdit}
              className="flex items-center justify-center gap-1 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 active:scale-95 transition-all border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 px-4 py-2 rounded-lg w-full sm:w-auto text-sm font-medium shadow-sm"
            >
              <IoMdClose className="text-base" />
              <span>Cancel</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border border-slate-100 dark:border-slate-800/60 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md hover:-translate-y-0.5 dark:hover:shadow-slate-950/50 transition-all duration-200 gap-4">
          <p className="text-slate-700 dark:text-slate-300 whitespace-pre-wrap break-all text-sm sm:text-base px-1">{note.text}</p>
          <div className="flex gap-2 w-full sm:w-auto justify-end shrink-0 border-t border-slate-50 dark:border-slate-800/50 pt-3 sm:pt-0 sm:border-none">
            <button 
              onClick={() => {
                setEditId(note.id)
                setEditText(note.text)
              }}
              className="border border-slate-200 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-900/50 hover:bg-blue-50/50 dark:hover:bg-blue-950/20 flex items-center justify-center gap-1 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-1.5 rounded-lg w-full sm:w-auto text-xs font-medium transition-colors"
            >
              <MdEdit />
              <span>Edit</span>
            </button>
            <button 
              onClick={() => deleteNote(note.id)}
              className="border border-slate-200 dark:border-slate-800 hover:border-red-200 dark:hover:border-red-900/50 hover:bg-red-50/50 dark:hover:bg-red-950/20 flex items-center justify-center gap-1 text-slate-500 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 px-3 py-1.5 rounded-lg w-full sm:w-auto text-xs font-medium transition-colors"
            >
              <MdDelete />
              <span>Delete</span>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default NoteItem