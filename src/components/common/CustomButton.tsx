import styled from 'styled-components'
import BaseButton from './BaseButton'

interface CustomButtonProps {
  backgroundColor?: string
}

const StyledCustomButton = styled(BaseButton)`
  color: #fff;
  background-color: ${(props: CustomButtonProps) =>
    props.backgroundColor ? props.backgroundColor : '#34d1bf'};
  box-shadow: 0 8px 14px rgb(52 209 191 / 20%);
  font-size: 0.9rem;
  padding: 0.7rem 1.4rem;
  font-weight: 700;
  transition: all 0.4s;
  border-radius: 7px;
  border: ${(props: CustomButtonProps) =>
    props.backgroundColor
      ? `1px solid ${props.backgroundColor}`
      : '1px solid #34d1bf'};

  display: flex;

  :hover {
    box-shadow: ${(props: CustomButtonProps) =>
      props.backgroundColor
        ? `0 16px 31px -16px ${props.backgroundColor}`
        : '0 16px 31px -16px #34d1bf'};
    transform: translateY(-4px);
    outline: none;
  }
`

interface Props {
  children: JSX.Element | string
  rightIcon?: JSX.Element
}

const CustomButton = (props: Props & CustomButtonProps) => {
  const { children, backgroundColor, rightIcon } = props

  return (
    <StyledCustomButton backgroundColor={backgroundColor}>
      {children}
      <span
        style={{
          marginLeft: '0.5rem',
        }}
      >
        {rightIcon}
      </span>
    </StyledCustomButton>
  )
}

export default CustomButton
