import { extendTheme } from "@chakra-ui/react"

import { fonts } from "./fonts"
import { colors } from "./colors"
import { textStyles } from "./textStyles"

const theme = extendTheme({
  fonts,
  colors,
  textStyles,
})

export default theme
