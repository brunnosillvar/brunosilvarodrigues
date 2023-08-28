import { styled, css } from 'styled-components'

interface IAboutMeProps {
  mode: string
}

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3.5rem;

  .__image_profile_aboutme {
    margin-bottom: 0.625rem;
    border-radius: 50%;
  }
`


export const Title = styled.h1<IAboutMeProps>`
  ${({ mode }) => css`
    color: ${mode === 'dark' ? 'var(--white-2)': 'var(--black-2)'};
    max-width: 38.75rem;
    text-align: center;
    font-size: 3.5rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0,105rem;
  `}
`

export const Subtitle = styled.h2<IAboutMeProps>`
  ${({ mode }) => css`
    color: ${mode === 'dark' ? 'var(--white-1)': 'var(--black-1)'};
    font-size: 1.625rem;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.04875rem;
    margin-bottom: 1rem;
  `}
`

export const Link = styled.a<IAboutMeProps>`
  ${({ mode }) => css`
    color: ${mode === 'dark' ? 'var(--white-2)': 'var(--black-2)'};
    display: inline-flex;
    margin-top: 56px;
    max-height: 48px;
    padding: 10px 40px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border: 1px solid ${mode === 'dark' ? 'var(--white-2)': 'var(--black-2)'};

    &:hover {
      cursor: pointer;
    }
  `}
`
