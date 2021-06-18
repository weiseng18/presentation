import { Heading, VStack } from "@chakra-ui/react"
import { MText } from "../../components/MotionChakra"

import Slide from "../../components/Slide"
import TitleSlide from "../../components/TitleSlide"
import ContentSlide from "../../components/ContentSlide"

import { toggleOpacity } from "../../animations"
import { useEffect, useState } from "react"

const PreTitle = ({ direction }) => {
  return (
    <TitleSlide
      direction={direction}
      title="First slide"
      subtitle="some text"
    />
  )
}

const Content = ({ direction, step }) => {
  const [color, setColor] = useState("black")
  const [fontSize, setFontSize] = useState("16px")

  useEffect(() => {
    if (step >= 1) {
      setColor("blue")
      setFontSize("32px")
    } else {
      setColor("black")
      setFontSize("16px")
    }
  }, [step])

  return (
    <ContentSlide direction={direction} title="Some content">
      <VStack spacing={8}>
        <MText
          animate={{
            color: color,
            fontSize: fontSize,
          }}
        >
          Hello World
        </MText>
        {step === 1 && (
          <MText
            color="red"
            initial={toggleOpacity.initial}
            animate={toggleOpacity.animate}
            exit={toggleOpacity.exit}
            variants={toggleOpacity.variants}
            custom="enter"
          >
            Hello World
          </MText>
        )}
      </VStack>
    </ContentSlide>
  )
}

const Final = ({ direction }) => {
  return (
    <Slide direction={direction}>
      <Heading>Hello World</Heading>
    </Slide>
  )
}

export default [PreTitle, Content, Final]
