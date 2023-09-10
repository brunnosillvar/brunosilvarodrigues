'use client'

import { usePathname } from 'next/navigation'
import { useModeStore } from '@/context/modeStore'
import Link from 'next/link'
import { i18n } from '../../../../i18n-config'
import Image from 'next/image'

import styles from '../styles.module.css'
import { useState } from 'react'

export default function LocaleSwitcher() {
  // ** States
  const [openDropdown, setOpenDropdown] = useState(false)

  // ** Hooks
  const { mode } = useModeStore()
  const pathName = usePathname()

  // ** Functions
  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <div className={styles.__dropdown_language}>
      <Image
        className={styles.__icon_menu}
        src={`/icons/languages-${mode}-mode.svg`}
        alt="icone de linguagem"
        width={26}
        height={26}
        onClick={() => setOpenDropdown(!openDropdown)}
      />
      {openDropdown && (
        <div className={styles.__options_language}>
          {i18n.locales.map((locale) => {
            return (
              <Link
                className={styles.__language_item}
                key={locale}
                href={redirectedPathName(locale)}
              >
                {locale}
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}
