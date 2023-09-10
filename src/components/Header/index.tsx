'use client'

import styles from './styles.module.css'
import LocaleSwitcher from './components/locale-switcher'
import ModeThemeSwitcher from './components/modeTheme-switcher'
import Link from 'next/link'
import Image from 'next/image'

import { useModeStore } from '@/context/modeStore'

export function Header() {
  // ** Hooks
  const { mode } = useModeStore()

  return (
    <>
      <header className={styles.__header_menu}>
        <div className={styles.__icons_config}>
          <ModeThemeSwitcher />
          <LocaleSwitcher />
        </div>
        <div className={styles.__icons_network}>
          <Link
            href="https://www.linkedin.com/in/brunnosillvar"
            target="_blank"
          >
            <Image
              className={styles.__icon_menu}
              src={`/icons/linkedin-${mode}-mode.svg`}
              alt="icone linkedin"
              width={26}
              height={26}
            />
          </Link>
          <Link href="https://github.com/brunnosillvar" target="_blank">
            <Image
              className={styles.__icon_menu}
              src={`/icons/github-${mode}-mode.svg`}
              alt="icone github"
              width={26}
              height={26}
            />
          </Link>
          <Link href="https://www.instagram.com/brunnosillvar" target="_blank">
            <Image
              className={styles.__icon_menu}
              src={`/icons/instagram-${mode}-mode.svg`}
              alt="icone instagram"
              width={26}
              height={26}
            />
          </Link>
          <Link href="https://www.behance.net/brunosilva130" target="_blank">
            <Image
              className={styles.__icon_menu}
              src={`/icons/dribbble-${mode}-mode.svg`}
              alt="icone dribbble"
              width={26}
              height={26}
            />
          </Link>
        </div>
      </header>
    </>
  )
}
