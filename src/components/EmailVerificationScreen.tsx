import React from "react"
import { useState } from "react"
import { Check } from "lucide-react"
import AuthLayout from "./AuthLayout.tsx"

interface EmailVerificationScreenProps {
  email: string
  onBackToLoginClick: () => void
}

const EmailVerificationScreen: React.FC<EmailVerificationScreenProps> = ({ email, onBackToLoginClick }) => {
  const [isVerified, setIsVerified] = useState(false)
  const [isResending, setIsResending] = useState(false)

  const handleResendVerification = async () => {
    setIsResending(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsResending(false)
  }

  return (
    <AuthLayout title="Verify your email">
      <div className="text-center">
        {isVerified ? (
          <VerificationSuccess />
        ) : (
          <>
            <div className="mb-4">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
            <p className="text-lg font-medium text-gray-300 mb-2">Verify your email address</p>
            <p className="text-sm text-gray-400 mb-4">
              We've sent a verification link to <span className="font-medium">{email}</span>
            </p>
            <button
              onClick={handleResendVerification}
              className="w-full mb-4 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isResending}
            >
              {isResending ? "Resending..." : "Resend verification email"}
            </button>
            <div className="text-sm">
              <button type="button" className="font-medium text-blue-500 hover:text-blue-400">
                Edit email address
              </button>
            </div>
            <div className="mt-4 text-sm">
              <button type="button" onClick={onBackToLoginClick} className="font-medium text-blue-500 hover:text-blue-400">
                Back to login
              </button>
            </div>
          </>
        )}
      </div>
    </AuthLayout>
  )
}

const VerificationSuccess: React.FC = () => {
  return (
    <div className="text-center">
      <div className="mb-4">
        <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto">
          <Check className="w-8 h-8 text-white" />
        </div>
      </div>
      <p className="text-lg font-medium text-gray-300 mb-2">Email verified successfully</p>
      <button className="w-full mt-4 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        Continue to dashboard
      </button>
    </div>
  )
}

export default EmailVerificationScreen

