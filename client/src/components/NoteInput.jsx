const NoteInput = ({ text, setText, addNote }) => {
  return (
    <div className="flex items-center justify-center bg-white dark:bg-slate-900 p-3 rounded-2xl border border-slate-100 dark:border-slate-800/80 shadow-sm gap-3 transition-colors duration-200">
      <input 
        type="text" 
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addNote()
          }
        }}
        placeholder="Take a note..."
        className="w-full px-4 h-11 bg-slate-50/50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:border-purple-400 dark:focus:border-purple-500 focus:ring-4 focus:ring-purple-100 dark:focus:ring-purple-950/50 transition-all text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500"
      />
      <button 
        onClick={addNote}
        className="bg-purple-600 hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-500 active:scale-95 transition-all px-6 rounded-xl text-white font-medium h-11 shadow-sm shadow-purple-200 dark:shadow-none shrink-0 text-sm"
      >
        Add
      </button>
    </div>
  )
}

export default NoteInput