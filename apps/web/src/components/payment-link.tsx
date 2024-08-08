'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

interface PaymentLinkProps {
  plan: 'start' | 'premium' | 'pro'
  recurrence: 'monthly' | 'yearly'
  children: React.ReactNode
  className?: string
}

export function PaymentLink({
  plan,
  recurrence,
  className,
  children,
}: PaymentLinkProps) {
  const [link, setLink] = useState('')

  useEffect(() => {
    if (plan === 'start' && recurrence === 'monthly') {
      setLink(process.env.NEXT_PUBLIC_START_MONTHLY_PAYMENT_LINK ?? '')
    } else {
      setLink(process.env.NEXT_PUBLIC_START_YEARLY_PAYMENT_LINK ?? '')
    }
  }, [plan, recurrence])

  return (
    <Link className={className} href={link}>
      {children}
    </Link>
  )
}
