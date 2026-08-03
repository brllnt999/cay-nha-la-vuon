'use client'
import { useRouter } from 'next/navigation'
import { useParams } from 'next/navigation'
import { usePathname } from 'next/navigation'

import { useId } from 'react'
import Image from 'next/image'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/mini-selector'
export const LanguageSelector = () => {
  const { locale } = useParams()
  console.log('locale', locale)
  return (
    <div>
      <SelectWithFlagsDemo />
    </div>
  )
}

const countries = [
  {
    value: 'zh',
    label: 'China',
    flag: 'https://flagcdn.com/w80/cn.png?style=rounded',
  },
  {
    value: 'en',
    label: 'United States',
    flag: 'https://flagcdn.com/w80/us.png?style=rounded',
  },
  {
    value: 'vi',
    label: 'Vietnam',
    flag: 'https://flagcdn.com/w80/vn.png?style=rounded',
  },
]

const SelectWithFlagsDemo = () => {
  const id = useId()
  const router = useRouter()
  const pathname = usePathname()
  function handleChange(value: string) {
    const newPathname = pathname.replace(/^\/[^\/]+/, `/${value}`)
    router.push(newPathname)
  }
  return (
    <div className="">
      {/* <Label htmlFor={id}>Options with flag</Label> */}
      <Select defaultValue={'vi'} onValueChange={handleChange}>
        <SelectTrigger id={id} className="w-full border-none *:data-[slot=select-value]:gap-2">
          <SelectValue placeholder="Select country" />
        </SelectTrigger>
        <SelectContent className="max-h-100 w-full p-1">
          {countries.map((country) => (
            <SelectItem key={country.value} value={country.value}>
              <Image
                src={country.flag}
                alt={`${country.label} flag`}
                width={20}
                height={20}
                className="rounded-xs h-auto w-auto object-cover"
              />
              {/* <span className="truncate">{country.label}</span> */}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

export default SelectWithFlagsDemo
