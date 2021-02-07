import styled from 'styled-components'
import { Circle } from 'mdi-material-ui'

const FrameContainer = styled.div`
  border-radius: 7px;
  margin-bottom: 30px;
  margin-top: 3rem;
  border: 1px solid #f8f9fa !important;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 100%;
`

const FrameHeader = styled.div`
  border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
  border: 0;
  padding: 0.75rem 1.25rem;
`

const FrameContent = styled.div`
  padding: 1.25rem;
  background-color: #f8fafe;
`

interface FrameCircleProps {
  rawColor: string
}

const FrameCircle = styled(Circle)`
  color: ${(props: FrameCircleProps) => props.rawColor};
  font-size: 0.9rem;
  margin-right: 0.25rem;
`

interface Props {
  imgSrc: string
}

const Frame = (props: Props) => {
  const { imgSrc } = props

  return (
    <FrameContainer>
      <FrameHeader>
        <FrameCircle rawColor="#dc3545" />
        <FrameCircle rawColor="#fbb13c" />
        <FrameCircle rawColor="#34d1bf" />
      </FrameHeader>
      <FrameContent>
        <img src={imgSrc} width="100%" />
      </FrameContent>
    </FrameContainer>
  )
}

export default Frame
