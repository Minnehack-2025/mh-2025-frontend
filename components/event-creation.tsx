"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Plus, Calendar as CalendarIcon, Wand2  } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { LearnMyUser } from "@/components/learn-my-user"
import { EventTimeMatching } from "@/components/event-time-matching"

interface EventCreationProps {
  onBack: () => void
}

export function EventCreation({ onBack }: EventCreationProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [date, setDate] = useState<Date>()
  const [price, setPrice] = useState<string>("0")
  const [showDialog, setShowDialog] = useState(false)
  const router = useRouter()

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setImageUrl(url)
    }
  }

  const handlePriceChange = (value: string) => {
    const sanitizedValue = value.replace(/[^\d.]/g, "")
    const parts = sanitizedValue.split(".")
    if (parts.length > 2) return
    if (parts[1]?.length > 2) return
    setPrice(sanitizedValue)
  }

  const handleSubmit = () => {
    setShowDialog(true)
  }

  const handleConfirm = () => {
    setShowDialog(false)
    router.push("/discover")
  }

  return (
    <div className="container mx-auto p-4 space-y-6 w-[90vw] md:w-[70vw]">
      <div className="flex items-center justify-between w-full">
        <Button variant="ghost" onClick={onBack} className="p-2">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        <div className="flex gap-2">
          <Button variant="outline">Save</Button>
          <Button onClick={handleSubmit}>Publish</Button>
        </div>
      </div>

      <form className="space-y-8">
        {/* Image Upload Section */}
        <div className="relative">
          {imageUrl ? (
            <div className="relative w-full h-[200px] bg-muted rounded-lg overflow-hidden">
              <img src={imageUrl} alt="Event cover" className="w-full h-full object-cover" />
              <Button className="absolute bottom-4 right-4" size="sm" onClick={() => setImageUrl(null)}>
                Change
              </Button>
            </div>
          ) : (
            <label className="flex flex-col items-center justify-center w-full h-[200px] bg-muted rounded-lg border-2 border-dashed cursor-pointer hover:bg-muted/70">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Plus className="h-8 w-8 text-gray-400 mb-2" />
                <p className="text-sm text-gray-500">Add Image</p>
              </div>
              <input type="file" className="hidden" onChange={handleImageUpload} accept="image/*" />
            </label>
          )}
        </div>

        {/* Title, Date, and Location */}
        <div className="space-y-4">
          <Input placeholder="Title" className="text-xl font-semibold" />
          <div className="flex gap-4">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}>
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <CalendarComponent mode="single" selected={date} onSelect={setDate} initialFocus />
              </PopoverContent>
            </Popover>
            <EventTimeMatching />
          </div>
          <Input placeholder="Location" />
        </div>

        {/* Registration */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Registration</h3>
          <div className="flex gap-4">
            <Select defaultValue="form">
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="How can user register?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="form">By Form</SelectItem>
                <SelectItem value="email">By Email</SelectItem>
                <SelectItem value="website">External Website</SelectItem>
              </SelectContent>
            </Select>
            <Input placeholder="Registration link" className="flex-1" />
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium min-w-[60px]">Price</span>
          <div className="flex-1 flex items-center gap-2">
            <span className="text-sm">USD:</span>
            <Input
              type="text"
              value={price}
              onChange={(e) => handlePriceChange(e.target.value)}
              className="max-w-[100px]"
            />
          </div>
        </div>

        {/* Who can join */}
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium min-w-[60px]">Open to</span>
          <div className="flex-1 flex items-center gap-2">
            <Select defaultValue="all">
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Who can join?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">ALL</SelectItem>
                <SelectItem value="followers">Followers Only</SelectItem>
                <SelectItem value="private">Private</SelectItem>
              </SelectContent>
            </Select>
            <LearnMyUser />
          </div>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Description</h3>
          <Textarea placeholder="Description" className="min-h-[100px]" />
        </div>

        {/* Also posted in */}
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Also posted in</h3>
          <div className="space-y-2">
            {["Discord", "Instagram", "Facebook", "Other"].map((platform) => (
              <div key={platform} className="flex items-center gap-2">
                <span className="text-sm min-w-[80px]">{platform}</span>
                <Input placeholder={`${platform} link`} />
              </div>
            ))}
          </div>
        </div>
      </form>

      <div className="flex items-center w-full">
        <Button variant="outline" className="ml-auto">Save</Button>
      </div>

      {/* Confirmation Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Event Submitted</DialogTitle>
          </DialogHeader>
          <p>Your event has been successfully submitted!</p>
          <DialogFooter>
            <Button onClick={handleConfirm}>OK</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}