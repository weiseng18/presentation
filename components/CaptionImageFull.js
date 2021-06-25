// base components
import { Box, Text } from "@chakra-ui/react"
import { MImage, MVStack } from "../components/MotionChakra"

// others
import { toggleOpacity } from "../animations"

import React from "react"

const CaptionImageFull = ({ src, h, w, caption, isFull, adjust }) => {
  return (
    <MVStack {...toggleOpacity} custom="enter" spacing={8}>
      <MImage
        animate={{
          transform: `scale(${isFull ? 2.5 : 1}) translateX(${
            adjust && isFull ? adjust : "0%"
          })`,
          zIndex: `${isFull ? 1000 : ""}`,
        }}
        h={h}
        w={w}
        src={src}
      />
      {isFull && (
        <Box
          h="100vh"
          w="100vw"
          position="absolute"
          top="0"
          left="0"
          zIndex="100"
          bgColor="white"
        />
      )}
      {!isFull && <Text textStyle="body1">{caption}</Text>}
    </MVStack>
  )
}

export default CaptionImageFull
