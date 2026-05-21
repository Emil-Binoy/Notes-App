import useNotes from "../hooks/useNotes";
import NoteInput from "../components/NoteInput";
import NoteItem from "../components/NoteItem";
import EmptyState from "../components/ui/EmptyState";
import { FaFileAlt } from "react-icons/fa";

const Notes = () => {
  const {
    notes,
    text,
    setText,
    editId,
    setEditId,
    editText,
    setEditText,
    loading,
    error,
    addNote,
    deleteNote,
    updateNote,
    cancelEdit,
  } = useNotes();

  return (
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
            {notes.map((note) => (
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
  );
};

export default Notes;
