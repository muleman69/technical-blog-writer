import type React from "react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { Eye, EyeOff } from "lucide-react"
import AuthLayout from "./AuthLayout"

interface ResetRequestFormData {
  email: string
}

interface NewPasswordFormData {
  password: string
  confirmPassword: string
}

const PasswordResetFlow: React.FC = () => {
  const [step, setStep] = useState<"request" | "newPassword">("request")

  return (
    <>{step === "request" ? <ResetRequestScreen onSuccess={() => setStep("newPassword")} /> : <NewPasswordScreen />}</>
  )
}

const ResetRequestScreen: React.FC<{ onSuccess: () => void }> = ({ onSuccess }) => {
  const [isLoading, setIsLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetRequestFormData>()

  const onSubmit = async (data: ResetRequestFormData) => {
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log(data)
    setIsLoading(false)
    onSuccess()
  }

  return (
    <AuthLayout title="Reset your password">
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300">
            Email address
          </label>
          <div className="mt-1">
            <input
              id="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-700 text-gray-200"
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
              })}
            />
            {errors.email && <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>}
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send Reset Link"}
          </button>
        </div>
      </form>

      <div className="mt-6 text-center">
        <a href="#" className="text-sm font-medium text-blue-500 hover:text-blue-400">
          Back to Login
        </a>
      </div>
    </AuthLayout>
  )
}

const NewPasswordScreen: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<NewPasswordFormData>()

  const onSubmit = async (data: NewPasswordFormData) => {
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log(data)
    setIsLoading(false)
  }

  const password = watch("password", "")
  const passwordStrength = getPasswordStrength(password)

  return (
    <AuthLayout title="Create new password">
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-300">
            New Password
          </label>
          <div className="mt-1 relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-700 text-gray-200"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 8, message: "Password must be at least 8 characters" },
              })}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-300"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>
          {errors.password && <p className="mt-2 text-sm text-red-500">{errors.password.message}</p>}
          <div className="mt-2">
            <PasswordStrengthIndicator strength={passwordStrength} />
          </div>
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300">
            Confirm New Password
          </label>
          <div className="mt-1">
            <input
              id="confirmPassword"
              type="password"
              autoComplete="new-password"
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-700 text-gray-200"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (val: string) => {
                  if (watch("password") != val) {
                    return "Your passwords do not match"
                  }
                },
              })}
            />
            {errors.confirmPassword && <p className="mt-2 text-sm text-red-500">{errors.confirmPassword.message}</p>}
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? "Resetting..." : "Reset Password"}
          </button>
        </div>
      </form>
    </AuthLayout>
  )
}

const PasswordStrengthIndicator: React.FC<{ strength: number }> = ({ strength }) => {
  const getColor = () => {
    if (strength < 2) return "bg-red-500"
    if (strength < 3) return "bg-yellow-500"
    return "bg-green-500"
  }

  return (
    <div className="flex items-center space-x-2">
      <div className="h-2 flex-1 bg-gray-600 rounded-full overflow-hidden">
        <div className={`h-full ${getColor()}`} style={{ width: `${strength * 25}%` }}></div>
      </div>
      <span className="text-sm text-gray-400">{strength < 2 ? "Weak" : strength < 3 ? "Medium" : "Strong"}</span>
    </div>
  )
}

const getPasswordStrength = (password: string): number => {
  let strength = 0
  if (password.length >= 8) strength++
  if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength++
  if (password.match(/\d/)) strength++
  if (password.match(/[^a-zA-Z\d]/)) strength++
  return strength
}

export default PasswordResetFlow

