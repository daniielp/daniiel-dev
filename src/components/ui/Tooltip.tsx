"use client"
 
import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"
 
import { classNames } from "@/lib/utils"
 
const TooltipProvider = TooltipPrimitive.Provider
 
const Tooltip = TooltipPrimitive.Root
 
const TooltipTrigger = TooltipPrimitive.Trigger

const TooltipArrow = TooltipPrimitive.Arrow
 
const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={classNames(
      "data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet11 select-none rounded-[4px] bg-white px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]",
      className
    )}
    {...props}
  />
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName
 
export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider, TooltipArrow }