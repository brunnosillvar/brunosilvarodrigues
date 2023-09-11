'use client'
import { useRouter } from 'next/navigation'

export default function Welcome() {
  const router = useRouter()
  router.push('/pt')
}
