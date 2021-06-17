import { Flex } from '@chakra-ui/react'

import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'

import slides from '../slides'

const Index = () => {
  const [slide, setSlide] = useState(0)
  const [direction, setDirection] = useState(0)

  const changeSlide = (delta) => {
    const newSlide = slide + delta
    if (newSlide < 0 || newSlide >= slides.length)
      return

    setSlide(newSlide)
    // direction is opposite of delta
    setDirection(-delta)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'd') { changeSlide(1) }
    else if (e.key === 'a') { changeSlide(-1) }
  }

  const renderSlide = () => {
    const one = slides.slice(slide, slide+1)
    return (
      one.map((Component, index) => {
        return <Component direction={direction} />
      })
    )
  }

  return (
    <AnimatePresence initial={false}>
      <Flex h="100vh" w="100vw" overflow="hidden" tabIndex={0} onKeyDown={handleKeyDown}>
        {renderSlide()}
      </Flex>
    </AnimatePresence>
  )
}

export default Index