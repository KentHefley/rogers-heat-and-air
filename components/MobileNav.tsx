"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {Menu} from "lucide-react";
import {Button} from "@/components/ui/button";
import {navItems} from "../constants/navitems";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { useState } from "react";
import { useEffect } from "react";




export default function MobileNav() {
    const location = usePathname();
    const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [location]);


  return (
    <Sheet open={open} onOpenChange={state => setOpen(state)}>
        <SheetTrigger
          render={
            <Button variant="ghost" className="h-8 w-8">
              <Menu size="icon" />
            </Button>
          }
        />
  
  <SheetContent className="bg-card/40 backdrop-blur-md">
    <SheetHeader>
      <SheetTitle className="text-center">Rogers Heat and Air</SheetTitle>
      <SheetDescription className="flex flex-col mt-5 px-5 space-y-4">
        
            {navItems.map((item) => (
              <Link onClick={() => setOpen(false)} href={item.href} key={item.name} className={`text-sm fontmedium transition-colors duration-200 ${location === item.href ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}>
                {item.name}
              </Link>
            ))}
        
      </SheetDescription>
    </SheetHeader>
     <SheetFooter>
          <SheetClose render={<Button variant="outline">Close</Button>} />
        </SheetFooter>
  </SheetContent>
 
</Sheet>
  ) 
}