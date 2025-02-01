import type React from "react"
import { useState } from "react"
import { ChevronDown, ChevronUp, Clock, Hash } from "lucide-react"
import { TagInput } from "./TagInput"

const BlogPostGenerator: React.FC = () => {
  const [keywords, setKeywords] = useState<string[]>([])
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 flex">
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">Generate New Blog Post</h1>

        <form className="space-y-6">
          <div>
            <label htmlFor="topic" className="block text-sm font-medium mb-2">
              Blog Topic/Title
            </label>
            <input
              type="text"
              id="topic"
              className="w-full bg-gray-800 text-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your blog topic or title"
            />
          </div>

          <div>
            <label htmlFor="wordCount" className="block text-sm font-medium mb-2">
              Target Word Count
            </label>
            <input
              type="number"
              id="wordCount"
              className="w-full bg-gray-800 text-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter target word count"
            />
          </div>

          <div>
            <label htmlFor="keywords" className="block text-sm font-medium mb-2">
              Keywords
            </label>
            <TagInput tags={keywords} setTags={setKeywords} />
          </div>

          <div>
            <label htmlFor="technicalLevel" className="block text-sm font-medium mb-2">
              Technical Level
            </label>
            <select
              id="technicalLevel"
              className="w-full bg-gray-800 text-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>

          <div>
            <label htmlFor="targetAudience" className="block text-sm font-medium mb-2">
              Target Audience
            </label>
            <select
              id="targetAudience"
              className="w-full bg-gray-800 text-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="developers">Developers</option>
              <option value="designers">Designers</option>
              <option value="managers">Managers</option>
              <option value="students">Students</option>
            </select>
          </div>

          <div>
            <label htmlFor="writingStyle" className="block text-sm font-medium mb-2">
              Writing Style
            </label>
            <select
              id="writingStyle"
              className="w-full bg-gray-800 text-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="technical">Technical</option>
              <option value="conversational">Conversational</option>
              <option value="tutorial">Tutorial</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-4 rounded-lg transition duration-200"
          >
            Generate Blog Post
          </button>

          <div>
            <button
              type="button"
              className="flex items-center text-blue-400 hover:text-blue-300"
              onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}
            >
              Advanced Options
              {isAdvancedOpen ? <ChevronUp className="ml-2" size={16} /> : <ChevronDown className="ml-2" size={16} />}
            </button>
            {isAdvancedOpen && (
              <div className="mt-4 p-4 bg-gray-800 rounded-lg">
                {/* Add advanced options here */}
                <p>Advanced options content goes here.</p>
              </div>
            )}
          </div>
        </form>
      </div>

      <div className="w-1/3 bg-gray-800 p-6">
        <h2 className="text-xl font-bold mb-4">Preview</h2>
        <div className="space-y-4">
          <div className="flex items-center">
            <Clock className="mr-2" size={18} />
            <span>Estimated generation time: 2-3 minutes</span>
          </div>
          <div className="flex items-center">
            <Hash className="mr-2" size={18} />
            <span>Word count target: 1000 words</span>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-2">Sample Keywords</h3>
            <div className="flex flex-wrap gap-2">
              {keywords.map((keyword, index) => (
                <span key={index} className="bg-blue-600 text-white px-2 py-1 rounded-full text-sm">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPostGenerator

