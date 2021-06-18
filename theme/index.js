import { extendTheme } from "@chakra-ui/react"

import { fonts } from "./fonts"
import { textStyles } from "./textStyles"

const theme = extendTheme({
  fonts,
  textStyles,
})

export default theme
