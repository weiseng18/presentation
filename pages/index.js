import { Flex, Heading, Text } from '@chakra-ui/react'

import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'

import Slide from './components/Slide'

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
      <Text>Hello World</Text>
    </Slide>
  )
}

const Final = () => {
  return (
    <Slide>
      <Heading>Hello World</Heading>
    </Slide>
  )
}

export default Index