// base components
import { Image, Text } from "@chakra-ui/react"
import { MVStack } from "../components/MotionChakra"

// others
import { toggleOpacity } from "../animations"

import React from "react"

const CaptionImage = ({ src, h, w, caption }) => {
  return (
    <MVStack {...toggleOpacity} custom="enter" spacing={8}>
      <Image h={h} w={w} src={src} />
      <Text textStyle="body1">{caption}</Text>
    </MVStack>
  )
}

export default CaptionImage
