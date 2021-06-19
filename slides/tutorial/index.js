// base components
import { Flex, Heading, Text, VStack } from "@chakra-ui/react"
import { MText } from "../../components/MotionChakra"

// slide components
import Slide from "../../components/Slide"
import TitleSlide from "../../components/TitleSlide"
import ContentSlide from "../../components/ContentSlide"
import TwoColSlide from "../../components/TwoColSlide"

// custom components
import CaptionImageFull from "../../components/CaptionImageFull"

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

const Images = ({ direction, step }) => {
  return (
    <ContentSlide direction={direction} title="HTML/CSS/JS">
      <Text textStyle="body1">
        Static, single-page websites, made with vanilla JS, for solo projects
      </Text>
      <Flex w="100%" justifyContent="space-around" alignItems="center" mt={8}>
        {step >= 1 && (
          <CaptionImageFull
            src="pixelart.png"
            h="256"
            w="455"
            isFull={step == 1}
            caption="pixelart editor"
          />
        )}
        {step >= 3 && (
          <CaptionImageFull
            src="maze.png"
            h="256"
            w="455"
            isFull={step == 3}
            adjust
            caption="maze generated by Prim's algorithm"
          />
        )}
      </Flex>
    </ContentSlide>
  )
}

const Side = ({ direction, step }) => {
  return (
    <TwoColSlide direction={direction} title="Title on the side">
      <MText
        textStyle="body1"
        animate={{ transform: `scale(${step === 1 ? 2.5 : 1})` }}
      >
        Hello World
      </MText>
      <MText textStyle="body1" layoutId="transition">
        Transition to Title
      </MText>
    </TwoColSlide>
  )
}

const TransitionCrossSlide = ({ direction }) => {
  return (
    <ContentSlide
      direction={direction}
      title="Transition to Title"
      layoutIdTitle="transition"
    >
      <Text textStyle="body1">Placeholder content</Text>
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

export default [PreTitle, Content, Images, Side, TransitionCrossSlide, Final]
