import Image from 'next/image'

import styles from './styles.module.css'

interface AboutMeProps {
  dictionary: {
    title: string
    subtitle: string
  }
}

export default function AboutMe({ dictionary }: AboutMeProps) {
  return (
    <div className={styles.__content_about_me}>
      <Image
        src={'/assets/Bruno.png'}
        alt="Profile image - Bruno Silva"
        className={styles.__image_profile_aboutme}
        width={115}
        height={115}
      />
      <h2 className={styles.__subtitle}>{dictionary.subtitle}</h2>
      <h1 className={styles.__title}>{dictionary.title}</h1>
      <a
        className={styles.__link_read_cv}
        href="https://read.cv/brunnosillvar"
        target="_blank"
        rel="noreferrer"
      >
        Read.cv
      </a>
    </div>
  )
}
