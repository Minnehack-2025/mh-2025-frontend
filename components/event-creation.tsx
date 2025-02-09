"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft } from "lucide-react"

interface EventCreationProps {
  onBack: () => void
}

export function EventCreation({ onBack }: EventCreationProps) {
  return (
    <div className="container mx-auto p-4 space-y-6 w-[90vw] md:w-[70vw]">
      <div className="flex items-center gap-4">
        <Button variant="ghost" onClick={onBack}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
      </div>
      <form className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="title" className="text-sm font-medium">
            Event Title
          </label>
          <Input id="title" placeholder="Enter event title" />
        </div>
        <div className="space-y-2">
          <label htmlFor="time" className="text-sm font-medium">
            Time
          </label>
          <Input id="time" type="datetime-local" />
        </div>
        <div className="space-y-2">
          <label htmlFor="location" className="text-sm font-medium">
            Location
          </label>
          <Input id="location" placeholder="Enter event location" />
        </div>
        <div className="space-y-2">
          <label htmlFor="description" className="text-sm font-medium">
            Description
          </label>
          <Textarea id="description" placeholder="Enter event description" />
        </div>
        <div className="flex justify-end gap-4">
          <Button variant="outline" onClick={onBack}>
            Cancel
          </Button>
          <Button type="submit">Create Event</Button>
        </div>
      </form>
    </div>
  )
}

