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




export default function MobileNav() {
    const location = usePathname();
  return (
    <Sheet>
  <SheetTrigger>
    <Button variant="ghost" className="h-8 w-8">
        <Menu className="h-4 w-4" />
    </Button>
  </SheetTrigger>
  <SheetContent className="bg-card/40 backdrop-blur-md">
    <SheetHeader>
      <SheetTitle className="text-center">Rogers Heat and Air</SheetTitle>
      <SheetDescription>
        <div className="flex flex-col mt-5 px-5 space-y-4">
            {navItems.map((item) => (
              <Link href={item.href} key={item.name} className={location === item.href ? "text-forground" : "text-muted-foreground text-sm font-medium hover:text-foreground transition-colors duration-200"}>
                {item.name}
              </Link>
            ))}
        </div>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
  ) 
}