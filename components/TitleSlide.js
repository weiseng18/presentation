import { Text, VStack } from "@chakra-ui/react"

import React from "react"

import Slide from "./Slide"

const TitleSlide = ({ direction, title, subtitle }) => {
  return (
    <Slide direction={direction}>
      <VStack spacing="60px">
        <Text textStyle="heading1">{title}</Text>
        <Text textStyle="body1">{subtitle}</Text>
      </VStack>
    </Slide>
  )
}

export default TitleSlide
