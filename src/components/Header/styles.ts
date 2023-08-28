import { styled, css } from 'styled-components'

interface IHeaderProps {
  mode: string
}

export const Content = styled.div<IHeaderProps>`
  ${({ mode }) => css`
    background-color: ${mode === 'dark' ? 'var(--primary-black)' : 'var(--primary-white)'};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 35px 135px;

    @media screen and (max-width: 699px) {
      justify-content: center;
    }
  `}
`

export const IconsConfig = styled.div`
  display: flex;
  gap: 3.1875rem;

  .__icon_menu {
    cursor: pointer;
  }
`

export const IconsNetwork = styled.div`
  display: flex;
  gap: 3.1875rem;

  .__icon_menu {
    cursor: pointer;
  }

  @media screen and (max-width: 699px) {
    display: none;
  }
`

export const DropdownLanguage = styled.div<IHeaderProps>`
  ${({ mode }) => css`
    display: flex;
    flex-direction: column;

    .__options_language {
      display: flex;
      flex-direction: column;
      position: absolute;
      margin-top: 2.1rem;
      margin-left: -0.5rem;
      width: 100%;
      max-width: 3.5rem;
      justify-content: center;
      align-items: center;
      background-color: ${mode === 'dark' ? 'var(--secondary-black)' : 'var(--secondary-white)'};
      border-radius: 0.4rem;

      .__language_item {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5rem 0;
        border-radius: 0.4rem;
        color: ${mode === 'dark' ? 'var(--secondary-white)' : 'var(--secondary-black)'};
        &:hover {
          background-color: ${mode === 'dark' ? 'var(--black-1)' : 'var(--white-1)'};
          color: ${mode === 'dark' ? 'var(--white-1)' : 'var(--black-1)'};
        }
      }
    }
 `}
`
