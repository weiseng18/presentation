import { Text, UnorderedList } from "@chakra-ui/react"
import { MHStack, MListItem, MText } from "../../components/MotionChakra"

import ContentSlide from "../../components/ContentSlide"

import { toggleOpacity } from "../../animations"

const BeforeOGP = ({ direction, step }) => {
  return (
    <ContentSlide direction={direction} title="Before OGP">
      <UnorderedList spacing={8}>
        {step >= 1 && (
          <MListItem {...toggleOpacity} custom="enter">
            <MText textStyle="body1" fontWeight="600" mb={8}>
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
            <Text textStyle="body1" fontWeight="600">
              2 years of National Service
            </Text>
          </MListItem>
        )}
        {step >= 5 && (
          <MListItem {...toggleOpacity} custom="enter">
            <Text textStyle="body1" fontWeight="600">
              OGP
            </Text>
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
            <Text textStyle="body1" fontWeight="600">
              C++
            </Text>
            <Text textStyle="body1" mt={4}>
              National Olympiad of Informatics (NOI)
            </Text>
          </MListItem>
        )}
        {step >= 2 && (
          <MListItem {...toggleOpacity} custom="enter">
            <Text textStyle="body1" fontWeight="600">
              Python
            </Text>
            <Text textStyle="body1" mt={4}>
              H2 Computing
            </Text>
          </MListItem>
        )}
        {step >= 3 && (
          <MListItem {...toggleOpacity} custom="enter">
            <Text textStyle="body1" fontWeight="600">
              HTML/CSS/JS
            </Text>
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

export default [BeforeOGP, ProgrammingBackground]
