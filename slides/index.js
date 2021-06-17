import { Heading, Text } from '@chakra-ui/react'

import Slide from '../components/Slide'

const Title = ({ direction }) => {
  return (
    <Slide direction={direction}>
      <Text>Hello World</Text>
    </Slide>
  )
}

const Final = ({ direction }) => {
  return (
    <Slide direction={direction}>
      <Heading>Hello World</Heading>
    </Slide>
  )
}

export default [
  Title,
  Final
]