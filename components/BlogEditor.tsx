import type React from "react"
import { useState } from "react"
import { Bold, Italic, Heading, List, Code, Zap, ChevronRight, ChevronLeft } from "lucide-react"
import Navbar from "./Navbar"
import StatusBar from "./StatusBar"

const BlogEditor: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"writing" | "technical">("writing")
  const [isPanelCollapsed, setIsPanelCollapsed] = useState(false)

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 flex flex-col">
      <Navbar />

      {/* Floating Toolbar */}
      <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-gray-800 rounded-lg shadow-lg p-2 flex space-x-2 z-10">
        <button className="p-2 hover:bg-gray-700 rounded">
          <Bold size={18} />
        </button>
        <button className="p-2 hover:bg-gray-700 rounded">
          <Italic size={18} />
        </button>
        <button className="p-2 hover:bg-gray-700 rounded">
          <Heading size={18} />
        </button>
        <button className="p-2 hover:bg-gray-700 rounded">
          <List size={18} />
        </button>
        <button className="p-2 hover:bg-gray-700 rounded">
          <Code size={18} />
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-1 pt-16">
        {/* Editor */}
        <div className={`${isPanelCollapsed ? "w-[95%]" : "w-[70%]"} p-8 transition-all duration-300`}>
          <textarea
            className="w-full h-full bg-gray-800 text-gray-200 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono resize-none"
            placeholder="Start writing your blog post..."
          />
        </div>

        {/* AI Suggestions Sidebar */}
        <div className={`${isPanelCollapsed ? "w-[5%]" : "w-[30%]"} bg-gray-800 flex transition-all duration-300`}>
          <div className="flex-1 p-4 overflow-y-auto">
            {!isPanelCollapsed && (
              <>
                <div className="flex items-center mb-4">
                  <Zap size={18} className="mr-2 text-yellow-500" />
                  <h2 className="text-lg font-semibold">AI Assistant</h2>
                </div>
                <div className="flex mb-4 space-x-2">
                  <button
                    className={`px-3 py-1 rounded-md ${activeTab === "writing" ? "bg-blue-600" : "bg-gray-700"}`}
                    onClick={() => setActiveTab("writing")}
                  >
                    Writing Suggestions
                  </button>
                  <button
                    className={`px-3 py-1 rounded-md ${activeTab === "technical" ? "bg-blue-600" : "bg-gray-700"}`}
                    onClick={() => setActiveTab("technical")}
                  >
                    Technical Accuracy
                  </button>
                </div>
                <div className="mb-4">
                  <select className="bg-gray-700 text-gray-200 rounded-md p-2 w-full">
                    <option>All Suggestions</option>
                    <option>Grammar</option>
                    <option>Style</option>
                    <option>Clarity</option>
                  </select>
                </div>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-gray-700 p-4 rounded-lg">
                      <p className="text-sm mb-2">Consider rephrasing this sentence for clarity...</p>
                      <div className="flex justify-end space-x-2">
                        <button className="px-2 py-1 bg-green-600 text-xs rounded hover:bg-green-700">Accept</button>
                        <button className="px-2 py-1 bg-red-600 text-xs rounded hover:bg-red-700">Reject</button>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
          <button
            className="bg-gray-700 hover:bg-gray-600 px-2 flex items-center"
            onClick={() => setIsPanelCollapsed(!isPanelCollapsed)}
          >
            {isPanelCollapsed ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
          </button>
        </div>
      </div>

      <StatusBar />
    </div>
  )
}

export default BlogEditor

