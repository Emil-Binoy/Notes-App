const NoteInput = ({
    text, setText, addNote
}) => {
  return (
    <div className="flex items-center justify-center p-5 gap-3">
        <input type="text" 
            value={text}
            onChange={(e)=>setText(e.target.value)}
            onKeyDown={(e)=>{
                if(e.key==="Enter"){
                    addNote()
                }
            }}
            placeholder='Enter the text'
            className="w-full p-2 h-10 border-2 border-gray-400 rounded-md"
        />
        <button 
            onClick={addNote}
            className="bg-purple-600 px-5 rounded-md text-white h-10"
        >
            add
        </button>
    </div>
  )
}

export default NoteInput