"use client"

import { useState } from "react"
import { EventLists } from "@/components/event-lists-host"
import { EventCreation } from "@/components/event-creation"
import { EventDetail } from "@/components/event-detail"

type View = "dashboard" | "creation" | "detail"

// Sample event data
const sampleEvent = {
  id: "123",
  title: "Tech Conference",
  time: "Sat, Feb 8 · 1:00 PM",
  location: "San Francisco",
  description: "Join us for an exciting tech conference featuring industry leaders and innovative discussions.",
  status: "posted" as const,
  openTo: "Everyone" as const,
  price: "From $41.99",
  registrationType: "Google Form" as const,
}

export default function Page() {
  const [view, setView] = useState<View>("dashboard")
  const [isHost] = useState(true) 

  const renderView = () => {
    switch (view) {
      case "creation":
        return <EventCreation onBack={() => setView("dashboard")} />
      case "detail":
        return <EventDetail isHost={isHost} event={sampleEvent} onBack={() => setView("dashboard")} />
      default:

        return <EventLists onCreateClick={() => setView("creation")}  /> //onEventClick={handleEventClick}
    }
  }

  return renderView()
}

