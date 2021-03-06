// base components
import { Flex, Text } from "@chakra-ui/react"

// slide components
import Slide from "./Slide"

import React from "react"

const TwoColSlide = ({ direction, title, children }) => {
  return (
    <Slide direction={direction}>
      <Flex h="100%" w="50%" justifyContent="center" alignItems="center">
        <Text h="10%" textStyle="heading2">
          {title}
        </Text>
      </Flex>
      <Flex
        h="100%"
        w="50%"
        flexDir="column"
        justifyContent="space-around"
        alignItems="center"
      >
        {children}
      </Flex>
    </Slide>
  )
}

export default TwoColSlide
