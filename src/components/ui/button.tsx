'use client'

import { cn } from '@/utilities/ui'
import { Slot } from '@radix-ui/react-slot'
import { type VariantProps, cva } from 'class-variance-authority'
import * as React from 'react'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap border text-xs font-bold uppercase tracking-[0.12em] transition-[color,box-shadow,transform] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none active:translate-y-px",
  {
    variants: {
      variant: {
        default: 'border-primary bg-primary text-primary-foreground shadow-[3px_3px_0_var(--border)] hover:bg-primary/90 hover:shadow-[1px_1px_0_var(--border)]',
        destructive: 'border-destructive bg-destructive text-destructive-foreground shadow-[3px_3px_0_var(--border)] hover:bg-destructive/90',
        outline:
          'border-input bg-background shadow-[2px_2px_0_var(--border)] hover:bg-accent hover:text-accent-foreground',
        secondary: 'border-border bg-secondary text-secondary-foreground shadow-[2px_2px_0_var(--border)] hover:bg-secondary/80',
        ghost: 'border-transparent hover:bg-accent hover:text-accent-foreground',
        link: 'border-transparent text-primary underline underline-offset-4 hover:text-primary/75',
      },
      size: {
        clear: '',
        default: 'h-10 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-9 px-3 has-[>svg]:px-2.5',
        lg: 'h-11 px-8 has-[>svg]:px-4',
        icon: 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button: React.FC<ButtonProps> = ({ asChild = false, className, size, variant, ...props }) => {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
