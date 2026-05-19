import { FaRegFolderOpen } from "react-icons/fa6";

const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-4 bg-slate-50/50 dark:bg-slate-900/20 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-800 mt-6 transition-colors duration-200">
      <div className="p-4 bg-white dark:bg-slate-900 rounded-full shadow-sm border border-slate-100 dark:border-slate-800 mb-4 text-slate-400 dark:text-slate-500">
        <FaRegFolderOpen size={40} />
      </div>
      <div>
        <h3 className="font-semibold text-lg text-slate-700 dark:text-slate-300">No notes found</h3>
        <p className="text-slate-400 dark:text-slate-500 text-sm mt-1">Add your first note above to get started!</p>
      </div>
    </div>
  )
}

export default EmptyState