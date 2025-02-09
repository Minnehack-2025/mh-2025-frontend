"use client"

import { useEffect, useState } from "react"
import { OnboardingForm } from "@/components/onboarding-form"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function Onboarding() {
  const router = useRouter()
  const [email, setEmail] = useState<string | null>(null)

  useEffect(() => {
    const signupData = sessionStorage.getItem("signupData")
    if (signupData) {
      const { email } = JSON.parse(signupData)
      setEmail(email)
      sessionStorage.removeItem("signupData")
    }
  }, [])

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-3xl space-y-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={() => router.back()} className="hover:bg-muted">
              ← Back
            </Button>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-4xl">👋</span>
            <span className="text-muted-foreground">{email}</span>
          </div>
          <Button variant="ghost" className="text-muted-foreground">
            Skip
          </Button>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Tell Us about You</h1>
            <p className="text-muted-foreground">This would help us choose the best event for you!</p>
          </div>
          
          <OnboardingForm/>
        </div>
      </div>
    </div>
  )
}
