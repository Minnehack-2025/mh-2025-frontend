import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useState } from "react";
import { Popover, PopoverContent } from "./ui/popover";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "./ui/calendar";
import { format } from "date-fns";
import Image from "next/image";
import Profile from "@/images/ss.png";
import { IoMdAdd } from "react-icons/io";

interface PreferencesProps {
  name?: string;
  time?: string;
  friendsArray?: string;
}

const Preferences: React.FC<PreferencesProps> = ( ) => {
  const [date, setDate] = useState<Date>()

  return (
    <Sheet>
      <SheetTrigger asChild><Button variant="outline" className="shadow-none">Preferences</Button></SheetTrigger>
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle className="pb-4">Event Preferences</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-6 pb-6">
          
          {/* Match */}
          <div className="flex flex-col gap-1">
            <p className="font-medium">Find events for</p>
            <div className="flex flex-row gap-6">
              <div className='flex flex-row items-center gap-4'>
                <div className='w-8 h-8'>
                  <Image src={Profile} alt="Profile Picture" className='rounded-full'></Image>
                </div>
                <p>Name</p>
                <Button className="p-2 shadow-none" variant="outline">
                  <IoMdAdd/>
                  Add friends
                </Button>
              </div>
            </div>
          </div>

          {/* Time */}
          <div className="flex flex-col gap-1">
            <p className="font-medium">Time</p>
            <Popover>
              <PopoverTrigger asChild>
                <Button 
                  variant="outline"  
                  className={cn(
                  "w-[280px] justify-start text-left font-normal",
                  !date && "text-muted-foreground")}
                >
                  <CalendarIcon/>
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <p className="font-medium text-sm pt-2">Suggested timings</p>
            <div className="flex flex-col gap-2">
              <Button className="p-2 text-xs font-normal bg-black text-white w-fit rounded-full px-3 py-2">May 20, 6:00pm — 8:00pm</Button>
              <Button className="p-2 text-xs font-normal bg-black text-white w-fit rounded-full px-3 py-2">May 21, 6:00pm — 8:00pm</Button>
              <Button className="p-2 text-xs font-normal bg-black text-white w-fit rounded-full px-3 py-2">May 22, 6:00pm — 8:00pm</Button>
            </div>
          </div>

          {/* Distance */}
          <div className="flex flex-col gap-1">
            <p className="font-medium">Distance</p>
            <Select>
              <SelectTrigger defaultValue={5}>
                <SelectValue placeholder="Select a distance"/>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="5">Within 5 miles</SelectItem>
                  <SelectItem value="15">Within 15 miles</SelectItem>
                  <SelectItem value="30">Within 30 miles</SelectItem>
                  <SelectItem value="NoLimit">No limit</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default Preferences;