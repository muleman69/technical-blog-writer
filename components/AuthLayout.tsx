import type React from "react"

interface AuthLayoutProps {
  children: React.ReactNode
  title: string
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title }) => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img className="mx-auto h-12 w-auto" src="/placeholder.svg?height=48&width=48" alt="BlogAI Logo" />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-200">{title}</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">{children}</div>
      </div>
    </div>
  )
}

export default AuthLayout

