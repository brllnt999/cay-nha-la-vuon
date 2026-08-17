'use client'

import { cn } from '@/utilities/ui'
import * as SelectPrimitive from '@radix-ui/react-select'
import * as React from 'react'

const Select: React.FC<React.ComponentProps<typeof SelectPrimitive.Root>> = (props) => {
  return <SelectPrimitive.Root data-slot="select" {...props} />
}

const SelectValue: React.FC<React.ComponentProps<typeof SelectPrimitive.Value>> = (props) => {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />
}

const SelectTrigger: React.FC<React.ComponentProps<typeof SelectPrimitive.Trigger>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <SelectPrimitive.Trigger data-slot="select-trigger" className={cn(className)} {...props}>
      {children}
      {/* <SelectPrimitive.Icon asChild>
        <ChevronDown className="size-4 opacity-50" />
      </SelectPrimitive.Icon> */}
    </SelectPrimitive.Trigger>
  )
}

const SelectContent: React.FC<React.ComponentProps<typeof SelectPrimitive.Content>> = ({
  children,
  className,
  position = 'item-aligned',
  ...props
}) => {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          position === 'popper' &&
            'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
          className,
          'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-96 min-w-[2rem] overflow-hidden rounded-md shadow-md',
        )}
        position={position}
        {...props}
      >
        {/* <SelectScrollUpButton /> */}
        <SelectPrimitive.Viewport
          className={cn(
            // 'p-1',
            position === 'popper' && '',
            //   'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1',
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        {/* <SelectScrollDownButton /> */}
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

const SelectItem: React.FC<React.ComponentProps<typeof SelectPrimitive.Item>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        className,
        'py-1.5 cursor-pointer select-none rounded-sm text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      )}
      {...props}
    >
      {/* <span className="absolute right-2 flex size-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <Check className="size-4" />
        </SelectPrimitive.ItemIndicator>
      </span> */}
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}

export { Select, SelectContent, SelectItem, SelectTrigger, SelectValue }
