
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { SiGooglecalendar } from "react-icons/si";

export function OnboardingForm() {
  
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-3xl space-y-8">
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input id="username" placeholder="Username" className="w-full" />
            </div>

            <div className="space-y-2">
              <Label>Category that interests You</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Technology" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="technology">Technology</SelectItem>
                  <SelectItem value="design">Design</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Education level</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="undergraduate" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="undergraduate">Undergraduate</SelectItem>
                  <SelectItem value="graduate">Graduate</SelectItem>
                  <SelectItem value="phd">PhD</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Do you like going out for an event?</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Yes - in daily basis" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daily">Absolutely Yes - in daily basis</SelectItem>
                  <SelectItem value="weekly">Yes - in weekly basis</SelectItem>
                  <SelectItem value="monthly">Yes - in monthly basis</SelectItem>
                  <SelectItem value="no">No - I prefer online events</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Tell us your availability</Label>
              <Button variant="outline" className="w-full justify-between">
                Sync with Google calendar
                <SiGooglecalendar className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-2">
              <Label>Tell our AI your ultimate goal of going to events</Label>
              <Textarea
                placeholder="I want to land an SWE internship in FAANG, would wanna join networking events, career, or any coding events."
                className="min-h-[100px] w-full"
              />
            </div>
          </div>

          <div className="pt-4">
            <Button className="w-full">Next</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

