import { Flex, Text, VStack } from "@chakra-ui/react"

import React from "react"
import { MText } from "./MotionChakra"

import Slide from "./Slide"

const ContentSlide = ({ direction, title, children, layoutIdTitle }) => {
  return (
    <Slide direction={direction} customSlideChange={layoutIdTitle}>
      <Flex
        h="90%"
        w="90%"
        flexDir="column"
        justifyContent="space-around"
        alignItems="flex-start"
      >
        {layoutIdTitle ? (
          <>
            {/* By specifying layoutIdTitle, you can animate a word from a previous slide to the title of the next slide */}
            <MText h="10%" textStyle="heading2" layoutId={layoutIdTitle}>
              {title}
            </MText>
          </>
        ) : (
          <Text h="10%" textStyle="heading2">
            {title}
          </Text>
        )}
        <VStack h="80%" w="100%" alignItems="flex-start" spacing={8}>
          {children}
        </VStack>
      </Flex>
    </Slide>
  )
}

export default ContentSlide
