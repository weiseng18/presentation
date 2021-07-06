// base components
import {
  Grid,
  HStack,
  List,
  ListIcon,
  ListItem,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  UnorderedList,
  VStack,
} from "@chakra-ui/react"
import {
  MHStack,
  MList,
  MListItem,
  MTable,
  MText,
  MTr,
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
        {step >= 4 && (
          <MListItem {...toggleOpacity} custom="enter">
            <HStack spacing={4}>
              <ListIcon as={FcUndo} color="blue.500" fontSize="24px" />
              <Text textStyle="body1">Withdraw their request (if needed)</Text>
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
  const [opacityTwo, setOpacityTwo] = useState(1)
  useEffect(() => {
    if (step > 3) {
      setOpacity(0.2)
      setOpacityTwo(0.2)
    } else if (step === 3) {
      setOpacity(0.2)
      setOpacityTwo(1)
    } else setOpacity(1)
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
                  <MText animate={{ opacity: opacityTwo }} textStyle="body2">
                    request_id
                  </MText>
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
                  <MText animate={{ opacity: opacityTwo }} textStyle="body2">
                    request_id
                  </MText>
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
                  <MText animate={{ opacity: opacityTwo }} textStyle="body2">
                    approval_id
                  </MText>
                  <MText animate={{ opacity: opacity }} textStyle="body2">
                    , type,&nbsp;
                  </MText>
                  <MText animate={{ opacity: opacityTwo }} textStyle="body2">
                    request_id
                  </MText>
                  <MText animate={{ opacity: opacity }} textStyle="body2">
                    ,&nbsp;
                  </MText>
                  <MText animate={{ opacity: opacityTwo }} textStyle="body2">
                    dependency_id
                  </MText>
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
                  <MText animate={{ opacity: opacityTwo }} textStyle="body2">
                    approval_id
                  </MText>
                  <MText animate={{ opacity: opacity }} textStyle="body2">
                    , approval metadata)
                  </MText>
                </HStack>
              </ListItem>
              <ListItem>
                <HStack spacing={2}>
                  <MText animate={{ opacity: opacity }} textStyle="subHeading2">
                    RequestDataset
                  </MText>
                  <MText
                    animate={{ opacity: opacityTwo === 0.2 ? 1 : opacity }}
                    textStyle="body2"
                  >
                    (1 approval &rarr; many RequestDatasets)
                  </MText>
                </HStack>
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
          <UnorderedList spacing={8}>
            {step >= 2 && (
              <MListItem {...toggleOpacity} custom="enter">
                <Text textStyle="body1">
                  Withdraw and edit withdrawn request
                </Text>
              </MListItem>
            )}
            {step >= 3 && (
              <MListItem {...toggleOpacity} custom="enter">
                <Text textStyle="body1">
                  Edit existing data, IDs stay the same
                </Text>
              </MListItem>
            )}
            {step >= 4 && (
              <MListItem {...toggleOpacity} custom="enter">
                <Text textStyle="body1">
                  Note that 1 approval is for 1 organisation
                </Text>
              </MListItem>
            )}
          </UnorderedList>
        </VStack>
      </Grid>
    </ContentSlide>
  )
}

const KeepIds = ({ direction, step }) => {
  return (
    <ContentSlide direction={direction} title="Keeping the same IDs">
      <VStack w="100%" spacing={12}>
        {step >= 1 && (
          <MTable {...toggleOpacity} custom="enter">
            <Thead>
              <Tr>
                <Th>
                  <Text textStyle="body2">User action</Text>
                </Th>
                <Th w="60%">
                  <Text textStyle="body2">Implementation</Text>
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr {...toggleOpacity} custom="enter">
                <Td>Adds a dataset from a different org</Td>
                <Td>Generate new approval and associate with the request</Td>
              </Tr>
              {step >= 2 && (
                <MTr {...toggleOpacity} custom="enter">
                  <Td>Adds a dataset from the same org</Td>
                  <Td>Amend existing approval, requires table joins</Td>
                </MTr>
              )}
              {step >= 3 && (
                <MTr {...toggleOpacity} custom="enter">
                  <Td>
                    Removes a dataset, and there are
                    <br />
                    no more datasets from that org
                  </Td>
                  <Td>Remove association between approval and request</Td>
                </MTr>
              )}
              {step >= 4 && (
                <MTr {...toggleOpacity} custom="enter">
                  <Td>
                    Removes a dataset, and there are
                    <br />
                    still more datasets from that org
                  </Td>
                  <Td>Amend existing approval, requires table joins</Td>
                </MTr>
              )}
            </Tbody>
          </MTable>
        )}
        {step >= 5 && (
          <MText
            {...toggleOpacity}
            custom="enter"
            textStyle="subHeading1"
            mt={8}
          >
            and even more cases
          </MText>
        )}
      </VStack>
    </ContentSlide>
  )
}

const FinalImplementation = ({ direction, step }) => {
  return (
    <ContentSlide direction={direction} title="Implementation">
      <List spacing={8}>
        {step >= 1 && (
          <MListItem {...toggleOpacity} custom="enter">
            <Text textStyle="body1">
              Do not need to keep the same Approval IDs
            </Text>
          </MListItem>
        )}
        {step >= 2 && (
          <MListItem {...toggleOpacity} custom="enter">
            <Text textStyle="body1">Mark approvals as Withdrawn</Text>
            <UnorderedList mt={8} spacing={8}>
              {step >= 3 && (
                <MListItem pl={8} {...toggleOpacity} custom="enter">
                  <Text textStyle="body1">Pending, Accepted, Rejected</Text>
                </MListItem>
              )}
            </UnorderedList>
          </MListItem>
        )}
      </List>
    </ContentSlide>
  )
}

const Tradeoffs = ({ direction, step }) => {
  return (
    <ContentSlide direction={direction} title="Tradeoffs">
      <VStack spacing={8} alignItems="flex-start" w="100%">
        {step >= 1 && (
          <MText textStyle="subHeading2" {...toggleOpacity} custom="enter">
            Different approval ID
          </MText>
        )}
        {step >= 2 && (
          <UnorderedList pl={8} spacing={8}>
            <MListItem {...toggleOpacity} custom="enter">
              <Text textStyle="body1">
                Frontend: UUID in the address bar only
              </Text>
            </MListItem>
            {step >= 3 && (
              <MListItem {...toggleOpacity} custom="enter">
                <Text textStyle="body1">Approval API: Not used</Text>
              </MListItem>
            )}
          </UnorderedList>
        )}
        {step >= 4 && (
          <>
            <MText textStyle="subHeading2" {...toggleOpacity} custom="enter">
              Filter away the withdrawn approvals
            </MText>
            <UnorderedList pl={8} spacing={8}>
              <MListItem {...toggleOpacity} custom="enter">
                <Text textStyle="body1">Can change to soft delete</Text>
              </MListItem>
            </UnorderedList>
          </>
        )}
      </VStack>
    </ContentSlide>
  )
}

const TeamAndPurge = ({ direction, step }) => {
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    if (step >= 6) {
      setOpacity(0.3)
    } else setOpacity(1)
  }, [step])

  return (
    <ContentSlide direction={direction} title="Team members and purge">
      <MVStack
        spacing={8}
        alignItems="flex-start"
        w="100%"
        animate={{ opacity: opacity }}
      >
        {step >= 1 && (
          <MText textStyle="subHeading2" {...toggleOpacity} custom="enter">
            Specify team members
          </MText>
        )}
        {step >= 2 && (
          <UnorderedList pl={8} spacing={8}>
            <MListItem {...toggleOpacity} custom="enter">
              <Text textStyle="body1">1 approval for whole team</Text>
            </MListItem>
            {step >= 3 && (
              <MListItem {...toggleOpacity} custom="enter">
                <Text textStyle="body1">
                  Everyone gets access to the datasets
                </Text>
              </MListItem>
            )}
          </UnorderedList>
        )}
        {step >= 4 && (
          <MText textStyle="subHeading2" {...toggleOpacity} custom="enter">
            Acknowledge purged datasets
          </MText>
        )}
        {step >= 5 && (
          <UnorderedList pl={8} spacing={8}>
            <MListItem {...toggleOpacity} custom="enter">
              <Text textStyle="body1">
                Indicate that you have deleted the datasets locally
              </Text>
            </MListItem>
          </UnorderedList>
        )}
      </MVStack>
      <VStack spacing={8} mt={8} alignItems="flex-start" w="100%">
        {step >= 6 && (
          <MText textStyle="subHeading2" {...toggleOpacity} custom="enter">
            Interactions
          </MText>
        )}
        {step >= 7 && (
          <UnorderedList pl={8} spacing={8}>
            <MListItem {...toggleOpacity} custom="enter">
              <Text textStyle="body1">
                Each team member needs to indicate that they have purged
              </Text>
            </MListItem>
            {step >= 8 && (
              <MListItem {...toggleOpacity} custom="enter">
                <Text textStyle="body1">
                  Each team member needs write access
                </Text>
              </MListItem>
            )}
          </UnorderedList>
        )}
      </VStack>
    </ContentSlide>
  )
}

export default [
  Title,
  WhyImplement,
  Functionality,
  HowToImplement,
  KeepIds,
  FinalImplementation,
  Tradeoffs,
  TeamAndPurge,
]
