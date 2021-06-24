// base components
import { Grid, HStack, List, ListIcon, ListItem, Text } from "@chakra-ui/layout"
import { MHStack, MList, MListItem } from "../../components/MotionChakra"

// slide components
import ContentSlide from "../../components/ContentSlide"

// icons
import {
  BsCheck,
  BsCheckCircle,
  BsPencilSquare,
  BsTrash,
  BsCodeSlash,
} from "react-icons/bs"
import { FaStamp } from "react-icons/fa"
import { FcCancel, FcUndo } from "react-icons/fc"
import { MdEdit } from "react-icons/md"

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

const Functionality = ({ direction, step }) => {
  return (
    <ContentSlide direction={direction} title="Possible functionality">
      <Grid w="100%" templateColumns="repeat(2, 1fr)" gap={24} mt={4}>
        {step >= 1 && (
          <MList spacing={8} {...toggleOpacity} custom="enter">
            <ListItem pb={8}>
              <HStack spacing={4}>
                <ListIcon as={BsTrash} color="gray.500" fontSize="24px" />
                <Text textStyle="body1" textDecoration="underline">
                  Only withdrawal, users have to re-create
                </Text>
              </HStack>
            </ListItem>
            <ListItem>
              <HStack spacing={4}>
                <ListIcon as={BsCodeSlash} color="purple.500" fontSize="24px" />
                <Text textStyle="body1">
                  Users can withdraw a submitted request
                  <br />
                  (status: Withdrawn)
                </Text>
              </HStack>
            </ListItem>
            <ListItem>
              <HStack spacing={4}>
                <ListIcon as={BsCodeSlash} color="purple.500" fontSize="24px" />
                <Text textStyle="body1">
                  Admins do not see withdrawn request
                </Text>
              </HStack>
            </ListItem>
            <ListItem>
              <HStack spacing={4}>
                <ListIcon as={BsCheck} color="green.500" fontSize="24px" />
                <Text textStyle="body1">
                  Users can make a copy of withdrawn request manually
                </Text>
              </HStack>
            </ListItem>
          </MList>
        )}
        {step >= 2 && (
          <MList spacing={8} {...toggleOpacity} custom="enter">
            <ListItem pb={8}>
              <HStack spacing={4}>
                <ListIcon as={MdEdit} color="blue.500" fontSize="24px" />
                <Text textStyle="body1" textDecoration="underline">
                  Withdrawal, and edit the withdrawn request
                </Text>
              </HStack>
            </ListItem>
            <ListItem>
              <HStack spacing={4}>
                <ListIcon as={BsCodeSlash} color="purple.500" fontSize="24px" />
                <Text textStyle="body1">
                  Users can withdraw a submitted request
                  <br />
                  (status: Draft)
                </Text>
              </HStack>
            </ListItem>
            <ListItem>
              <HStack spacing={4}>
                <ListIcon as={BsCodeSlash} color="purple.500" fontSize="24px" />
                <Text textStyle="body1">
                  Admins do not see withdrawn request
                </Text>
              </HStack>
            </ListItem>
            <ListItem>
              <HStack spacing={4}>
                <ListIcon as={BsCodeSlash} color="purple.500" fontSize="24px" />
                <Text textStyle="body1">Users can edit withdrawn request</Text>
              </HStack>
            </ListItem>
          </MList>
        )}
      </Grid>
      {step >= 3 && (
        <MHStack
          {...toggleOpacity}
          custom="enter"
          pt="80px"
          justifyContent="center"
          w="100%"
        >
          <Text fontSize="2xl">Users want to</Text>
          <Text fontSize="3xl" fontWeight="600">
            feel
          </Text>
          <Text fontSize="2xl">in control</Text>
        </MHStack>
      )}
    </ContentSlide>
  )
}

export default [Title, WhyImplement, Functionality]
