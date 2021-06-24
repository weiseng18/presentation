// base components
import { Grid, HStack, List, ListIcon, ListItem, Text } from "@chakra-ui/layout"
import {
  MHStack,
  MList,
  MListItem,
  MText,
  MVStack,
} from "../../components/MotionChakra"

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
import { useEffect, useState } from "react"
import { UnorderedList, VStack } from "@chakra-ui/react"

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

const HowToImplement = ({ direction, step }) => {
  const [opacity, setOpacity] = useState(1)
  useEffect(() => {
    if (step >= 3) setOpacity(0.2)
    else setOpacity(1)
  }, [step])

  return (
    <ContentSlide direction={direction} title="How to implement">
      <Grid w="100%" templateColumns="repeat(2, 1fr)" gap={24} mt={4}>
        {step >= 1 && (
          <MVStack
            spacing={12}
            alignItems="flex-start"
            {...toggleOpacity}
            custom="enter"
          >
            <Text textStyle="subHeading1">Entities created</Text>
            <List spacing={8}>
              <ListItem>
                <HStack spacing={0}>
                  <MText animate={{ opacity: opacity }} textStyle="subHeading2">
                    Request&nbsp;
                  </MText>
                  <MText animate={{ opacity: opacity }} textStyle="body2">
                    (
                  </MText>
                  <MText textStyle="body2">request_id</MText>
                  <MText animate={{ opacity: opacity }} textStyle="body2">
                    , creator_id)
                  </MText>
                </HStack>
              </ListItem>
              <ListItem>
                <HStack spacing={0}>
                  <MText animate={{ opacity: opacity }} textStyle="subHeading2">
                    RequestState&nbsp;
                  </MText>
                  <MText animate={{ opacity: opacity }} textStyle="body2">
                    (
                  </MText>
                  <MText textStyle="body2">request_id</MText>
                  <MText animate={{ opacity: opacity }} textStyle="body2">
                    , request metadata)
                  </MText>
                </HStack>
              </ListItem>
              <ListItem>
                <HStack spacing={0}>
                  <MText animate={{ opacity: opacity }} textStyle="subHeading2">
                    Approval&nbsp;
                  </MText>
                  <MText animate={{ opacity: opacity }} textStyle="body2">
                    (
                  </MText>
                  <MText textStyle="body2">approval_id</MText>
                  <MText animate={{ opacity: opacity }} textStyle="body2">
                    , type,&nbsp;
                  </MText>
                  <MText textStyle="body2">request_id</MText>
                  <MText animate={{ opacity: opacity }} textStyle="body2">
                    ,&nbsp;
                  </MText>
                  <MText textStyle="body2">dependency_id</MText>
                  <MText animate={{ opacity: opacity }} textStyle="body2">
                    )
                  </MText>
                </HStack>
              </ListItem>
              <ListItem>
                <HStack spacing={0}>
                  <MText animate={{ opacity: opacity }} textStyle="subHeading2">
                    ApprovalState&nbsp;
                  </MText>
                  <MText animate={{ opacity: opacity }} textStyle="body2">
                    (
                  </MText>
                  <MText textStyle="body2">approval_id</MText>
                  <MText animate={{ opacity: opacity }} textStyle="body2">
                    , approval metadata)
                  </MText>
                </HStack>
              </ListItem>
              <ListItem>
                <MHStack animate={{ opacity: opacity }} spacing={2}>
                  <Text textStyle="subHeading2">RequestDataset</Text>
                  <Text textStyle="body2">
                    (1 approval &rarr; many RequestDatasets)
                  </Text>
                </MHStack>
              </ListItem>
              <ListItem>
                <MHStack animate={{ opacity: opacity }} spacing={2}>
                  <Text textStyle="subHeading2">RequestDatasetFields</Text>
                  <Text textStyle="body2">(RequestDataset &rarr; fields)</Text>
                </MHStack>
              </ListItem>
            </List>
          </MVStack>
        )}
        <VStack alignItems="flex-start" spacing={12}>
          {step >= 2 && (
            <MText textStyle="subHeading1" {...toggleOpacity} custom="enter">
              Edit the withdrawn request
            </MText>
          )}
          <UnorderedList spacing={8}>
            {step >= 3 && (
              <MListItem {...toggleOpacity} custom="enter">
                <Text textStyle="body1">
                  Edit existing data, IDs stay the same
                </Text>
              </MListItem>
            )}
            {step >= 4 && (
              <MListItem {...toggleOpacity} custom="enter">
                <Text textStyle="body1">Create new data, IDs change</Text>
              </MListItem>
            )}
          </UnorderedList>
        </VStack>
      </Grid>
    </ContentSlide>
  )
}

export default [Title, WhyImplement, Functionality, HowToImplement]
