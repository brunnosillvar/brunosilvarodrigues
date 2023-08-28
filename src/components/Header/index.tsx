'use client'
import { useState } from "react";
import { useRouter } from "next/router"
import Link from 'next/link'
import Image from "next/image";
import { Content, IconsConfig, DropdownLanguage, IconsNetwork } from './styles'
import { useModeStore } from "@/context/modeStore";


export function Header() {
  // ** States
  const [openDropdow, setOpenDropdow] = useState<boolean>(false)

  // ** Hooks
  const { locales }: any = useRouter()
  const { changeMode, mode } = useModeStore()

  // Functions
  const handleChangeMode = () => {
    const newMode: string = mode === 'dark' ? 'light' : 'dark'
    changeMode(newMode)
  }

  return (
    <>
      <Content mode={mode}>
        <IconsConfig>
          <Image className="__icon_menu" src={`/icons/sun-${mode}-mode.svg`} alt="icone de sol" width={26} height={26} onClick={handleChangeMode}/>
          <DropdownLanguage mode={mode}>
            <Image className="__icon_menu" src={`/icons/languages-${mode}-mode.svg`} alt="icone de linguagem" width={26} height={26} onClick={() => setOpenDropdow(!openDropdow)}/>
            {openDropdow && (
              <div className="__options_language">
                {[...locales!].sort().map((locale) => (
                  <Link className="__language_item" key={locale!} href="/" locale={locale!} onClick={() => setOpenDropdow(!openDropdow)}>
                    {locale}
                  </Link>
                ))}
              </div>
            )}
          </DropdownLanguage>
        </IconsConfig>
        <IconsNetwork>
          <Link href="https://www.linkedin.com/in/brunnosillvar" target="_blank">
            <Image className="__icon_menu" src={`/icons/linkedin-${mode}-mode.svg`} alt="icone linkedin" width={26} height={26}/>
          </Link>
          <Link href="https://github.com/brunnosillvar" target="_blank">
            <Image className="__icon_menu" src={`/icons/github-${mode}-mode.svg`} alt="icone github" width={26} height={26}/>
          </Link>
          <Link href="https://www.instagram.com/brunnosillvar" target="_blank">
            <Image className="__icon_menu" src={`/icons/instagram-${mode}-mode.svg`} alt="icone instagram" width={26} height={26}/>
          </Link>
          <Link href="https://www.behance.net/brunosilva130" target="_blank">
            <Image className="__icon_menu" src={`/icons/dribbble-${mode}-mode.svg`} alt="icone dribbble" width={26} height={26}/>
          </Link>
        </IconsNetwork>
      </Content>
    </>
  )
}
