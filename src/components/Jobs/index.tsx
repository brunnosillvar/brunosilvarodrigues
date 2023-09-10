'use client'

import Image from 'next/image'
import styles from './styles.module.css'
import { useModeStore } from '@/context/modeStore'

interface JobsProps {
  dictionary: {
    title_developement: string
    body_developement: string
    'title_ui&ux': string
    'body_ui&ux': string
    title_pm: string
    body_pm: string
    title_communication: string
    body_communication: string
  }
}

export default function Jobs({ dictionary }: JobsProps) {
  // ** Hooks
  const { mode } = useModeStore()

  return (
    <div className={styles.__content_jobs}>
      <div className={styles.__wrapper_grid}>
        <div className={styles.__card}>
          <Image
            src={`/icons/code-${mode}-mode.svg`}
            alt="ícone code"
            width={40}
            height={40}
          />
          <h4 className={styles.__title}>{dictionary.title_developement}</h4>
          <span className={styles.__body}>{dictionary.body_developement}</span>
        </div>
        <div className={styles.__card}>
          <Image
            src={`/icons/figma-${mode}-mode.svg`}
            alt="ícone figma"
            width={40}
            height={40}
          />
          <h4 className={styles.__title}>{dictionary['title_ui&ux']}</h4>
          <span className={styles.__body}>{dictionary['body_ui&ux']}</span>
        </div>
        <div className={styles.__card}>
          <Image
            src={`/icons/users-${mode}-mode.svg`}
            alt="ícone users"
            width={40}
            height={40}
          />
          <h4 className={styles.__title}>{dictionary.title_pm}</h4>
          <span className={styles.__body}>{dictionary.body_pm}</span>
        </div>
        <div className={styles.__card}>
          <Image
            src={`/icons/presentation-${mode}-mode.svg`}
            alt="ícone presentation"
            width={40}
            height={40}
          />
          <h4 className={styles.__title}>{dictionary.title_communication}</h4>
          <span className={styles.__body}>{dictionary.body_communication}</span>
        </div>
      </div>
    </div>
  )
}
