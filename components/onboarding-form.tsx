"use client"

import { useState, useEffect, type ChangeEvent, type FormEvent } from "react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { SiGooglecalendar } from "react-icons/si";

import { toast } from "@/components/ui/use-toast"

interface SignupData {
  email: string
  password: string
}

interface UserData {
  username: string
  interests: string
  educationLevel: string
  preference: string
  availability: string
  goal: string
  image: File | null
  email: string
  password: string
}

export function OnboardingForm(): React.ReactElement {
  const router = useRouter()
  const [userData, setUserData] = useState<UserData>({
    username: "",
    interests: "",
    educationLevel: "",
    preference: "",
    availability: "",
    goal: "",
    image: null,
    email: "",
    password: "",
  })

  useEffect(() => {
    const signupData = sessionStorage.getItem("signupData")
    if (signupData) {
      const { email, password } = JSON.parse(signupData) as SignupData
      setUserData((prevState: UserData) => ({ ...prevState, email, password }))
    }
  }, [])

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setUserData((prevState: UserData) => ({ ...prevState, [name]: value }))
  }

  const handleSelectChange = (name: string) => (value: string) => {
    setUserData((prevState: UserData) => ({ ...prevState, [name]: value }))
  }

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setUserData((prevState: UserData) => ({ ...prevState, image: file }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData()
    Object.entries(userData).forEach(([key, value]) => {
      if (key === "interests") {
        formData.append(key, JSON.stringify({ category: value }))
      } else if (key === "availability") {
        formData.append(key, JSON.stringify({ preference: value }))
      } else if (key === "image" && value instanceof File) {
        formData.append(key, value)
      } else {
        formData.append(key, value as string)
      }
    })

    try {
      const response = await fetch("/api/users", {
        method: "POST",
        body: formData,
      })

      if (response.ok) {
        toast({
          title: "Success",
          description: "User created successfully!",
        })
        router.push("/explore")
      } else {
        const errorData = await response.json()
        throw new Error(errorData.message || "Failed to create user")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "An error occurred",
        variant: "destructive",
      })
    }
  }
  
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-3xl space-y-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                name="username"
                value={userData.username}
                onChange={handleInputChange}
                placeholder="Username"
                className="w-full"
                required
              />
            </div>

            <div className="space-y-2">
              <Label>Category that interests You</Label>
              <Select onValueChange={handleSelectChange("interests")} required>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Technology" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="technology">Technology</SelectItem>
                  <SelectItem value="design">Design</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Education level</Label>
              <Select onValueChange={handleSelectChange("educationLevel")} required>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="undergraduate" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="undergraduate">Undergraduate</SelectItem>
                  <SelectItem value="graduate">Graduate</SelectItem>
                  <SelectItem value="phd">PhD</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Do you like going out for an event?</Label>
              <Select onValueChange={handleSelectChange("preference")} required>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Yes - in daily basis" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daily">Absolutely Yes - in daily basis</SelectItem>
                  <SelectItem value="weekly">Yes - in weekly basis</SelectItem>
                  <SelectItem value="monthly">Yes - in monthly basis</SelectItem>
                  <SelectItem value="no">No - I prefer online events</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Tell us your availability</Label>
              <Button variant="outline" className="w-full justify-between">
                Sync with Google calendar
                <SiGooglecalendar className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-2">
              <Label>Tell our AI your ultimate goal of going to events</Label>
              <Textarea
                id="goal"
                name="goal"
                value={userData.goal}
                onChange={handleInputChange}
                placeholder="I want to land an SWE internship in FAANG, would wanna join networking events, career, or any coding events."
                className="min-h-[100px] w-full"
                required
              />
            </div>

            <div className="space-y-2">
            <Label htmlFor="image">Profile Image (optional)</Label>
            <Input id="image" name="image" type="file" onChange={handleImageChange} accept="image/*" />            </div>
          </div>

          <div className="pt-4">
            <Button  type="submit" className="w-full">Next</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

