"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { cn } from "@/lib/utils"

// Re-export the root dialog and trigger if needed
const Dialog = DialogPrimitive.Root
const DialogTrigger = DialogPrimitive.Trigger

// Overlay for the dialog
const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn("fixed inset-0 z-50 bg-black/50 backdrop-blur-sm", className)}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

// Content for the dialog
const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPrimitive.Portal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed top-1/2 left-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 shadow-lg",
        className
      )}
      {...props}
    >
      {children}
    </DialogPrimitive.Content>
  </DialogPrimitive.Portal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

// Header for the dialog
const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-1.5 text-center", className)} {...props} />
)
DialogHeader.displayName = "DialogHeader"

// Title for the dialog
const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold", className)}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

// Footer for the dialog
const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col gap-2 sm:flex-row sm:justify-end", className)} {...props} />
)
DialogFooter.displayName = "DialogFooter"

// Export the components for use in your app
export { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter }
