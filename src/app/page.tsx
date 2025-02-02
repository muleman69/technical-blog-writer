"use client"

import { useState } from "react"
import LoginScreen from "../components/LoginScreen"
import SignUpScreen from "../components/SignUpScreen"
import PasswordResetFlow from "../components/PasswordResetFlow"
import EmailVerificationScreen from "../components/EmailVerificationScreen"

type Screen = "login" | "signup" | "passwordReset" | "emailVerification"

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("login")
  const [email, setEmail] = useState("")

  const renderScreen = () => {
    switch (currentScreen) {
      case "login":
        return (
          <LoginScreen
            onSignUpClick={() => setCurrentScreen("signup")}
            onForgotPasswordClick={() => setCurrentScreen("passwordReset")}
          />
        )
      case "signup":
        return (
          <SignUpScreen
            onLoginClick={() => setCurrentScreen("login")}
            onSignUpSuccess={(email) => {
              setEmail(email)
              setCurrentScreen("emailVerification")
            }}
          />
        )
      case "passwordReset":
        return <PasswordResetFlow onBackToLoginClick={() => setCurrentScreen("login")} />
      case "emailVerification":
        return <EmailVerificationScreen email={email} onBackToLoginClick={() => setCurrentScreen("login")} />
      default:
        return (
          <LoginScreen
            onSignUpClick={() => setCurrentScreen("signup")}
            onForgotPasswordClick={() => setCurrentScreen("passwordReset")}
          />
        )
    }
  }

  return <main className="h-screen">{renderScreen()}</main>
}

