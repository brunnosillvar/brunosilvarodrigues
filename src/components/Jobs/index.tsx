import Image from 'next/image'
import { Card, Content, WrapperGrid, Title, Body } from './styles'
import { useIntl } from "react-intl"
import { useModeStore } from '@/context/modeStore'

export default function Jobs() {
  // ** Hooks
  const intl = useIntl()
  const { mode } = useModeStore()

  return (
      <Content mode={mode}>
        <WrapperGrid>
          <Card mode={mode}>
            <Image src={`/icons/code-${mode}-mode.svg`} alt="ícone code" width={40} height={40} />
            <Title mode={mode}>{intl.formatMessage({ id: "jobs.title.developement" })}</Title>
            <Body mode={mode}>{intl.formatMessage({ id: "jobs.body.developement" })}</Body>
          </Card>
          <Card mode={mode}>
            <Image src={`/icons/figma-${mode}-mode.svg`} alt="ícone figma" width={40} height={40} />
            <Title mode={mode}>{intl.formatMessage({ id: "jobs.title.ui&ux" })}</Title>
            <Body mode={mode}>{intl.formatMessage({ id: "jobs.body.ui&ux" })}</Body>
          </Card>
          <Card mode={mode}>
            <Image src={`/icons/users-${mode}-mode.svg`} alt="ícone users" width={40} height={40} />
            <Title mode={mode}>{intl.formatMessage({ id: "jobs.title.pm" })}</Title>
            <Body mode={mode}>{intl.formatMessage({ id: "jobs.body.pm" })}</Body>
          </Card>
          <Card mode={mode}>
            <Image src={`/icons/presentation-${mode}-mode.svg`} alt="ícone presentation" width={40} height={40} />
            <Title mode={mode}>{intl.formatMessage({ id: "jobs.title.communication" })}</Title>
            <Body mode={mode}>{intl.formatMessage({ id: "jobs.body.communication" })}</Body>
          </Card>
        </WrapperGrid>
      </Content>
  )
}
