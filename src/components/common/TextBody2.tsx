import styled from 'styled-components'

interface TextBody2Props {
  textAlign?: string
}

const StyledTextBody2 = styled.p`
  font-size: 15px;
  color: #a0a9b1;
  line-height: 1.8;
  margin: 0;
  text-align: ${(props: TextBody2Props) =>
    props.textAlign ? props.textAlign : 'center'};
`

interface Props {
  children: JSX.Element | string
}

const TextBody2 = (props: Props & TextBody2Props) => {
  const { children, textAlign } = props

  return <StyledTextBody2 textAlign={textAlign}>{children}</StyledTextBody2>
}

export default TextBody2
