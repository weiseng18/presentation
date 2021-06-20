// base components
import { Text, UnorderedList } from "@chakra-ui/layout"
import { MListItem } from "../../components/MotionChakra"

// slide components
import ContentSlide from "../../components/ContentSlide"

import { toggleOpacity } from "../../animations"

const Title = ({ direction, step }) => {
  return (
    <ContentSlide
      direction={direction}
      title="Withdraw Request"
      layoutIdTitle="withdrawRequest"
    >
      <UnorderedList spacing={8}>
        {step >= 1 && (
          <MListItem {...toggleOpacity} custom="enter">
            <Text textStyle="body1">
              Request for dataset by submitting form
            </Text>
          </MListItem>
        )}
        {step >= 2 && (
          <MListItem {...toggleOpacity} custom="enter">
            <Text textStyle="body1">
              Endorsed by an admin from their organization
            </Text>
          </MListItem>
        )}
        {step >= 3 && (
          <MListItem {...toggleOpacity} custom="enter">
            <Text textStyle="body1">Approved by dataset owner</Text>
          </MListItem>
        )}
      </UnorderedList>
    </ContentSlide>
  )
}

export default [Title]
