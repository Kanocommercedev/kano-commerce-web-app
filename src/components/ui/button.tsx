import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 min-h-[44px] cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-hover shadow-md hover:shadow-lg focus:shadow-lg active:scale-95",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-md hover:shadow-lg focus:shadow-lg active:scale-95",
        outline: "border-2 border-primary bg-background text-primary hover:bg-primary hover:text-primary-foreground shadow-sm hover:shadow-md focus:shadow-md active:scale-95",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary-hover shadow-md hover:shadow-lg focus:shadow-lg active:scale-95",
        ghost: "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground active:scale-95",
        link: "text-primary underline-offset-4 hover:underline focus:underline active:scale-95",
        government: "bg-government-green text-white hover:bg-government-green-dark shadow-md hover:shadow-lg focus:shadow-lg transform hover:scale-105 active:scale-95",
        "government-outline": "border-2 border-government-green bg-background text-government-green hover:bg-government-green hover:text-white shadow-sm hover:shadow-md focus:shadow-md active:scale-95",
        gold: "bg-government-gold text-government-red hover:bg-government-gold-dark shadow-md hover:shadow-lg focus:shadow-lg active:scale-95",
        red: "bg-government-red text-white hover:bg-government-red-dark shadow-md hover:shadow-lg focus:shadow-lg active:scale-95",
        "red-outline": "border-2 border-government-red bg-background text-government-red hover:bg-government-red hover:text-white shadow-sm hover:shadow-md focus:shadow-md active:scale-95",
        "red-vibrant": "bg-government-red-vibrant text-white hover:bg-government-red-accent shadow-md hover:shadow-lg focus:shadow-lg active:scale-95",
        success: "bg-success text-success-foreground hover:bg-success/90 shadow-md hover:shadow-lg focus:shadow-lg active:scale-95",
        warning: "bg-warning text-warning-foreground hover:bg-warning/90 shadow-md hover:shadow-lg focus:shadow-lg active:scale-95",
        info: "bg-info text-info-foreground hover:bg-info/90 shadow-md hover:shadow-lg focus:shadow-lg active:scale-95",
      },
      size: {
        default: "h-11 px-6 py-3",
        sm: "h-9 rounded-md px-4 py-2 text-xs",
        lg: "h-12 rounded-lg px-8 py-4 text-base",
        xl: "h-14 rounded-lg px-10 py-5 text-lg",
        icon: "h-11 w-11",
        mobile: "h-12 w-full px-6 py-3 text-base font-semibold",
        nav: "h-10 px-4 py-2 text-sm font-medium",
        "nav-mobile": "h-12 px-6 py-3 text-base font-medium w-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
