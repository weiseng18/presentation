import { Flex, Text, VStack } from "@chakra-ui/react"

import React from "react"

import Slide from "./Slide"

const ContentSlide = ({ direction, title, children }) => {
  return (
    <Slide direction={direction}>
      <Flex
        h="90%"
        w="90%"
        flexDir="column"
        justifyContent="space-around"
        alignItems="flex-start"
      >
        <Text h="10%" textStyle="heading2">
          {title}
        </Text>
        <VStack h="80%" w="100%" alignItems="flex-start" spacing={8}>
          {children}
        </VStack>
      </Flex>
    </Slide>
  )
}

export default ContentSlide
