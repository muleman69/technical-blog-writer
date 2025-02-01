import type React from "react"
import { useState } from "react"
import { Search, Grid, List, User, ChevronDown, PlusCircle, Zap, Edit3, Trash2, Send, Clock } from "lucide-react"

const Dashboard: React.FC = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  // Mock data for blog posts
  const blogPosts = [
    {
      id: 1,
      title: "Introduction to React Hooks",
      status: "Published",
      lastEdited: "2023-05-15",
      wordCount: 1200,
      technicalLevel: "Intermediate",
      snippet: "React Hooks are a powerful feature that allows...",
    },
    {
      id: 2,
      title: "Advanced TypeScript Techniques",
      status: "Draft",
      lastEdited: "2023-05-10",
      wordCount: 1800,
      technicalLevel: "Advanced",
      snippet: "TypeScript offers several advanced features that...",
    },
    {
      id: 3,
      title: "Getting Started with Next.js",
      status: "Generated",
      lastEdited: "2023-05-08",
      wordCount: 1500,
      technicalLevel: "Beginner",
      snippet: "Next.js is a popular React framework that simplifies...",
    },
    // Add more mock data as needed
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      {/* Header */}
      <header className="bg-gray-800 p-4 flex justify-between items-center">
        <div className="text-xl font-bold">BlogAI</div>
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-md flex items-center">
            <PlusCircle size={18} className="mr-2" />
            New Post
          </button>
          <button className="px-4 py-2 bg-green-600 hover:bg-green-500 rounded-md flex items-center">
            <Zap size={18} className="mr-2" />
            Generate Post
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
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 p-4">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Status</label>
              <select className="w-full bg-gray-700 rounded-md p-2">
                <option>All</option>
                <option>Published</option>
                <option>Draft</option>
                <option>Generated</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Date Range</label>
              <input type="date" className="w-full bg-gray-700 rounded-md p-2" />
              <input type="date" className="w-full bg-gray-700 rounded-md p-2 mt-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Technical Level</label>
              <select className="w-full bg-gray-700 rounded-md p-2">
                <option>All</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Writing Style</label>
              <select className="w-full bg-gray-700 rounded-md p-2">
                <option>All</option>
                <option>Technical</option>
                <option>Conversational</option>
                <option>Tutorial</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Search</label>
              <div className="relative">
                <input type="text" className="w-full bg-gray-700 rounded-md p-2 pl-8" placeholder="Search posts..." />
                <Search size={18} className="absolute left-2 top-2.5 text-gray-400" />
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {/* Stats Bar */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Total Posts</h3>
              <p className="text-3xl font-bold">42</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Published Posts</h3>
              <p className="text-3xl font-bold">28</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Avg. Generation Time</h3>
              <p className="text-3xl font-bold">2.5 min</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Success Rate</h3>
              <p className="text-3xl font-bold">95%</p>
            </div>
          </div>

          {/* View Toggle and Post List */}
          <div className="mb-4 flex justify-between items-center">
            <h2 className="text-2xl font-bold">Blog Posts</h2>
            <div className="flex space-x-2">
              <button
                className={`p-2 rounded-md ${viewMode === "grid" ? "bg-gray-700" : "bg-gray-800"}`}
                onClick={() => setViewMode("grid")}
              >
                <Grid size={20} />
              </button>
              <button
                className={`p-2 rounded-md ${viewMode === "list" ? "bg-gray-700" : "bg-gray-800"}`}
                onClick={() => setViewMode("list")}
              >
                <List size={20} />
              </button>
            </div>
          </div>

          <div className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}>
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <div className="flex items-center space-x-2 mb-2">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      post.status === "Published"
                        ? "bg-green-600"
                        : post.status === "Draft"
                          ? "bg-yellow-600"
                          : "bg-blue-600"
                    }`}
                  >
                    {post.status}
                  </span>
                  <span className="text-sm text-gray-400">{post.lastEdited}</span>
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <Clock size={14} />
                  <span className="text-sm">{post.wordCount} words</span>
                  <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">{post.technicalLevel}</span>
                </div>
                <p className="text-sm text-gray-400 mb-4">{post.snippet}</p>
                <div className="flex space-x-2">
                  <button className="p-2 bg-blue-600 rounded-md hover:bg-blue-500">
                    <Edit3 size={16} />
                  </button>
                  <button className="p-2 bg-red-600 rounded-md hover:bg-red-500">
                    <Trash2 size={16} />
                  </button>
                  <button className="p-2 bg-green-600 rounded-md hover:bg-green-500">
                    <Send size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}

export default Dashboard

