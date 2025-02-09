"use client"

import { useRouter } from "next/navigation"
import { EventDetail } from "@/components/event-detail"

// This is a mock event. In a real application, you would fetch this data based on the event ID.
const mockEvent = {
  id: "123",
  title: "Tech Conference 2023",
  time: "Sat, Aug 15 · 9:00 AM",
  location: "San Francisco, CA",
  description:
    "Join us for the biggest tech conference of the year, featuring keynotes from industry leaders and hands-on workshops on the latest technologies.",
  status: "posted" as const,
  openTo: "Everyone" as const,
  price: "From $99.99",
  registrationType: "Eventbrites" as const,
}

export default function EventDetailPage() {
  const router = useRouter()

  const handleBack = () => {
    router.back()
  }

  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-background p-6 md:p-10">
      <div className="w-full max-w-4xl">
        <EventDetail
          isHost={true} 
          event={mockEvent}
          onBack={handleBack}
        />
      </div>
    </div>
  )
}

