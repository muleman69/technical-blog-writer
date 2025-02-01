import type React from "react"
import { Clock, Save, Zap } from "lucide-react"

const StatusBar: React.FC = () => {
  return (
    <div className="bg-gray-800 p-2 flex justify-between items-center text-sm">
      <div className="flex items-center space-x-4">
        <span className="flex items-center">
          <Clock size={14} className="mr-1" />
          Words: 0
        </span>
        <span>Reading time: 0 min</span>
      </div>
      <div className="flex items-center space-x-4">
        <span className="flex items-center">
          <Save size={14} className="mr-1" />
          Last saved: 2 minutes ago
        </span>
        <span className="flex items-center">
          <Zap size={14} className="mr-1" />
          AI: Analyzing...
        </span>
      </div>
    </div>
  )
}

export default StatusBar

