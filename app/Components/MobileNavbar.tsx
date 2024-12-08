import { IoMenu } from "react-icons/io5";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

  import React from 'react'
import Link from "next/link";
  
  const MobileNavbar = () => {
    return (
      <div>
        <Sheet>
  <SheetTrigger><IoMenu /></SheetTrigger>
  <SheetContent side={"right"}>
    <SheetHeader>
      <SheetTitle></SheetTitle>
      <SheetDescription>
        <ul className="text-white">
            <Link href="./cart"><li>Cart</li></Link>
            <Link href="./abot"><li>About</li></Link>
            <Link href="./productListing"><li>All products</li></Link>
            
        </ul>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
      </div>
    )
  }
  
  export default MobileNavbar