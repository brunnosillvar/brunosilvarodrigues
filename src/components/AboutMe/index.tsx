import Image from "next/image"
import { Content, Subtitle, Title, Link } from "./styles"
import { useIntl } from "react-intl"
import { useModeStore } from "@/context/modeStore"

export default function AboutMe() {
  // ** Hooks
  const intl = useIntl()
  const { mode } = useModeStore()

  return (
    <Content>
      <Image src={'/assets/Bruno.png'} alt="Profile image - Bruno Silva" className="__image_profile_aboutme" width={115} height={115} />
      <Subtitle mode={mode}>{intl.formatMessage({ id: "aboutme.subtitle" })}</Subtitle>
      <Title mode={mode}>{intl.formatMessage({ id: "aboutme.title" })}</Title>
      <Link mode={mode} href="https://read.cv/brunnosillvar" target="_blank">Read.cv</Link>
    </Content>
  )
}
