import type React from "react"
import { useState } from "react"
import { ArrowLeft, Upload, ChevronRight } from "lucide-react"

const Settings: React.FC = () => {
  const [activeSection, setActiveSection] = useState("profile")

  const sections = [
    { id: "profile", title: "Profile Settings" },
    { id: "writing", title: "Writing Preferences" },
    { id: "ai", title: "AI Assistant Settings" },
    { id: "integration", title: "Integration Settings" },
    { id: "notifications", title: "Notification Preferences" },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      {/* Header */}
      <header className="bg-gray-800 p-4 flex justify-between items-center">
        <button className="flex items-center text-blue-400 hover:text-blue-300">
          <ArrowLeft size={20} className="mr-2" />
          Back to Dashboard
        </button>
        <h1 className="text-2xl font-bold">Settings</h1>
        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-md">Save Changes</button>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 p-4">
          <nav>
            <ul className="space-y-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    className={`w-full text-left px-4 py-2 rounded-md flex justify-between items-center ${
                      activeSection === section.id ? "bg-blue-600" : "hover:bg-gray-700"
                    }`}
                    onClick={() => setActiveSection(section.id)}
                  >
                    {section.title}
                    <ChevronRight size={16} />
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {activeSection === "profile" && (
            <section>
              <h2 className="text-xl font-semibold mb-4">Profile Settings</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center">
                    <Upload size={24} />
                  </div>
                  <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-md">Upload Picture</button>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input type="text" className="w-full bg-gray-800 rounded-md p-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input type="email" className="w-full bg-gray-800 rounded-md p-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Bio/Description</label>
                  <textarea className="w-full bg-gray-800 rounded-md p-2" rows={4}></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Social Media Links</label>
                  <input type="url" placeholder="Twitter" className="w-full bg-gray-800 rounded-md p-2 mb-2" />
                  <input type="url" placeholder="LinkedIn" className="w-full bg-gray-800 rounded-md p-2 mb-2" />
                  <input type="url" placeholder="GitHub" className="w-full bg-gray-800 rounded-md p-2" />
                </div>
                <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md">Change Password</button>
              </div>
            </section>
          )}

          {activeSection === "writing" && (
            <section>
              <h2 className="text-xl font-semibold mb-4">Writing Preferences</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-1">Default Technical Level</label>
                  <select className="w-full bg-gray-800 rounded-md p-2">
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Preferred Writing Style</label>
                  <select className="w-full bg-gray-800 rounded-md p-2">
                    <option>Technical</option>
                    <option>Conversational</option>
                    <option>Tutorial</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Default Target Audience</label>
                  <select className="w-full bg-gray-800 rounded-md p-2">
                    <option>Developers</option>
                    <option>Designers</option>
                    <option>Managers</option>
                    <option>Students</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Default Word Count</label>
                  <input type="number" className="w-full bg-gray-800 rounded-md p-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Custom Keywords/Topics</label>
                  <input
                    type="text"
                    className="w-full bg-gray-800 rounded-md p-2"
                    placeholder="Enter keywords separated by commas"
                  />
                </div>
              </div>
            </section>
          )}

          {activeSection === "ai" && (
            <section>
              <h2 className="text-xl font-semibold mb-4">AI Assistant Settings</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-1">Suggestion Frequency</label>
                  <input type="range" className="w-full" min="0" max="100" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Technical Accuracy Level</label>
                  <select className="w-full bg-gray-800 rounded-md p-2">
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                  </select>
                </div>
                <div className="flex items-center justify-between">
                  <span>Real-time Suggestions</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Language Preference</label>
                  <select className="w-full bg-gray-800 rounded-md p-2">
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                    <option>German</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Custom Terminology List</label>
                  <textarea
                    className="w-full bg-gray-800 rounded-md p-2"
                    rows={4}
                    placeholder="Enter custom terms, one per line"
                  ></textarea>
                </div>
              </div>
            </section>
          )}

          {activeSection === "integration" && (
            <section>
              <h2 className="text-xl font-semibold mb-4">Integration Settings</h2>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span>WordPress Connection</span>
                  <span className="px-2 py-1 bg-green-600 rounded-full text-xs">Connected</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Drupal Connection</span>
                  <span className="px-2 py-1 bg-red-600 rounded-full text-xs">Disconnected</span>
                </div>
                <div>
                  <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-md mr-2">Connect CMS</button>
                  <button className="px-4 py-2 bg-red-600 hover:bg-red-500 rounded-md">Disconnect CMS</button>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">API Key</label>
                  <div className="flex">
                    <input
                      type="text"
                      className="flex-1 bg-gray-800 rounded-l-md p-2"
                      placeholder="Your API key"
                      readOnly
                    />
                    <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-r-md">Regenerate</button>
                  </div>
                </div>
              </div>
            </section>
          )}

          {activeSection === "notifications" && (
            <section>
              <h2 className="text-xl font-semibold mb-4">Notification Preferences</h2>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span>Email Notifications</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <span>Blog Generation Completion Alerts</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <span>Comment Notifications</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <span>Publishing Reminders</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  )
}

export default Settings

