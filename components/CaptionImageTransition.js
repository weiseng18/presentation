// base components
import { VStack } from "@chakra-ui/react"
import { MFlex, MImage, MText } from "./MotionChakra"

// others
import { toggleOpacity } from "../animations"

import React from "react"

const CaptionImageTransition = ({ src, h, w, caption, layoutId }) => {
  return (
    <MFlex
      position="absolute"
      h="100vh"
      w="100vw"
      top="0"
      left="0"
      bgColor="white"
      {...toggleOpacity}
      custom="enter"
    >
      <VStack m="auto" spacing={8}>
        <MImage h={h} w={w} src={src} />
        <MText textStyle="body1" layoutId={layoutId}>
          {caption}
        </MText>
      </VStack>
    </MFlex>
  )
}

export default CaptionImageTransition
