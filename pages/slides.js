// base components
import { Box, Flex } from "@chakra-ui/react"

// custom components
import DatasetTable from "../components/custom/DatasetTable"

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
    4, 2, 4, 4, 5, 7, 4, 11, 13, 2,
    // Features Intro (dataset refactoring)
    1,
    // Dataset Refactoring
    3, 5, 6, 6, 4, 8, 9, 7, 7, 6,
    // Features Intro (revamp search)
    1,
    // Revamp Search
    6, 6, 13, 4, 10,
    // Conclusion
    3,
    // End
    0,
  ]

  const [slide, setSlide] = useState(0)
  const [step, setStep] = useState(0)
  const [direction, setDirection] = useState(0)

  const [showTable, toggleTable] = useState(false)

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

  const jumpToSlide = (idx) => {
    setSlide(idx)
    setStep(0)
  }

  const handleKeyDown = (e) => {
    if (e.key === "d" || e.key === "D") {
      changeSlide(1)
    } else if (e.key === "a" || e.key === "A") {
      changeSlide(-1)
    } else if (e.key === "t" || e.key === "T") {
      toggleTable((prev) => !prev)
    } else if (e.key === "e" || e.key === "E") {
      jumpToSlide(slides.length - 1)
    }
  }

  const renderSlide = () => {
    const one = slides.slice(slide, slide + 1)
    return one.map((Component, index) => {
      return (
        <Component
          key={index}
          direction={direction}
          step={step}
          jumpToSlide={jumpToSlide}
        />
      )
    })
  }

  /*
  useEffect(() => {
    setSlide(5)
  }, [])
  */

  return (
    <AnimatePresence initial={false}>
      <Box zIndex="1000" position="absolute" right="32px" bottom="32px">
        {slide + 1}
      </Box>
      <Flex
        h="100vh"
        w="100vw"
        overflow="hidden"
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        {renderSlide()}
        {showTable && (
          <Flex
            position="absolute"
            h="100vh"
            w="100vw"
            top="0"
            left="0"
            zIndex="10"
            bgColor="white"
            justifyContent="center"
            alignItems="center"
          >
            <Box>
              <DatasetTable hasSteps={false} />
            </Box>
          </Flex>
        )}
      </Flex>
    </AnimatePresence>
  )
}

export default Index
