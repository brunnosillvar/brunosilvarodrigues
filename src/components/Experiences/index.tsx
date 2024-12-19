import styles from './styles.module.css'

interface ExperiencesProps {
  dictionary: {
    experiences: string
  }
}

export default function Experiences({ dictionary }: ExperiencesProps) {
  return (
    <div className={styles.__content_experiences}>
      <div className={styles.__box_title}>
        <h3 className={styles.__title}>{dictionary.experiences}</h3>
      </div>
      <div>
        <ol className={styles.__ol_timeline}>
          <li className={styles.__li_timeline}>
            <div className={styles.__div_timeline}></div>
          </li>
        </ol>
      </div>
    </div>
  )
}
