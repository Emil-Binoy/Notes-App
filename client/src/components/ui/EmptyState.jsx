import { FaRegFolderOpen } from "react-icons/fa6";

const EmptyState = () => {
  return (
    <div className="flex items-center justify-center gap-5">
        <FaRegFolderOpen 
            size={100}
            
        />
        <div className="">
            <h1 className="font-bold text-2xl">No notes found</h1>
            <p>Add a note to get started</p>
        </div>
    </div>
  )
}

export default EmptyState