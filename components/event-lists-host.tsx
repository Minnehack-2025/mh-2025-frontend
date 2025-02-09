"use client"

import type React from "react"
import { useState } from "react"
import { Search } from "lucide-react"
// import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TinderCardList from "./TinderCardList"
import { Input } from "./ui/input"

interface EventListsProps {
  // onCreateClick: () => void
  onEventClick: () => void
}

export function EventLists({  }: Readonly<EventListsProps>) { //onEventClick
  // const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState<"posted" | "draft" | "archive">("posted")
  // const [events, setEvents] = useState<Event[]>([])
  // const [filteredEvents, setFilteredEvents] = useState<Event[]>([])

  const 

  return (
    <div className="container mx-auto p-4 space-y-6 w-[90vw] md:w-[70vw]">
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search with event title" className="pl-10"/>
        </div>
        <Button onClick={handleCreateEvent}>Create Event</Button>
      </div>

      <Tabs
        defaultValue={activeTab}
        className="w-full"
        onValueChange={(value) => setActiveTab(value as "posted" | "draft" | "archive")}
      >
        <TabsList className="w-full justify-start">
          <TabsTrigger value="posted">Posted</TabsTrigger>
          <TabsTrigger value="draft">Draft</TabsTrigger>
          <TabsTrigger value="archive">Archive</TabsTrigger>
        </TabsList>
        <TabsContent value="posted">
          <TinderCardList/>
        </TabsContent>
        <TabsContent value="draft">
          <TinderCardList/>
        </TabsContent>
        <TabsContent value="archive">
          <TinderCardList/>
        </TabsContent>
      </Tabs>
    </div>
  )
}

// const EventLists = () => {
//   return (
//     <></>
//   );
// }

export default EventLists;