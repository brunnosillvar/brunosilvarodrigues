import { styled, css } from 'styled-components'

interface IJobsProps {
  mode: string
}

export const Content = styled.div<IJobsProps>`
  ${({ mode }) => css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 4.125rem;
    margin-bottom: 4.125rem;
    width: 100%;
    padding: 2.5rem 16.25rem;
    background-color: var(--secondary-black);
    background-color: ${mode === 'dark' ? 'var(--secondary-black)' : 'var(--secondary-white)'};
  `}
`

export const WrapperGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.625rem;

  @media screen and (max-width: 1099px){
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 699px){
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Card = styled.div<IJobsProps>`
  ${({ mode }) => css`
    display: flex;
    flex-direction: column;
    border-radius: 0.625rem;
    width: 15.0625rem;
    padding: 3.125rem 0.875rem;
    gap: 0.75rem;
    background-color: ${mode === 'dark' ? 'var(--black-1)' : 'var(--white-1)'};
  `}
`

export const Title = styled.h4<IJobsProps>`
  ${({mode}) => css`
    font-size: 1.375rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.04125rem;
    color: ${mode === 'dark' ? 'var(--white-3)' : 'var(--black-3)'};
  `}
`

export const Body = styled.span<IJobsProps>`
  ${({mode}) => css`
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.03rem;
    color: ${mode === 'dark' ? 'var(--white-3)' : 'var(--black-3)'};
  `}
`
