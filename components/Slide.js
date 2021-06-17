import { MFlex } from '../components/MotionChakra'

import { changeSlide } from '../animations'

import React from 'react'

const Slide = ({ children, direction }) => {
  return (
    <MFlex
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
    </MFlex>
  )
}

export default Slide
