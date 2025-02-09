"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock } from "lucide-react"
import { format, addDays, startOfWeek } from "date-fns"

export function EventTimeMatching() {
  const [scope, setScope] = useState("ALL")
  const [selectedTime, setSelectedTime] = useState<Date | null>(null)

  // Placeholder data for best times
  const bestTimes = [
    { date: new Date(2024, 1, 8, 13, 0), busy: "30%" },
  ]

  // Generate dates for Thu-Sun
  const today = startOfWeek(new Date(), { weekStartsOn: 4 }) // Start from Thursday
  const dates = Array.from({ length: 4 }).map((_, i) => addDays(today, i))

  // Generate time slots for each hour
  const generateTimeSlots = () => {
    const slots = []
    for (let hour = 9; hour < 21; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        slots.push({
          time: new Date(2024, 0, 1, hour, minute),
          busy: "100%",
        })
      }
    }
    return slots
  }

  const timeSlots = generateTimeSlots()

  const handleTimeSelect = (date: Date, time: Date) => {
    const newDate = new Date(date)
    newDate.setHours(time.getHours(), time.getMinutes())
    setSelectedTime(newDate)
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="shrink-0">
          <Clock className="h-4 w-4 mr-2" />
          Choose for Me
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
          {/* Best Time Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Best Time</h3>
            <div className="space-y-2">
              {bestTimes.map((slot, index) => (
                <div key={index} className="flex items-center justify-between bg-muted/50 rounded-lg p-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{format(slot.date, "EEE, MMM d")}</span>
                    <span className="text-sm">{format(slot.date, "h:mm a")}</span>
                  </div>
                  <Button variant="secondary" size="sm">
                    Select
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Availability Calendar */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Availability Calendar</h3>

            {/* Selected Time Display */}
            <div className="flex items-center gap-2 bg-muted/50 rounded-lg p-3">
              <Calendar className="h-4 w-4" />
              <span className="text-sm">
                {selectedTime ? format(selectedTime, "EEE, MMM d • h:mm a") : "Select the time block in the calendar"}
              </span>
            </div>

            <div className="border rounded-lg">
              {/* Calendar Header */}
              <div className="grid grid-cols-4 border-b">
                {dates.map((date) => (
                  <div key={date.toISOString()} className="p-2 text-center text-sm font-medium">
                    {format(date, "EEE")}
                    <div className="text-xs text-muted-foreground">{format(date, "MMM d")}</div>
                  </div>
                ))}
              </div>

              {/* Time Slots */}
              <div className="h-[400px] overflow-y-auto">
                <div className="relative">
                  {/* Time indicators */}
                  <div className="absolute left-0 top-0 w-16 h-full border-r">
                    {timeSlots.map((slot, i) => (
                      <div key={i} className="h-[30px] border-b text-xs p-1">
                        {i % 2 === 0 && format(slot.time, "h:mm a")}
                      </div>
                    ))}
                  </div>

                  {/* Calendar Grid */}
                  <div className="ml-16 grid grid-cols-4">
                    {dates.map((date) => (
                      <div key={date.toISOString()} className="border-r">
                        {timeSlots.map((slot, slotIndex) => (
                          <div
                            key={`${date.toISOString()}-${slotIndex}`}
                            className="h-[30px] border-b relative group hover:bg-muted/50 cursor-pointer"
                            onClick={() => handleTimeSelect(date, slot.time)}
                          >
                            <div className="absolute inset-0 bg-red-100/50">
                              <div className="p-1">
                                <span className="text-xs text-red-500">{slot.busy} busy</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

