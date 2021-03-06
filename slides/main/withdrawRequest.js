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
  MFlex,
  MHStack,
  MList,
  MListItem,
  MTable,
  MText,
  MTr,
  MUnorderedList,
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
import CaptionImage from "../../components/CaptionImage"

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
  const [opacity, setOpacity] = useState(1)
  useEffect(() => {
    if (step >= 4) setOpacity(0.2)
    else setOpacity(1)
  }, [step])
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
            <MListItem animate={{ opacity: opacity }}>
              <HStack spacing={4}>
                <ListIcon as={BsCodeSlash} color="purple.500" fontSize="24px" />
                <Text textStyle="body1">
                  Users can withdraw a submitted request
                  <br />
                  (status: Withdrawn)
                </Text>
              </HStack>
            </MListItem>
            <MListItem animate={{ opacity: opacity }}>
              <HStack spacing={4}>
                <ListIcon as={BsCodeSlash} color="purple.500" fontSize="24px" />
                <Text textStyle="body1">
                  Admins do not see withdrawn request
                </Text>
              </HStack>
            </MListItem>
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
            <MListItem animate={{ opacity: opacity }}>
              <HStack spacing={4}>
                <ListIcon as={BsCodeSlash} color="purple.500" fontSize="24px" />
                <Text textStyle="body1">
                  Users can withdraw a submitted request
                  <br />
                  (status: Draft)
                </Text>
              </HStack>
            </MListItem>
            <MListItem animate={{ opacity: opacity }}>
              <HStack spacing={4}>
                <ListIcon as={BsCodeSlash} color="purple.500" fontSize="24px" />
                <Text textStyle="body1">
                  Admins do not see withdrawn request
                </Text>
              </HStack>
            </MListItem>
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
    if (step >= 6) {
      setOpacity(0.2)
      setOpacityTwo(0.2)
    } else if (step >= 3) {
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
            {step >= 6 && (
              <MListItem {...toggleOpacity} custom="enter">
                <Text textStyle="body1">
                  Note that 1 approval is for 1 organisation
                </Text>
              </MListItem>
            )}
          </UnorderedList>
        </VStack>
      </Grid>
      {step == 4 && (
        <MFlex
          position="absolute"
          h="100vh"
          w="100vw"
          top="0"
          left="0"
          bgColor="white"
          justifyContent="center"
          alignItems="center"
          {...toggleOpacity}
          custom="enter"
        >
          <CaptionImage
            src="withdraw/UUID.jpeg"
            h="50"
            w="888"
            caption="UUID in the address bar"
          />
        </MFlex>
      )}
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
                <Th w="30%">
                  <Text textStyle="body2">Context</Text>
                </Th>
                <Th w="50%">
                  <Text textStyle="body2">Implementation</Text>
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr {...toggleOpacity} custom="enter">
                <Td>Adds a dataset</Td>
                <Td>From a different org</Td>
                <Td>Generate new approval and associate with the request</Td>
              </Tr>
              {step >= 2 && (
                <MTr {...toggleOpacity} custom="enter">
                  <Td>Adds a dataset</Td>
                  <Td>From the same org</Td>
                  <Td>Amend existing approval, requires table joins</Td>
                </MTr>
              )}
              {step >= 3 && (
                <MTr {...toggleOpacity} custom="enter">
                  <Td>Removes a dataset</Td>
                  <Td>No more datasets from that org</Td>
                  <Td>Remove association between approval and request</Td>
                </MTr>
              )}
              {step >= 4 && (
                <MTr {...toggleOpacity} custom="enter">
                  <Td>Removes a dataset</Td>
                  <Td>Still some datasets from that org</Td>
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

const Worth = ({ direction, step }) => {
  return (
    <ContentSlide direction={direction} title="Is it worth it?">
      <List spacing={8}>
        {step >= 1 && (
          <MListItem {...toggleOpacity} custom="enter">
            <Text textStyle="body1">We can implement this</Text>
          </MListItem>
        )}
        {step >= 2 && (
          <MListItem {...toggleOpacity} custom="enter">
            <Text textStyle="body1">Many cases = more logic</Text>
          </MListItem>
        )}
        {step >= 5 && (
          <MListItem {...toggleOpacity} custom="enter">
            <Text textStyle="body1">Small gain, large effort</Text>
          </MListItem>
        )}
      </List>
      {step == 3 && (
        <MFlex
          position="absolute"
          h="100vh"
          w="100vw"
          top="0"
          left="0"
          bgColor="white"
          justifyContent="center"
          alignItems="center"
          {...toggleOpacity}
          custom="enter"
        >
          <CaptionImage
            src="withdraw/UUID.jpeg"
            h="50"
            w="888"
            caption="UUID in the address bar"
          />
        </MFlex>
      )}
    </ContentSlide>
  )
}

const FinalImplementation = ({ direction, step }) => {
  return (
    <ContentSlide direction={direction} title="Implementation">
      <List spacing={8}>
        {step >= 1 && (
          <MListItem {...toggleOpacity} custom="enter">
            <VStack spacing={8} alignItems="flex-start">
              <Text textStyle="subHeading2">Bear in mind</Text>
              {step >= 2 && (
                <MText
                  pl={8}
                  textStyle="body1"
                  {...toggleOpacity}
                  custom="enter"
                >
                  Do not need to keep the same Approval IDs
                </MText>
              )}
              {step >= 3 && (
                <MText
                  pl={8}
                  textStyle="body1"
                  {...toggleOpacity}
                  custom="enter"
                >
                  Avoid introducing too much extra logic to the code
                </MText>
              )}
            </VStack>
          </MListItem>
        )}
        {step >= 4 && (
          <MListItem pt={8} {...toggleOpacity} custom="enter">
            <VStack spacing={8} alignItems="flex-start">
              <Text textStyle="subHeading2">"Deleting approvals"</Text>
              {step >= 5 && (
                <MText
                  textStyle="body1"
                  pl={8}
                  {...toggleOpacity}
                  custom="enter"
                >
                  Mark approvals as Withdrawn
                </MText>
              )}
              <HStack spacing={0}>
                {step >= 6 && (
                  <MText
                    textStyle="body1"
                    pl={8}
                    {...toggleOpacity}
                    custom="enter"
                  >
                    Pending, Accepted, Rejected
                  </MText>
                )}
                {step >= 7 && (
                  <MText
                    textStyle="body1"
                    {...toggleOpacity}
                    color="red.500"
                    custom="enter"
                  >
                    , Withdrawn
                  </MText>
                )}
              </HStack>
            </VStack>
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
          <List pl={8} spacing={8}>
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
            {step >= 4 && (
              <MListItem {...toggleOpacity} custom="enter">
                <Text textStyle="body1">Request would have changed</Text>
              </MListItem>
            )}
          </List>
        )}
        {step >= 5 && (
          <>
            <MText textStyle="subHeading2" {...toggleOpacity} custom="enter">
              Filter away the withdrawn approvals
            </MText>
            <List pl={8} spacing={8}>
              <MListItem {...toggleOpacity} custom="enter">
                <Text textStyle="body1">Can change to soft delete</Text>
              </MListItem>
            </List>
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
      <Grid w="100%" templateColumns="repeat(2, 1fr)" gap={24} mt={4}>
        <VStack spacing={8} alignItems="flex-start">
          {step >= 1 && (
            <MText textStyle="subHeading2" {...toggleOpacity} custom="enter">
              Specify team members
            </MText>
          )}
          {step >= 7 && (
            <MList pl={8} spacing={8} {...toggleOpacity}>
              <ListItem custom="enter">
                <Text textStyle="body1">
                  Each team member needs to indicate that they have purged the
                  dataset(s)
                </Text>
              </ListItem>
            </MList>
          )}
          {step >= 2 && (
            <MList pl={8} spacing={8} animate={{ opacity: opacity }}>
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
            </MList>
          )}
          {step >= 4 && (
            <MText textStyle="subHeading2" {...toggleOpacity} custom="enter">
              Acknowledge purged datasets
            </MText>
          )}
          {step >= 8 && (
            <MList pl={8} spacing={8} {...toggleOpacity}>
              <ListItem custom="enter">
                <Text textStyle="body1">
                  Each team member needs write access
                </Text>
              </ListItem>
            </MList>
          )}
          {step >= 5 && (
            <MList pl={8} spacing={8} animate={{ opacity: opacity }}>
              <MListItem {...toggleOpacity} custom="enter">
                <Text textStyle="body1">
                  Indicate that you have deleted the datasets locally
                </Text>
              </MListItem>
            </MList>
          )}
        </VStack>
        <VStack spacing={8} alignItems="flex-start">
          {step >= 9 && (
            <MText textStyle="subHeading2" {...toggleOpacity} custom="enter">
              By adding withdraw request feature
            </MText>
          )}
          {step >= 10 && (
            <List pl={8} spacing={8}>
              <MListItem {...toggleOpacity} custom="enter">
                <Text textStyle="body1">
                  Team has write access, so can every team member can withdraw
                  the request
                </Text>
              </MListItem>
              {step >= 11 && (
                <MListItem {...toggleOpacity} custom="enter">
                  <Text textStyle="body1">
                    Separate check that user attempting to edit is the creator
                  </Text>
                </MListItem>
              )}
            </List>
          )}
        </VStack>
      </Grid>
    </ContentSlide>
  )
}

const TeamAndWithdraw = ({ direction, step }) => {
  return (
    <ContentSlide
      direction={direction}
      layoutIdTitle="team"
      title="Team members and withdraw/edit"
    >
      {step < 8 && (
        <Grid w="100%" templateColumns="repeat(2, 1fr)" gap={24} mt={4}>
          <VStack spacing={8} alignItems="flex-start">
            {step >= 1 && (
              <MText textStyle="subHeading2" {...toggleOpacity} custom="enter">
                General environment
              </MText>
            )}
            {step >= 2 && (
              <List pl={8} spacing={8}>
                <MListItem {...toggleOpacity} custom="enter">
                  <Text textStyle="body1">
                    All teammates can withdraw the request
                  </Text>
                </MListItem>
                {step >= 3 && (
                  <MListItem {...toggleOpacity} custom="enter">
                    <Text textStyle="body1">
                      All teammates can edit the withdrawn request
                    </Text>
                  </MListItem>
                )}
                {step >= 4 && (
                  <MListItem {...toggleOpacity} custom="enter">
                    <Text textStyle="body1">
                      All teammates can edit a request before submission
                    </Text>
                  </MListItem>
                )}
              </List>
            )}
          </VStack>
          <VStack spacing={8} alignItems="flex-start">
            {step >= 5 && (
              <MText textStyle="subHeading2" {...toggleOpacity} custom="enter">
                Vault
              </MText>
            )}
            {step >= 6 && (
              <List pl={8} spacing={8}>
                <MListItem {...toggleOpacity} custom="enter">
                  <Text textStyle="body1">Cleaner in the processes</Text>
                </MListItem>
                {step >= 7 && (
                  <MListItem {...toggleOpacity} custom="enter">
                    <Text textStyle="body1">Cleaner in the code</Text>
                  </MListItem>
                )}
              </List>
            )}
          </VStack>
        </Grid>
      )}
      <VStack spacing={8} alignItems="flex-start">
        {step >= 12 && (
          <MText textStyle="subHeading2" {...toggleOpacity} custom="enter">
            Strange interactions
          </MText>
        )}
        {step >= 13 && (
          <MList pl={8} spacing={8} {...toggleOpacity} custom="enter">
            <ListItem>
              <Text textStyle="body1">
                Team member could assume the role of the "leader", without
                permission of the creator
              </Text>
            </ListItem>
            <ListItem>
              <Text textStyle="body1">
                Teammate can make unauthorized changes
              </Text>
            </ListItem>
          </MList>
        )}
      </VStack>
      {step >= 8 && step <= 11 && (
        <MFlex
          position="absolute"
          h="100vh"
          w="100vw"
          top="0"
          left="0"
          bgColor="white"
          justifyContent="center"
          alignItems="center"
          {...toggleOpacity}
          custom="enter"
        >
          {step === 8 && (
            <VStack spacing={8}>
              <Text textStyle="heading2">Daniel's Request</Text>
              <CaptionImage
                src="withdraw/team me.png"
                h="384"
                w="683"
                caption="Added a team member"
              />
            </VStack>
          )}
          {step === 9 && (
            <Text textStyle="subHeading1">What if I withdraw?</Text>
          )}
          {step === 10 && (
            <VStack spacing={8}>
              <Text textStyle="heading2">My Request</Text>
              <CaptionImage
                src="withdraw/team me.png"
                h="384"
                w="683"
                caption="Editing withdrawn request"
              />
            </VStack>
          )}
          {step === 11 && (
            <VStack spacing={8}>
              <Text textStyle="heading2">My Request</Text>
              <CaptionImage
                src="withdraw/team daniel.png"
                h="384"
                w="683"
                caption="Code helps to assume Daniel automatically becomes a team member"
              />
            </VStack>
          )}
        </MFlex>
      )}
    </ContentSlide>
  )
}

const TeamWithdrawImplementation = ({ direction, step }) => {
  return (
    <ContentSlide
      direction={direction}
      layoutIdTitle="team"
      title="Should team members see withdraw button?"
    >
      <VStack spacing={8} alignItems="flex-start">
        <VStack spacing={8} alignItems="flex-start">
          <Text textStyle="subHeading2">Strange interactions</Text>
          <List pl={8} spacing={8}>
            <ListItem>
              <Text textStyle="body1">
                Team member could assume the role of the "leader", without
                permission of the creator
              </Text>
            </ListItem>
            <ListItem>
              <Text textStyle="body1">
                Teammate can make unauthorized changes
              </Text>
            </ListItem>
          </List>
        </VStack>
        <List spacing={8} pt={8}>
          {step >= 1 && (
            <MListItem {...toggleOpacity} custom="enter">
              <Text textStyle="body1">
                Team members are presented with a leave request button, to leave
                the request instead
              </Text>
            </MListItem>
          )}
          {step >= 2 && (
            <MListItem {...toggleOpacity} custom="enter">
              <Text textStyle="body1">
                Team members do not get partial "write" access
              </Text>
            </MListItem>
          )}
        </List>
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
  Worth,
  FinalImplementation,
  Tradeoffs,
  TeamAndPurge,
  TeamAndWithdraw,
  TeamWithdrawImplementation,
]
