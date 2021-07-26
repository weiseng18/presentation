// base components
import { Text, UnorderedList } from "@chakra-ui/react"

import { MListItem } from "../../components/MotionChakra"

// slide components
import ContentSlide from "../../components/ContentSlide"

import { toggleOpacity } from "../../animations"

const Conclusion = ({ direction, step }) => {
  return (
    <ContentSlide direction={direction} title="Conclusion">
      <UnorderedList spacing={8}>
        {step >= 1 && (
          <MListItem {...toggleOpacity} custom="enter">
            <Text textStyle="body1">Rewarding experience</Text>
          </MListItem>
        )}
        {step >= 2 && (
          <MListItem {...toggleOpacity} custom="enter">
            <Text textStyle="body1">First internship/job</Text>
          </MListItem>
        )}
        {step >= 3 && (
          <MListItem {...toggleOpacity} custom="enter">
            <Text textStyle="body1">Only worked on static pages</Text>
          </MListItem>
        )}
      </UnorderedList>
    </ContentSlide>
  )
}

export default [Conclusion]
