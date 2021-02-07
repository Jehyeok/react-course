import styled from 'styled-components'

const StyledCircleBackground = styled.div`
  align-items: center;
  background-color: rgba(47, 85, 212, 0.1);
  color: #fff;
  display: flex;
  font-weight: 500;
  justify-content: center;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  color: rgb(47, 85, 212);
  fill: rgba(47, 85, 212, 0.2);
  margin-bottom: 1.5rem;
`

interface Props {
  children: JSX.Element
}

const CircleBackground = (props: Props) => {
  const { children } = props

  return <StyledCircleBackground>{children}</StyledCircleBackground>
}

export default CircleBackground
