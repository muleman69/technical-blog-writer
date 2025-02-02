import type React from "react"
import { Save, Send, User, ChevronDown } from "lucide-react"

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="text-xl font-bold">BlogAI</div>
      <div className="flex items-center space-x-4">
        <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md flex items-center">
          <Save size={18} className="mr-2" />
          Save Draft
        </button>
        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-md flex items-center">
          <Send size={18} className="mr-2" />
          Publish
        </button>
        <div className="relative">
          <button className="flex items-center space-x-2 hover:bg-gray-700 rounded-md p-2">
            <User size={18} />
            <span>John Doe</span>
            <ChevronDown size={14} />
          </button>
          {/* Add dropdown menu here if needed */}
        </div>
      </div>
    </nav>
  )
}

export default Navbar

