// base components
import {
  Flex,
  HStack,
  Image,
  List,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react"

import { motion } from "framer-motion"

const MFlex = motion(Flex)
const MHStack = motion(HStack)
const MImage = motion(Image)
const MList = motion(List)
const MListItem = motion(ListItem)
const MText = motion(Text)
const MVStack = motion(VStack)

export { MFlex, MHStack, MImage, MList, MListItem, MText, MVStack }
