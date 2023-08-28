import { DefaultLayout } from "@/layouts/defaultLayout";
import Image from "next/image";
import { Content, Subtitle, Title, Link } from "./styles";

export default function Welcome() {
  return (
    <DefaultLayout>
      <Content>
        <Image src={'/assets/Bruno.png'} alt="Profile image - Bruno Silva" className="__image_profile_welcome" width={115} height={115} />
        <Subtitle>Hi, I am Bruno Silva</Subtitle>
        <Title>Software Enginner & Design UX | UI</Title>
        <Link href="https://read.cv/brunnosillvar" target="_blank">Read.cv</Link>
      </Content>
    </DefaultLayout>
  )
}
