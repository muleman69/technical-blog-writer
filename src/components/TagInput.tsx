import type React from "react"
import { useState, type KeyboardEvent } from "react"
import { X } from "lucide-react"

interface TagInputProps {
  tags: string[]
  setTags: React.Dispatch<React.SetStateAction<string[]>>
}

export const TagInput: React.FC<TagInputProps> = ({ tags, setTags }) => {
  const [input, setInput] = useState("")

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && input) {
      e.preventDefault()
      setTags([...tags, input])
      setInput("")
    }
  }

  const removeTag = (index: number) => {
    setTags(tags.filter((_, i) => i !== index))
  }

  return (
    <div className="flex flex-wrap items-center gap-2 p-2 bg-gray-800 rounded-lg focus-within:ring-2 focus-within:ring-blue-500">
      {tags.map((tag, index) => (
        <div key={index} className="flex items-center bg-gray-700 text-gray-200 px-2 py-1 rounded-full">
          <span className="text-sm">{tag}</span>
          <button type="button" onClick={() => removeTag(index)} className="ml-1 text-gray-400 hover:text-gray-200">
            <X size={14} />
          </button>
        </div>
      ))}
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 bg-transparent focus:outline-none text-gray-200 min-w-[120px]"
        placeholder="Add keywords..."
      />
    </div>
  )
}

