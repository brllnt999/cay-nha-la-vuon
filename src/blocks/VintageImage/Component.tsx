import type { StaticImageData } from 'next/image'

import { cn } from '@/utilities/ui'
import React from 'react'
import RichText from '@/components/RichText'

import type { VintageImage as VintageImageProps } from '@/payload-types'

import { Media } from '../../components/Media'

type Props = VintageImageProps & {
  breakout?: boolean
  captionClassName?: string
  className?: string
  enableGutter?: boolean
  imgClassName?: string
  staticImage?: StaticImageData
  disableInnerContainer?: boolean
  rotate?: number
  isolated?: number
  imageNote?: string
}

export const VintageImageBlock: React.FC<Props> = (props) => {
  const {
    captionClassName,
    className,
    imgClassName,
    media,
    staticImage,
    rotate,
    isolated,
    imageNote,
  } = props

  let caption
  if (media && typeof media === 'object') caption = media.caption

  return (
    <div className={cn(className, 'container')}>
      {(media || staticImage) && (
        <div
          className={cn(
            'relative  overflow-hidden bg-[#f7efe2] shadow-[4px_4px_0_var(--border)] transition-transform duration-200 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:cursor-pointer hover:shadow-[6px_6px_0_var(--border)]',
            'md:max-w-3/4',
            'flex flex-col items-center justify-center',
          )}
          style={{
            transform: `rotate(${rotate ?? 0}deg) translateY(${isolated ?? 0}px)`,
          }}
        >
          <Media
            imgClassName={cn(imgClassName, 'aspect-square')}
            resource={media}
            src={staticImage}
            className="p-2 -mt-[2rem]"
          />
          {caption && (
            <p
              className={cn(
                'w-full text-right text-sm px-2 py-2 -mt-[2.5rem] mb-6',
                captionClassName,
              )}
            >
              {imageNote}
            </p>
          )}
        </div>
      )}
    </div>
  )
}
