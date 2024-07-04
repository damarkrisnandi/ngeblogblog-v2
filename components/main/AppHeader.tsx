
import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Image from "next/image"


export function AppHeader() {
  return (
    <NavigationMenu className="border-b-5 border-b-blue-600">
      <NavigationMenuList className="">
        <NavigationMenuItem className=" flex justify-center items-center ">
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle() + ` py-9 transform transition ease-in-out 
                    hover:text-blue-600`}>
                <Image 
                    src="/pixel_me_removedbg.png"
                    alt="Picture of the author"
                    width={72}
                    height={72}
                    />
                    <p className="text-2xl font-semibold">
                    ngeblogblog.tsx
                    </p>

            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        
      </NavigationMenuList>
    </NavigationMenu>
  )
}
