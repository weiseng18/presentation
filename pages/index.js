import { Flex } from '@chakra-ui/react'

import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'

import slides from '../slides'

const Index = () => {
  const [slide, setSlide] = useState(0)

  return (
    <AnimatePresence initial={false}>
      <Flex h="100vh" w="100vw" overflow="hidden" onClick={() => setSlide(slide === 0 ? 1 : 0)}>
        {slides[slide]}
      </Flex>
    </AnimatePresence>
  )
}

export default Index