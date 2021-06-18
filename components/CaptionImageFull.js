import { Box, Image, Text } from "@chakra-ui/react"
import { MVStack } from "../components/MotionChakra"

import { toggleOpacity } from "../animations"

import React, { useEffect, useState } from "react"
import useWindowDimensions from "../hooks/useWindowDimensions"

const CaptionImage = ({ src, h, w, caption, isFull }) => {
  const { height, width } = useWindowDimensions()

  // image info
  const [imHeight, setImHeight] = useState(0)
  const [imWidth, setImWidth] = useState(0)
  const [imTop, setImTop] = useState(0)
  const [imLeft, setImLeft] = useState(0)
  const MAX_RATIO = 0.9

  useEffect(() => {
    setImHeight(h)
    setImWidth(w)
  }, [])

  useEffect(() => {
    if (isFull) {
      // calc max dimensions
      const maxHeight = MAX_RATIO * parseInt(height)
      const maxWidth = MAX_RATIO * parseInt(width)

      // calc scale amounts, and determine min
      const scaleHeight = maxHeight / parseInt(h)
      const scaleWidth = maxWidth / parseInt(w)
      const scale = Math.min(scaleHeight, scaleWidth)

      // calc new dimensions, and top/left
      const newHeight = parseInt(h) * scale
      const newWidth = parseInt(w) * scale
      const newTop = (height - newHeight) / 2
      const newLeft = (width - newWidth) / 2

      // set states
      setImHeight(newHeight.toString())
      setImWidth(newWidth.toString())
      setImTop(newTop + "px")
      setImLeft(newLeft + "px")
    } else {
      setImHeight(h)
      setImWidth(w)
    }
  }, [height, width, isFull])

  return (
    <MVStack {...toggleOpacity} custom="enter" spacing={8}>
      <Image
        h={imHeight}
        w={imWidth}
        zIndex={isFull && "1000"}
        position={isFull && "absolute"}
        top={isFull && imTop}
        left={isFull && imLeft}
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

export default CaptionImage
