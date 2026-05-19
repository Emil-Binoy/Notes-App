import { LuNotebookPen } from "react-icons/lu";
import { IoSunnySharp } from "react-icons/io5";

const Header = () => {
  return (
    <div className="flex items-center justify-between text-center px-5 py-3 border-2 border-gray-200">
        <div className="flex items-center">
            <LuNotebookPen size={20}/>
            <h1 className="text-lg font-bold">Notes App</h1>
        </div>
        
        <button className="border-2 border-gray-300 p-2 rounded-full">
          <IoSunnySharp 
            size={20}
          />
        </button>
    </div>
  )
}

export default Header