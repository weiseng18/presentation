// base components
import {
  Flex,
  HStack,
  Image,
  List,
  ListItem,
  Table,
  Text,
  Tr,
  VStack,
} from "@chakra-ui/react"

import { motion } from "framer-motion"

const MFlex = motion(Flex)
const MHStack = motion(HStack)
const MImage = motion(Image)
const MList = motion(List)
const MListItem = motion(ListItem)
const MTable = motion(Table)
const MText = motion(Text)
const MTr = motion(Tr)
const MVStack = motion(VStack)

export { MFlex, MHStack, MImage, MList, MListItem, MTable, MText, MTr, MVStack }
