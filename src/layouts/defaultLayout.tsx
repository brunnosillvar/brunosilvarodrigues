import { Header } from '@/components/Header'
import { Content } from './styles'
import { ReactNode } from 'react'

export interface IDefaultLayout {
  children: ReactNode
}

export function DefaultLayout({ children }: IDefaultLayout) {

  return (
    <>
      <Header />
      <Content>{children}</Content>
    </>
  )
}
