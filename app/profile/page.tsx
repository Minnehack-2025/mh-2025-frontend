"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Footprints, Calendar, Target, Link2, Pencil, Mail } from "lucide-react"

export default function ProfilePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="mx-auto border-none shadow-none max-w-md sm:max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-5xl">
        <CardContent className="p-6 space-y-6">
          {/* Profile Header */}
          <div className="flex items-start justify-between">
            <div className="flex gap-3">
              <Avatar className="h-14 w-14">
                <AvatarImage
                  src="\logo\sqrt.svg"
                  alt="Co. Hub admin"
                />
                <AvatarFallback>C</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="font-semibold text-lg">Co. Hub admin</h2>
                <div className="flex gap-2 text-sm text-muted-foreground">
                  <span>45 Followers</span>
                  <span>•</span>
                  <span>79 Following</span>
                </div>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Pencil className="h-4 w-4" />
            </Button>
          </div>

          {/* Email */}
          <div className="flex items-center gap-2 text-sm">
            <Mail className="h-4 w-4 flex-shrink-0" />
            <span>connectionhub@umm.edu</span>
          </div>

          {/* Tags */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 flex-shrink-0" />
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="rounded-full">
                  Technology
                </Badge>
                <Badge variant="secondary" className="rounded-full">
                  Business
                </Badge>
              </div>
            </div>
          </div>

          {/* Activities */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Footprints className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm">Goes to Physical Events in daily basis</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm">Usually Available at Wed night, Sat night, Sun night</span>
            </div>
          </div>

          {/* Ultimate Goal */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 flex-shrink-0" />
              <span className="font-medium">Ultimate Goal</span>
            </div>
            <p className="text-sm text-muted-foreground pl-7">
              I want to land an SWE internship in FAANG, would wanna join networking events, career, or any coding
              events.
            </p>
          </div>

          {/* Website Link */}
          <div className="flex items-center gap-2">
            <Link2 className="w-5 h-5 flex-shrink-0" />
            <span className="text-sm text-muted-foreground">connectionhub.me/co.hub-admin</span>
          </div>

          {/* Compatibility Score */}
          <Card className="mx-auto border border-gray-300 shadow-none">          
          <CardContent className="p-6 space-y-6">
          <div className="space-y-4">
            <div className="text-center">
            <span className="font-medium">Compatibility Score</span>
              <div className="text-2xl font-semibold text-green-600">59%</div>
              <div className="flex items-center justify-center gap-2 mt-2">
                <Avatar className="h-20 w-20">
                  <AvatarImage
                    src="\logo\sqrt.svg"
                    alt="avatar"
                  />
                  <AvatarFallback>W</AvatarFallback>
                </Avatar>
                <span>&</span>
                <Avatar className="h-20 w-20 bg-red-500">
                  <AvatarFallback>Y</AvatarFallback>
                </Avatar>
              </div>
            </div>
            <a href="/dashboard" className="w-full">
              <Button className="w-full" >Find an event that suit both of you</Button>
            </a>
          </div>
          

          {/* Share Button */}
          <div className="flex justify-end">
            <Button variant="secondary" size="sm">
              Share
            </Button>
          </div>
          </CardContent>
        </Card>
        </CardContent>
      </Card>
    </div>
  )
}

