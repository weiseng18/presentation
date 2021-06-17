import { ChakraProvider } from '@chakra-ui/react'

import '@fontsource/inter'

import theme from '../theme'

function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App