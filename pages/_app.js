import { ChakraProvider } from "@chakra-ui/react"

import { AnimateSharedLayout } from "framer-motion"

import "@fontsource/inter"

import theme from "../theme"

function App({ Component, pageProps }) {
  return (
    <AnimateSharedLayout>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </AnimateSharedLayout>
  )
}

export default App
