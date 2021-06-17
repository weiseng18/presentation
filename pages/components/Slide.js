import { Flex } from '@chakra-ui/react'

import { motion } from 'framer-motion'

import React from 'react'

const MotionFlex = motion(Flex)

const Slide = ({ children }) => {
  const transition = {
    x: {
      type: 'spring',
      stiffness: 300,
      damping: 30,
    },
    opacity: {
      duration: 0.2
    }
  }

  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? -1500 : 1500,
        opacity: 0
      }
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? -1500 : 1500,
        opacity: 0
      }
    }
  }

  return (
    <MotionFlex
      initial="enter"
      animate="center"
      exit="exit"
      transition={transition}
      variants={variants}
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
