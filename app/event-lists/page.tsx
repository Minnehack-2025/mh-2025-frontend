"use client"

import { useState } from "react"
import EventLists from "@/components/event-lists-host"
import { EventCreation } from "@/components/EventCreation"
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
  const [isHost] = useState(true) // You can manage this based on your auth logic

  const renderView = () => {
    switch (view) {
      case "creation":
        return <EventCreation/>
      case "detail":
        return <EventDetail isHost={isHost} event={sampleEvent} onBack={() => setView("dashboard")} />
      default:
        return <EventLists onEventClick={() => setView("detail")} /> //onCreateClick={() => setView("creation")}
    }
  }

  return renderView()
}
