import styled from 'styled-components'

const StyledTextBody1 = styled.p`
  font-size: 18px;
  color: #343a40;
  font-weight: 700;
  line-height: 1.2;
  margin: 0 0 0.5rem;
`

interface Props {
  children: JSX.Element | string
}

const TextBody1 = (props: Props) => {
  const { children } = props

  return <StyledTextBody1>{children}</StyledTextBody1>
}

export default TextBody1
