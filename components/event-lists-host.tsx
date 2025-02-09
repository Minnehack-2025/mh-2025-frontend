"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TinderCardList from "@/components/TinderCardList"


interface EventDashboardProps {
  onCreateClick: () => void
}


export function EventLists({ onCreateClick }: Readonly<EventDashboardProps>) {
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  // const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchQuery(e.target.value)
  // }

  return (
    <div className="container mx-auto p-4 space-y-6 w-[90vw] md:w-[70vw]">
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          {/* <Input placeholder="Search with event title" className="pl-10" value={searchQuery} onChange={handleSearch} /> */}
        </div>
        <Button onClick={onCreateClick}>Create Event</Button>
      </div>
        <TabsList className="w-full justify-start">
          <TabsTrigger value="posted">Posted</TabsTrigger>
          <TabsTrigger value="draft">Draft</TabsTrigger>
          <TabsTrigger value="archive">Archive</TabsTrigger>
        </TabsList>
        <TabsContent value="posted">
          <TinderCardArray/>
        </TabsContent>
        <TabsContent value="draft">
          <TinderCardArray/>
        </TabsContent>
        <TabsContent value="archive">
          <TinderCardArray/>

        </TabsContent>
        <TabsContent value="draft">
          <div onClick={() => router.push("/eventsDetails")}>
            <TinderCardList />
          </div>
        </TabsContent>
        <TabsContent value="archive">
          <div onClick={() => router.push("/eventsDetails")}>
            <TinderCardList />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default EventLists;
