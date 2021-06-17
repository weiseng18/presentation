import { Heading, VStack } from '@chakra-ui/react'
import { MText } from '../components/MotionChakra'

import Slide from '../components/Slide'

import { toggleOpacity } from '../animations'

const Title = ({ direction, step }) => {
  return (
    <Slide direction={direction}>
      <VStack spacing={8}>
        <MText>Hello World</MText>
        {step === 1 && (
          <MText color="red"
            initial={toggleOpacity.initial}
            animate={toggleOpacity.animate}
            exit={toggleOpacity.exit}
            variants={toggleOpacity.variants}
            custom="enter"
          >
            Hello World
          </MText>
        )}
      </VStack>
    </Slide>
  )
}

const Final = ({ direction }) => {
  return (
    <Slide direction={direction}>
      <Heading>Hello World</Heading>
    </Slide>
  )
}

export default [
  Title,
  Final
]