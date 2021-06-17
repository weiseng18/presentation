import { Flex, Heading, Text } from '@chakra-ui/react'

import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

import Slide from './components/Slide'

// convert to motion
const MotionText = motion(Text)
const MotionHeading = motion(Heading)

const Index = () => {
  const [slide, setSlide] = useState(0)

  return (
    <AnimatePresence initial={false}>
      <Flex h="100vh" w="100vw" overflow="hidden" onClick={() => setSlide(slide === 0 ? 1 : 0)}>
        {slide === 0 && (<Title />)}
        {slide === 1 && (<Final />)}
      </Flex>
    </AnimatePresence>
  )
}

const Title = () => {
  return (
    <Slide>
      <MotionText>Hello World</MotionText>
    </Slide>
  )
}

const Final = () => {
  return (
    <Slide>
      <MotionHeading>Hello World</MotionHeading>
    </Slide>
  )
}

export default Index