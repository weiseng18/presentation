// base components
import { HStack, List, ListIcon, Text } from "@chakra-ui/layout"
import { MListItem } from "../../components/MotionChakra"

// slide components
import ContentSlide from "../../components/ContentSlide"

// icons
import { BsCheckCircle, BsPencilSquare } from "react-icons/bs"
import { FaStamp } from "react-icons/fa"
import { FcCancel, FcUndo } from "react-icons/fc"

import { toggleOpacity } from "../../animations"

const Title = ({ direction, step }) => {
  return (
    <ContentSlide direction={direction} title="Request flow">
      <List spacing={8}>
        {step >= 1 && (
          <MListItem {...toggleOpacity} custom="enter">
            <HStack spacing={4}>
              <ListIcon
                as={BsPencilSquare}
                color="purple.800"
                fontSize="24px"
              />
              <Text textStyle="body1">
                Request for dataset by submitting form
              </Text>
            </HStack>
          </MListItem>
        )}
        {step >= 2 && (
          <MListItem {...toggleOpacity} custom="enter">
            <HStack spacing={4}>
              <ListIcon as={BsCheckCircle} color="green.500" fontSize="24px" />
              <Text textStyle="body1">
                Endorsed by an admin from their organization
              </Text>
            </HStack>
          </MListItem>
        )}
        {step >= 3 && (
          <MListItem {...toggleOpacity} custom="enter">
            <HStack spacing={4}>
              <ListIcon as={FaStamp} color="blue.500" fontSize="24px" />
              <Text textStyle="body1">Approved by dataset owner</Text>
            </HStack>
          </MListItem>
        )}
      </List>
    </ContentSlide>
  )
}

const WhyImplement = ({ direction, step }) => {
  return (
    <ContentSlide direction={direction} title="Why implement?">
      <List spacing={8}>
        {step >= 1 && (
          <MListItem {...toggleOpacity} custom="enter">
            <HStack spacing={4}>
              <ListIcon as={FcUndo} fontSize="24px" />
              <Text textStyle="body1">
                Undo functionality for internal locus of control
              </Text>
            </HStack>
          </MListItem>
        )}
        {step >= 2 && (
          <MListItem {...toggleOpacity} custom="enter">
            <HStack spacing={4}>
              <ListIcon as={FcCancel} fontSize="24px" />
              <Text textStyle="body1">
                Users had to ask their admin to ignore incorrect requests
              </Text>
            </HStack>
          </MListItem>
        )}
      </List>
    </ContentSlide>
  )
}

export default [Title, WhyImplement]
