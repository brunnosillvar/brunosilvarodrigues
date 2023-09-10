'use client'

import Image from 'next/image'

import { useModeStore } from '@/context/modeStore'

import styles from '../styles.module.css'

export default function ModeThemeSwitcher() {
  // ** Vars
  let rootElement: HTMLElement
  if (typeof document !== 'undefined') {
    rootElement = document.documentElement
  }

  // ** Hooks
  const { changeMode, mode } = useModeStore()

  // ** Functions
  const handleChangeMode = () => {
    const newMode: string = mode === 'dark' ? 'light' : 'dark'
    changeMode(newMode)
    newMode === 'dark' ? changeTheme(darkMode) : changeTheme(lightMode)
  }

  const lightMode = {
    '--color-1': '#C6C6C6',
    '--color-2': '#A8A8A8',
    '--color-3': '#8D8D8D',
    '--color-4': '#393939',
    '--color-5': '#525252',
    '--color-6': '#6F6F6F',
    '--primary-color': '#F4F4F4',
    '--secondary-color': '#E0E0E0',
    '--primary-color-2': '#161616',
    '--secondary-color-2': '#262626',
  }

  const darkMode = {
    '--color-1': '#393939',
    '--color-2': '#525252',
    '--color-3': '#6F6F6F',
    '--color-4': '#C6C6C6',
    '--color-5': '#A8A8A8',
    '--color-6': '#8D8D8D',
    '--primary-color': '#161616',
    '--secondary-color': '#262626',
    '--primary-color-2': '#F4F4F4',
    '--secondary-color-2': '#E0E0E0',
  }

  function changeTheme(theme: any) {
    for (const prop in theme) {
      changeProperty(prop, theme[prop])
    }
  }

  function changeProperty(prop: string, value: string) {
    rootElement.style.setProperty(prop, value)
  }

  return (
    <>
      <Image
        className={styles.__icon_menu}
        src={`/icons/sun-${mode}-mode.svg`}
        alt="icone de sol"
        width={26}
        height={26}
        onClick={handleChangeMode}
      />
    </>
  )
}
