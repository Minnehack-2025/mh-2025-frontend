"use client"

import { ArrowLeft, ArrowRight, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import TinderCardArray from "@/components/TinderCardList"
import { Input } from "@/components/ui/input"

interface EventDetailProps {
  isHost: boolean
  event: {
    id: string
    title: string
    time: string
    location: string
    description: string
    status: "posted" | "draft" | "archive"
    openTo: "Everyone" | "Only to Followers" | "Private"
    price: string
    registrationType: "Google Form" | "Eventbrites" | "Org site"
  }
  onBack: () => void
}

export function EventDetail({ isHost, event, onBack }: EventDetailProps) {
  const getActionButton = (status: string) => {
    if (status === "archive") return null
    return (
      <Button variant="secondary" className="ml-auto">
        {status === "posted" ? "Unpublish" : "Edit"}
      </Button>
    )
  }

  return (
    <div className="container mx-auto p-4 space-y-6 w-[90vw] md:w-[70vw]">
      <div className="flex items-center w-full">
        <Button variant="ghost" onClick={onBack} className="p-2">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        {isHost && getActionButton(event.status)}
      </div>

      <div className="relative">
        {isHost && (
          <Badge variant="secondary" className="absolute left-4 top-4">
            Host
          </Badge>
        )}
        <TinderCardArray/>
      </div>

      <div className="space-y-4">
        <h1 className="text-2xl font-bold">{event.title}</h1>
        <div className="text-sm text-muted-foreground">
          {event.time} • {event.location}
        </div>

        <div className="flex justify-between items-center py-2">
          <div className="text-sm font-medium">Open to</div>
          <div className="text-sm">{event.openTo}</div>
        </div>

        <div className="flex justify-between items-center py-2">
          <div className="text-sm font-medium">Price</div>
          <div className="text-sm">{event.price}</div>
        </div>

        <div className="flex items-center gap-2 py-2">
          <Input readOnly value={`connectionhub.me/event/${event.id}`} className="bg-muted" />
          <Button
            variant="outline"
            size="icon"
            onClick={() => navigator.clipboard.writeText(`connectionhub.me/event/${event.id}`)}
          >
            <Copy className="h-4 w-4" />
          </Button>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Description</h2>
          <p className="text-sm text-muted-foreground whitespace-pre-wrap">{event.description}</p>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium">Also posted in</p>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              {/* <Instagram className="h-4 w-4" /> */}
              <span className="text-sm text-muted-foreground hover:underline cursor-pointer">
                instagram.com/event/{event.id}
              </span>
            </div>
            
            {/* Add more social links as needed */}
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Registration</h2>
          <Button className="w-full justify-between" variant="outline">
            <div className="flex items-center gap-2">
              <span>RSVP</span>
              <span className="text-muted-foreground">{event.registrationType}</span>
            </div>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

