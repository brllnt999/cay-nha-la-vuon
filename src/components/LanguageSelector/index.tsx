'use client'
import React from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Image from 'next/image'
import { useId } from 'react'

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

export const SelectWithFlagsDemo = () => {
  const router = useRouter()
  const pathname = usePathname()
  const menuId = useId()
  const currentLocale = pathname.split('/')[1] || 'vi'
  const currentCountry =
    countries.find((country) => country.value === currentLocale) ?? countries[2]

  function handleChange(value: string) {
    const newPathname = pathname === '/' ? `/${value}` : pathname.replace(/^\/[^\/]+/, `/${value}`)
    router.push(newPathname)
  }

  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        aria-controls={menuId}
        aria-expanded={isOpen}
        aria-label="Change language"
        onClick={() => setIsOpen((open) => !open)}
        className="flex size-11 shrink-0 touch-manipulation items-center justify-center bg-transparent p-0 text-sm font-medium text-slate-700 shadow-none transition-all duration-200 ease-out"
      >
        <Image
          src={currentCountry.flag}
          alt={`${currentCountry.label} flag`}
          width={20}
          height={20}
          className="h-auto w-auto rounded-sm object-cover"
        />
      </button>
      <div
        id={menuId}
        aria-hidden={!isOpen}
        className={`min-w-0 overflow-hidden transition-[width,opacity,transform] duration-300 ease-in-out ${
          isOpen
            ? 'w-[200px] translate-x-0 opacity-100'
            : 'w-0 -translate-x-2 opacity-0 pointer-events-none'
        }`}
      >
        <div className="w-max">
          <div className="flex flex-row items-center gap-2 bg-transparent p-2">
            <span
              aria-hidden="true"
              className={`text-sm text-slate-500 transition-transform duration-300 ease-in-out ${
                isOpen ? 'translate-x-0' : '-translate-x-1'
              }`}
            >
              &gt;
            </span>
            {countries.map((country) => (
              <button
                key={country.value}
                type="button"
                onClick={() => {
                  handleChange(country.value)
                  setIsOpen(false)
                }}
                aria-label={`Switch language to ${country.label}`}
                className="flex size-11 shrink-0 touch-manipulation items-center justify-center bg-transparent p-1 transition-all duration-300 ease-in-out hover:scale-110 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
              >
                <Image
                  src={country.flag}
                  alt={`${country.label} flag`}
                  width={20}
                  height={20}
                  className="h-auto w-auto rounded-sm object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SelectWithFlagsDemo
