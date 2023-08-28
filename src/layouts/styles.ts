import { styled, css } from 'styled-components'

interface IDefaultLayoutProps {
  mode: string;
}

export const Content = styled.div<IDefaultLayoutProps>`
  ${({mode}) => css`
      background-color: ${mode === 'dark' ? 'var(--primary-black)' : 'var(--primary-white)'};
      display: flex;
      justify-content: center;
    `
  }
`

