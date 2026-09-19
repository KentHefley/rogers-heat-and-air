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

export default function MobileNav() {
  return (
    <Sheet>
  <SheetTrigger>
    <Button variant="ghost" className="h-8 w-8">
        <Menu className="h-4 w-4" />
    </Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>This action cannot be undone.</SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
  ) 
}