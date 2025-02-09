"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TinderCardArray from "@/components/TinderCardArray"

interface Event {
  id: string
  title: string
  time: string
  location: string
  description: string
  status: "posted" | "draft" | "archive"
}

interface EventDashboardProps {
  onCreateClick: () => void
}

export function EventLists({ onCreateClick }: Readonly<EventDashboardProps>) {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState<"posted" | "draft" | "archive">("posted")
  const [events, setEvents] = useState<Event[]>([])
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([])

  useEffect(() => {
    // Simulating API call to fetch events
    const fetchEvents = async () => {
      const mockEvents: Event[] = [
        {
          id: "1",
          title: "Tech Conference",
          time: "Sat, Feb 8 · 1:00 PM",
          location: "San Francisco",
          description: "Annual tech conference",
          status: "posted",
        },
        {
          id: "2",
          title: "Art Exhibition",
          time: "Sun, Feb 9 · 2:00 PM",
          location: "New York",
          description: "Modern art showcase",
          status: "draft",
        },
        {
          id: "3",
          title: "Music Festival",
          time: "Fri, Feb 14 · 6:00 PM",
          location: "Los Angeles",
          description: "Three-day music event",
          status: "archive",
        },
      ]
      setEvents(mockEvents)
    }

    fetchEvents()
  }, [])

  useEffect(() => {
    const filtered = events.filter(
      (event) => event.status === activeTab && event.title.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    setFilteredEvents(filtered)
  }, [events, activeTab, searchQuery])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  return (
    <div className="container mx-auto p-4 space-y-6 w-[90vw] md:w-[70vw]">
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search with event title" className="pl-10" value={searchQuery} onChange={handleSearch} />
        </div>
        <Button onClick={onCreateClick}>Create Event</Button>
      </div>

      <Tabs
        defaultValue="posted"
        className="w-full"
        onValueChange={(value) => setActiveTab(value as "posted" | "draft" | "archive")}
      >
        <TabsList className="w-full justify-start">
          <TabsTrigger value="posted">Posted</TabsTrigger>
          <TabsTrigger value="draft">Draft</TabsTrigger>
          <TabsTrigger value="archive">Archive</TabsTrigger>
        </TabsList>
        <TabsContent value="posted">
          <TinderCardArray num={filteredEvents.length} eventsArray={filteredEvents.map((e) => e.title)} />
        </TabsContent>
        <TabsContent value="draft">
          <TinderCardArray num={filteredEvents.length} eventsArray={filteredEvents.map((e) => e.title)} />
        </TabsContent>
        <TabsContent value="archive">
          <TinderCardArray num={filteredEvents.length} eventsArray={filteredEvents.map((e) => e.title)} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

