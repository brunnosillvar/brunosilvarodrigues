import { Header } from '@/components/Header'
import { Content } from './styles'
import { ReactNode } from 'react'
import { useModeStore } from '../context/modeStore'

export interface IDefaultLayout {
  children: ReactNode
}

export function DefaultLayout({ children }: IDefaultLayout) {
  // ** Hooks
  const { mode } = useModeStore()

  return (
    <>
      <Header />
      <Content mode={mode}>{children}</Content>
    </>
  )
}
