import styled from 'styled-components'

interface FlexBoxProps {
  flexDirection?: string
  width?: string
  alignItems?: string
}

const StyledFlexBox = styled.div`
  display: flex;
  flex-direction: ${(props: FlexBoxProps) =>
    props.flexDirection ? props.flexDirection : 'row'};
  justify-content: space-between;
  align-items: ${(props: FlexBoxProps) =>
    props.alignItems ? props.alignItems : 'center'};
  padding: 10px 0;

  width: ${(props: FlexBoxProps) => (props.width ? props.width : undefined)};
`

interface Props {
  children?: JSX.Element[] | JSX.Element
  width?: string
}

const FlexBox = (props: FlexBoxProps & Props) => {
  const { flexDirection, children, width, alignItems } = props

  return (
    <StyledFlexBox
      flexDirection={flexDirection}
      width={width}
      alignItems={alignItems}
    >
      {children}
    </StyledFlexBox>
  )
}

export default FlexBox
