"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowRight, Wand2 } from "lucide-react"

export function LearnMyUser() {
  const [scope, setScope] = useState("ALL")

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="shrink-0">
          <Wand2 className="h-4 w-4 mr-2" />
          Pick
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md">
        <SheetHeader className="space-y-4">
          <div className="flex items-center">
            <Select value={scope} onValueChange={setScope}>
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="Scope" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ALL">ALL</SelectItem>
                <SelectItem value="FOLLOWING">Following</SelectItem>
                <SelectItem value="FOLLOWERS">Followers</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </SheetHeader>

        <div className="mt-6 space-y-6">
          {/* Users Following Me Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium">Users Following Me</h3>
              <Button variant="ghost" size="sm" className="text-xs">
                ALL <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
            <div className="bg-muted/50 rounded-lg p-3">
              <p className="text-sm text-muted-foreground">
                50% of users likes career-oriented events, particular in tech. &quot;I want to land an SWE internship in
                FAANG&quot; is some example. They are usually free on Wed night.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>WN</AvatarFallback>
              </Avatar>
            </div>
          </div>

          {/* Potential Users Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium">Potential Users</h3>
              <Button variant="ghost" size="sm" className="text-xs">
                ALL <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
            <div className="bg-muted/50 rounded-lg p-3">
              <p className="text-sm text-muted-foreground">
                50% of users likes tech workshops events. &quot;I want to enhance my coding skills.&quot; They are
                usually free on Wed night.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>ON</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>JX</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

