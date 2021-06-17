import { Flex } from '@chakra-ui/react'

import { motion } from 'framer-motion'

import { changeSlide } from '../animations'

import React from 'react'

const MotionFlex = motion(Flex)

const Slide = ({ children, direction }) => {
  return (
    <MotionFlex
      initial={changeSlide.initial}
      animate={changeSlide.animate}
      exit={changeSlide.exit}
      transition={changeSlide.transition}
      variants={changeSlide.variants}
      custom={direction}
      h="90%"
      w="90%"
      m="auto"
      justifyContent="center"
      alignItems="center"
    >
      {children}
    </MotionFlex>
  )
}

export default Slide
