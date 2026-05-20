import { useState, useEffect } from 'react'
import NoteInput from './components/NoteInput'
import NoteItem from './components/NoteItem'

import { FaFileAlt } from "react-icons/fa";
import { LuNotebookPen } from "react-icons/lu";
import { IoSunnySharp, IoMoonSharp } from "react-icons/io5";

import EmptyState from './components/ui/EmptyState'
import useNotes from './hooks/useNotes';
import Signup from './pages/Signup';

const App = () => {
  const { 
    notes, text, setText, editId, setEditId, 
    editText, setEditText, loading, error, 
    addNote, deleteNote, updateNote, cancelEdit 
  } = useNotes();

  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-100 antialiased pb-12 transition-colors duration-200">
      <Signup/>
      <header className="sticky top-0 z-50 bg-white/80 border-b border-slate-100 dark:bg-slate-900/80 dark:border-slate-800 backdrop-blur-md px-6 py-4 transition-colors duration-200">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5 text-purple-600 dark:text-purple-400">
            <div className="bg-purple-50 dark:bg-purple-950/50 p-2 rounded-xl">
              <LuNotebookPen size={20} className="stroke-[2.5]" />
            </div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              Notes<span className="text-purple-600 dark:text-purple-400">.</span>
            </h1>
          </div>
          
          <button 
            onClick={() => setIsDark(!isDark)}
            className="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white p-2.5 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-800 transition-all active:scale-95 shadow-sm bg-white dark:bg-slate-900"
            aria-label="Toggle Theme"
          >
            {isDark ? <IoSunnySharp size={18} /> : <IoMoonSharp size={18} />}
          </button>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-4 mt-8">
        <NoteInput text={text} setText={setText} addNote={addNote} />

        <div className="flex flex-col items-center text-center justify-center my-4">
          {loading && (
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-medium py-2">
              <div className="w-5 h-5 border-2 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
              <span>Loading notes...</span>
            </div>
          )}
          {error && (
            <h1 className="text-sm font-medium text-red-500 bg-red-50 dark:bg-red-950/30 px-4 py-2 rounded-lg border border-red-100 dark:border-red-900/50">
              {error}
            </h1>
          )}
        </div>

        {!loading && !error && notes.length === 0 && <EmptyState />}

        {notes.length > 0 && (
          <div className="mt-8">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 mb-4 px-2">
              <FaFileAlt className="text-sm" />
              <h2 className="font-semibold text-sm uppercase tracking-wider">
                Your notes ({notes.length})
              </h2>
            </div>

            <div className="space-y-3">
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
          </div>
        )}
      </div>
    </div>
  )
}

export default App