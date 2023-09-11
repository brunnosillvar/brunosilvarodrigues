'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Welcome() {
  const router = useRouter()
  router.push('/pt')
  return (
    <div>
      <h1>Welcome</h1>
    </div>
  )
}
