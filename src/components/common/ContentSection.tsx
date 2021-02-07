import styled from 'styled-components'
import FlexBox from './FlexBox'

const StyledContentSection = styled.div`
  padding: 80px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  margin: 0 auto;
`

const SectionTitle = styled.h6`
  color: #2f55d4;
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: 700;
  margin: 0 0 0.5rem;
`

const SectionSubTitle1 = styled.p`
  color: #343a40;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 1rem;
`

const SectionSubTitle2 = styled.p`
  color: #a0a9b1;
  font-size: 15px;
  margin: 0 0 1rem;
`

interface Props {
  backgroundColor?: string
  title: string
  subTitle1: string
  subTitle2: string
  children: JSX.Element[] | JSX.Element
}

const ContentSection = (props: Props) => {
  const {
    backgroundColor = '#fff',
    title,
    subTitle1,
    subTitle2,
    children,
  } = props

  return (
    <div
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      <StyledContentSection>
        <FlexBox flexDirection="column">
          <SectionTitle>{title}</SectionTitle>
          <SectionSubTitle1>{subTitle1}</SectionSubTitle1>
          <SectionSubTitle2>{subTitle2}</SectionSubTitle2>
        </FlexBox>
        {children}
      </StyledContentSection>
    </div>
  )
}

export default ContentSection
