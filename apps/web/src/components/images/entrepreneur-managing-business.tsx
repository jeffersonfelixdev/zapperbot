'use client'

import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useEffect } from 'react'

export function EntrepreneurManagingBusiness() {
  const { theme, systemTheme } = useTheme()
  let image = '/assets/entrepreneur-managing-business-'
  if (theme === 'system') {
    image += `${systemTheme ?? 'light'}.svg`
  } else {
    image += `${theme ?? 'light'}.svg`
  }

  useEffect(() => {
    console.log(image)
  })

  return <Image src={image} width={480} height={480} alt="" />
}
