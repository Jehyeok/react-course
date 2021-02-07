import { useState } from 'react'
import styled from 'styled-components'
import {
  Grid,
  Edit,
  Headphones,
  Layers,
  Code,
  Tablet,
  BarChart2,
  Check,
  Clock,
  ArrowRight,
} from 'react-feather'
import CircleBackground from '~/src/components/common/CircleBackground'
import TextBody1 from '~/src/components/common/TextBody1'
import TextBody2 from '~/src/components/common/TextBody2'
import FlexBox from '~/src/components/common/FlexBox'
import ContentSection from '~/src/components/common/ContentSection'
import BaseButton from '~/src/components/common/BaseButton'
import CustomButton from '~/src/components/common/CustomButton'
import Frame from '~/src/components/common/Frame'

const Section = styled.div`
  width: 70%;
  margin: 0 auto;
`

interface HeaderMenuButtonProps {
  active?: boolean
}

const HeaderMenuButton = styled(BaseButton)`
  line-height: 26px;
  transition: all 0.4s;
  background-color: transparent !important;
  padding: 6px 10px;
  margin: 0 7px;
  border: none;
  color: ${(props: HeaderMenuButtonProps) =>
    props.active ? '#2f55d4' : 'rgba(52, 58, 64, 0.8)'};
`

const TryForFreeButton = styled(BaseButton)`
  color: #34d1bf;
  background: rgba(52, 209, 191, 0.2);
  border-color: transparent;
  box-shadow: none;
  border-radius: 30px;
  padding: 0.7rem 1.4rem;
  font-weight: 700;
`

const headerMenuButtonTexts = [
  'Home',
  'Services',
  'Features',
  'Clients',
  'Plans',
]

const ServiceMenuItems1 = [
  {
    icon: <Grid fill="rgba(47,85,212,0.2);" />,
    body1: 'Bootstrap UI based',
    body2: 'To an English person, it will seem like English as skeptical.',
  },
  {
    icon: <Edit fill="rgba(47,85,212,0.2);" />,
    body1: 'Easy to customize',
    body2: 'If several languages coalesce, the grammar of the language.',
  },
  {
    icon: <Headphones fill="rgba(47,85,212,0.2);" />,
    body1: 'Awesome Support',
    body2: 'The languages only differ in their grammar their pronunciation',
  },
]

const ServiceMenuItems2 = [
  {
    icon: <Layers fill="rgba(47,85,212,0.2);" />,
    body1: 'Creative Design',
    body2: 'Everyone realizes why a new common would be desirable.',
  },
  {
    icon: <Code fill="rgba(47,85,212,0.2);" />,
    body1: 'Quality Code',
    body2: 'To achieve this, it would be necessary to have uniform.',
  },
  {
    icon: <Tablet fill="rgba(47,85,212,0.2);" />,
    body1: 'Responsive layout',
    body2: 'Their separate existence is a myth. For science, music, etc.',
  },
]

const Main = () => {
  const [selectedHeaderMenuIdx, setSelectedHeaderMenuIdx] = useState(0)

  console.log(`selectedHeaderMenuIdx: ${selectedHeaderMenuIdx}`)

  return (
    <div
      style={{
        marginBottom: '300px',
      }}
    >
      {/* <Section>
        <CustomButton
          backgroundColor="#2f55d4"
          rightIcon={
            <Telegram
              style={{
                fontSize: '14px',
              }}
            />
          }
        >
          Get Started
        </CustomButton>
      </Section> */}
      <Section>
        <FlexBox>
          <img src="/logo-dark.png" height="20" />
          <div>
            {headerMenuButtonTexts.map((headerMenuButtonText, idx) => {
              return (
                <HeaderMenuButton
                  key={idx}
                  onClick={(e) => {
                    setSelectedHeaderMenuIdx(idx)
                  }}
                  active={selectedHeaderMenuIdx == idx}
                >
                  {headerMenuButtonText}
                </HeaderMenuButton>
              )
            })}
            <TryForFreeButton>Try for Free</TryForFreeButton>
          </div>
        </FlexBox>
      </Section>
      <ContentSection
        backgroundColor="#f8fafe"
        title="SERVICES"
        subTitle1="Services We Provide"
        subTitle2="It will be as simple as occidental in fact, it will be Occidental."
      >
        <div
          style={{
            marginTop: '3rem',
            marginBottom: '1.5rem',
          }}
        >
          <FlexBox>
            {ServiceMenuItems1.map((serviceMenuItem, idx) => {
              return (
                <FlexBox flexDirection="column" key={idx}>
                  <CircleBackground>{serviceMenuItem.icon}</CircleBackground>
                  <TextBody1>{serviceMenuItem.body1}</TextBody1>
                  <TextBody2>{serviceMenuItem.body2}</TextBody2>
                </FlexBox>
              )
            })}
          </FlexBox>
          <FlexBox>
            {ServiceMenuItems2.map((serviceMenuItem, idx) => {
              return (
                <FlexBox flexDirection="column" key={idx}>
                  <CircleBackground>{serviceMenuItem.icon}</CircleBackground>
                  <TextBody1>{serviceMenuItem.body1}</TextBody1>
                  <TextBody2>{serviceMenuItem.body2}</TextBody2>
                </FlexBox>
              )
            })}
          </FlexBox>
        </div>

        <CustomButton>View more</CustomButton>
      </ContentSection>
      <ContentSection
        title="FEATURES"
        subTitle1="Key features of the product"
        subTitle2="It will be as simple as occidental in fact, it will be Occidental."
      >
        <FlexBox>
          <FlexBox flexDirection="column" width="40%" alignItems="start">
            <CircleBackground>
              <BarChart2 />
            </CircleBackground>
            <TextBody1>Improve your Marketing business</TextBody1>
            <TextBody2 textAlign="left">
              If several languages coalesce, the grammar of the resulting
              language is more simple and regular.
            </TextBody2>
            <FlexBox>
              <Check />
              <TextBody2> Donec quam felis</TextBody2>
              <Check />
              <TextBody2> Ultricies nec</TextBody2>
            </FlexBox>
            <CustomButton
              backgroundColor="#2f55d4"
              rightIcon={<ArrowRight size="16px" />}
            >
              Learn more
            </CustomButton>
          </FlexBox>
          <FlexBox width="40%">
            <Frame imgSrc="/img-1.png" />
          </FlexBox>
        </FlexBox>
        <FlexBox flexDirection="row-reverse">
          <FlexBox flexDirection="column" width="40%" alignItems="start">
            <CircleBackground>
              <Clock />
            </CircleBackground>
            <TextBody1>Increase your Marketing Performance</TextBody1>
            <TextBody2 textAlign="left">
              If several languages coalesce, the grammar of the resulting
              language is more simple and regular.
            </TextBody2>
            <FlexBox>
              <Check />
              <TextBody2> Donec quam felis</TextBody2>
              <Check />
              <TextBody2> Ultricies nec</TextBody2>
            </FlexBox>
            <CustomButton
              backgroundColor="#2f55d4"
              rightIcon={<ArrowRight size="16px" />}
            >
              Learn more
            </CustomButton>
          </FlexBox>
          <FlexBox width="40%">
            <Frame imgSrc="/img-2.png" />
          </FlexBox>
        </FlexBox>
      </ContentSection>
    </div>
  )
}

export default Main
