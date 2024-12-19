// import Link from 'next/link'
import AboutMe from '@/components/AboutMe'
import { getDictionary } from '../../../get-dictionary'
import { Locale } from '../../../i18n-config'
import Jobs from '@/components/Jobs'
import Experiences from '@/components/Experiences'

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(lang)

  return (
    <div>
      <AboutMe dictionary={dictionary.aboutme} />
      <Jobs dictionary={dictionary.jobs} />
      <Experiences dictionary={dictionary.experiences} />
    </div>
  )
}
