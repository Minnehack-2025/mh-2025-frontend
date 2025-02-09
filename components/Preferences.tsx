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
import { LuChevronLeft } from "react-icons/lu";
import { Input } from "./ui/input";
import { IoCheckmark } from "react-icons/io5";

interface PreferencesProps {
  name?: string;
  time?: string;
  friendsArray?: string;
  onFriendSelect: (added: boolean) => void;
}

const Preferences: React.FC<PreferencesProps> = ({ onFriendSelect }) => {
  const [date, setDate] = useState<Date>()
  const [showAddFriends, setShowAddFriends] = useState(false);
  const [successfulAddButton, setSuccessfulAddButton] = useState(false);

  const handleAddFriends = () => {
    setShowAddFriends(true);
  }

  const handleAddFriendsBack = () => {
    setShowAddFriends(false);
  }

  const handleAddFriendToEvent = () => {
    setSuccessfulAddButton(true);
    onFriendSelect(true);
  }

  return (
    <Sheet>
      <SheetTrigger asChild><Button variant="outline" className="shadow-none">Preferences</Button></SheetTrigger>
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle className="pb-4">{!showAddFriends ? "Event Preferences" : "Add friends"}</SheetTitle>
        </SheetHeader>

        {!showAddFriends ?
        (<div className="flex flex-col gap-6 pb-6">
          
          {/* Match */}
          <div className="flex flex-col gap-1">
            <p className="font-medium">Find events for</p>
            <div className="flex flex-row gap-8">
              <div className='flex flex-row items-center gap-3'>
                <div className='w-8 h-8'>
                  <Image src={Profile} alt="Profile Picture" className='rounded-full'></Image>
                </div>
                <p>Name</p>
                {successfulAddButton ? (
                  <div className='flex flex-row items-center gap-3'>
                    <div className='w-8 h-8'>
                      <Image src={Profile} alt="Profile Picture" className='rounded-full'></Image>
                    </div>
                    <p>Name</p>
                  </div>
                  ) : (<></>)
                }
                <Button className="p-2 shadow-none" variant="outline" onClick={handleAddFriends}>
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
              <Button className="p-2 text-xs font-normal bg-black text-white w-fit rounded-full px-3 py-2">May 21, 3:00pm — 5:00pm</Button>
              <Button className="p-2 text-xs font-normal bg-black text-white w-fit rounded-full px-3 py-2">May 22, 9:00pm — 10:00pm</Button>
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
        ) : (
          <div>
            <Button onClick={handleAddFriendsBack} className="bg-transparent shadow-none p-0">
              <LuChevronLeft color="black"/>
            </Button>
            <div className="flex flex-col gap-4 pb-6">
              <Input placeholder="Search"></Input>
              {successfulAddButton ? (
                <div className='flex flex-row items-center gap-3'>
                  <div className='w-8 h-8'>
                    <Image src={Profile} alt="Profile Picture" className='rounded-full'></Image>
                  </div>
                  <p>Name</p>
                </div>
                ) : (<></>)
              }
              <p className="font-medium">Recents</p>
              <div className='flex flex-row items-center gap-3'>
                <div className='w-8 h-8'>
                  <Image src={Profile} alt="Profile Picture" className='rounded-full'></Image>
                </div>
                <p>Name</p>
                {!successfulAddButton ? 
                  (<Button className="p-2 shadow-none" variant="outline" onClick={handleAddFriendToEvent}>
                    <IoMdAdd/>
                    Add
                  </Button>) : (
                  <Button className="p-2 shadow-none bg-green-400" variant="outline" onClick={handleAddFriendToEvent}>
                    <IoCheckmark/>
                    Added
                  </Button>
                )}
              </div>
              <div className='flex flex-row items-center gap-3'>
                <div className='w-8 h-8'>
                  <Image src={Profile} alt="Profile Picture" className='rounded-full'></Image>
                </div>
                <p>Name</p>
                <Button className="p-2 shadow-none" variant="outline" onClick={handleAddFriendToEvent}>
                  <IoMdAdd/>
                  Add
                </Button>
              </div>
              <div className='flex flex-row items-center gap-3'>
                <div className='w-8 h-8'>
                  <Image src={Profile} alt="Profile Picture" className='rounded-full'></Image>
                </div>
                <p>Name</p>
                <Button className="p-2 shadow-none" variant="outline" onClick={handleAddFriendToEvent}>
                  <IoMdAdd/>
                  Add
                </Button>
              </div>
            </div>  
          </div>
        )}

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