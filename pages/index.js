import { Flex } from '@chakra-ui/react'

import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'

import slides from '../slides'

const Index = () => {
  const [slide, setSlide] = useState(0)

  const changeSlide = (delta) => {
    const newSlide = slide + delta
    if (newSlide < 0 || newSlide >= slides.length)
      return

    setSlide(newSlide)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'd') { changeSlide(1) }
    else if (e.key === 'a') { changeSlide(-1) }
  }

  return (
    <AnimatePresence initial={false}>
      <Flex h="100vh" w="100vw" overflow="hidden" tabIndex={0} onKeyDown={handleKeyDown}>
        {slides[slide]}
      </Flex>
    </AnimatePresence>
  )
}

export default Index