import { Heading, Text } from '@chakra-ui/react'

import Slide from '../components/Slide'

const Title = () => {
  return (
    <Slide>
      <Text>Hello World</Text>
    </Slide>
  )
}

const Final = () => {
  return (
    <Slide>
      <Heading>Hello World</Heading>
    </Slide>
  )
}

export default [
  <Title />,
  <Final />
]