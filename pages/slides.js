// base components
import { Flex } from "@chakra-ui/react"

import { AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

import slides from "../slides/main"

const Index = () => {
  // this array should contain 1 value per slide
  const STEP_MAX = [
    // Title
    0,
    // Intro
    5, 3, 4, 5,
    // Features Intro (all + withdraw)
    4,
    // Withdraw Request
    4, 2, 3, 4, 5, 3, 4, 11, 13, 2,
    // Features Intro (dataset refactoring)
    1,
    // Dataset Refactoring
    3, 5, 6, 6, 3,
    // Features Intro (revamp search)
    1,
    // Revamp Search
    6, 6, 13, 4, 10,
    // End
    0,
  ]

  const [slide, setSlide] = useState(0)
  const [step, setStep] = useState(0)
  const [direction, setDirection] = useState(0)

  const changeSlide = (delta) => {
    const newSlide = slide + delta
    const newStep = step + delta

    // if newStep is not out of bounds, do a step instead of slide change
    if (newStep >= 0 && newStep <= STEP_MAX[slide]) {
      setStep(newStep)
    }
    // else change the slide
    else {
      // disallow going out of bounds
      if (newSlide < 0 || newSlide >= slides.length) return

      setSlide(newSlide)
      setStep(delta < 0 ? STEP_MAX[newSlide] : 0)
      // direction is opposite of delta
      setDirection(-delta)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === "d") {
      changeSlide(1)
    } else if (e.key === "a") {
      changeSlide(-1)
    }
  }

  const renderSlide = () => {
    const one = slides.slice(slide, slide + 1)
    return one.map((Component, index) => {
      return <Component key={index} direction={direction} step={step} />
    })
  }

  useEffect(() => {
    setSlide(5)
  }, [])

  return (
    <AnimatePresence initial={false}>
      <Flex
        h="100vh"
        w="100vw"
        overflow="hidden"
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        {renderSlide()}
      </Flex>
    </AnimatePresence>
  )
}

export default Index
