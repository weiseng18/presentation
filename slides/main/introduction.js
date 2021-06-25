// base components
import {
  Flex,
  Grid,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react"
import {
  MHStack,
  MListItem,
  MText,
  MVStack,
} from "../../components/MotionChakra"

// slide components
import ContentSlide from "../../components/ContentSlide"

// custom components
import CaptionImageFull from "../../components/CaptionImageFull"

import { toggleOpacity } from "../../animations"

const BeforeOGP = ({ direction, step }) => {
  return (
    <ContentSlide direction={direction} title="Before OGP">
      <UnorderedList spacing={8}>
        {step >= 1 && (
          <MListItem {...toggleOpacity} custom="enter">
            <MText textStyle="subHeading2" mb={8}>
              A Levels @ Hwa Chong Institution:{" "}
            </MText>
            {step >= 2 && (
              <MHStack {...toggleOpacity} custom="enter" spacing={8}>
                <Text textStyle="body1">H2 Math</Text>
                <Text textStyle="body1">H2 Further Math</Text>
                <Text textStyle="body1">H2 Computing</Text>
                <Text textStyle="body1">H2 German</Text>
                <Text textStyle="body1">H3 Math</Text>
              </MHStack>
            )}
            {step >= 3 && (
              <MText {...toggleOpacity} custom="enter" textStyle="body1">
                Infocomm & Robotics Society (IRS)
              </MText>
            )}
          </MListItem>
        )}
        {step >= 4 && (
          <MListItem {...toggleOpacity} custom="enter">
            <Text textStyle="subHeading2">2 years of National Service</Text>
          </MListItem>
        )}
        {step >= 5 && (
          <MListItem {...toggleOpacity} custom="enter">
            <Text textStyle="subHeading2">OGP</Text>
          </MListItem>
        )}
      </UnorderedList>
    </ContentSlide>
  )
}

const ProgrammingBackground = ({ direction, step }) => {
  return (
    <ContentSlide direction={direction} title="Programming">
      <UnorderedList spacing={8}>
        {step >= 1 && (
          <MListItem {...toggleOpacity} custom="enter">
            <Text textStyle="subHeading2">C++</Text>
            <Text textStyle="body1" mt={4}>
              National Olympiad of Informatics (NOI)
            </Text>
          </MListItem>
        )}
        {step >= 2 && (
          <MListItem {...toggleOpacity} custom="enter">
            <Text textStyle="subHeading2">Python</Text>
            <Text textStyle="body1" mt={4}>
              H2 Computing
            </Text>
          </MListItem>
        )}
        {step >= 3 && (
          <MListItem {...toggleOpacity} custom="enter">
            <Text textStyle="subHeading2">HTML/CSS/JS</Text>
            <Text textStyle="body1" mt={4}>
              Lower Sec Infocomm lessons
            </Text>
            <Text textStyle="body1" mt={4}>
              Exploration
            </Text>
          </MListItem>
        )}
      </UnorderedList>
    </ContentSlide>
  )
}

const StaticPages = ({ direction, step }) => {
  return (
    <ContentSlide direction={direction} title="HTML/CSS/JS">
      <Text textStyle="body1">
        Static, single-page websites, made with vanilla JS, for solo projects
      </Text>
      <Flex w="100%" justifyContent="space-around" alignItems="center" mt={8}>
        {step >= 1 && (
          <CaptionImageFull
            src="pixelart.png"
            h="256"
            w="455"
            isFull={step == 1}
            caption="pixelart editor"
          />
        )}
        {step >= 3 && (
          <CaptionImageFull
            src="maze.png"
            h="256"
            w="455"
            isFull={step == 3}
            adjust="-30%"
            caption="maze generated by Prim's algorithm"
          />
        )}
      </Flex>
    </ContentSlide>
  )
}

const OverallLearnings = ({ direction, step }) => {
  return (
    <ContentSlide direction={direction} title="Knowledge acquired">
      <VStack w="100%" spacing={8}>
        <Grid w="100%" templateColumns="repeat(4, 1fr)" gap={8} mt={4}>
          {step >= 1 && (
            <MVStack
              {...toggleOpacity}
              custom="enter"
              spacing={8}
              h="100%"
              alignItems="flex-start"
            >
              <Text textStyle="subHeading2">Frontend</Text>
              <UnorderedList spacing={8} mt={8}>
                <ListItem>
                  <Text>React.js</Text>
                </ListItem>
                <ListItem>
                  <Text>Next.js</Text>
                </ListItem>
                <ListItem>
                  <Text>Chakra UI</Text>
                </ListItem>
              </UnorderedList>
            </MVStack>
          )}
          {step >= 2 && (
            <MVStack
              {...toggleOpacity}
              custom="enter"
              spacing={8}
              h="100%"
              alignItems="flex-start"
            >
              <Text textStyle="subHeading2">Backend</Text>
              <UnorderedList spacing={8} mt={8}>
                <ListItem>
                  <Text>Node.js</Text>
                </ListItem>
                <ListItem>
                  <Text>Express.js</Text>
                </ListItem>
              </UnorderedList>
            </MVStack>
          )}
          {step >= 3 && (
            <MVStack
              {...toggleOpacity}
              custom="enter"
              spacing={8}
              h="100%"
              alignItems="flex-start"
            >
              <Text textStyle="subHeading2">AWS</Text>
              <UnorderedList spacing={8} mt={8}>
                <ListItem>
                  <Text>S3</Text>
                </ListItem>
                <ListItem>
                  <Text>Cloudwatch</Text>
                </ListItem>
                <ListItem>
                  <Text>Elastic Beanstalk</Text>
                </ListItem>
              </UnorderedList>
            </MVStack>
          )}
          {step >= 4 && (
            <MVStack
              {...toggleOpacity}
              custom="enter"
              spacing={8}
              h="100%"
              alignItems="flex-start"
            >
              <Text textStyle="subHeading2">Working in a team</Text>
              <UnorderedList spacing={8} mt={8}>
                <ListItem>
                  <Text>Dealing with code created by not just me</Text>
                </ListItem>
                <ListItem>
                  <Text>Writing code for not just me</Text>
                </ListItem>
                <ListItem>
                  <Text>Coding practices</Text>
                </ListItem>
                <ListItem>
                  <Text>Active communication with the team</Text>
                </ListItem>
              </UnorderedList>
            </MVStack>
          )}
        </Grid>
        {step >= 5 && (
          <MText
            {...toggleOpacity}
            custom="enter"
            textStyle="subHeading1"
            mt={8}
          >
            and so much more
          </MText>
        )}
      </VStack>
    </ContentSlide>
  )
}

export default [BeforeOGP, ProgrammingBackground, StaticPages, OverallLearnings]
