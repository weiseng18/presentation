import { MFlex } from "../components/MotionChakra"

import { changeSlide } from "../animations"

import React from "react"

const Slide = ({ children, direction, customSlideChange }) => {
  const animateProps = customSlideChange ? false : { ...changeSlide }

  return (
    <MFlex
      {...animateProps}
      custom={!customSlideChange && direction}
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
