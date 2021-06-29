// base components
import { Flex, Text, UnorderedList } from "@chakra-ui/react"
import { MListItem } from "../../components/MotionChakra"

// slide components
import ContentSlide from "../../components/ContentSlide"

// custom components
import CaptionImageFull from "../../components/CaptionImageFull"
import CaptionImageTransition from "../../components/CaptionImageTransition"

import { toggleOpacity } from "../../animations"

const Prior = ({ direction, step }) => {
  return (
    <ContentSlide direction={direction} title="Finding datasets">
      <Text textStyle="body1">Users find datasets by:</Text>
      <Flex w="100%" justifyContent="space-around" alignItems="center" mt={8}>
        {step >= 1 && (
          <CaptionImageFull
            src="revamp search/view all.png"
            h="256"
            w="455"
            isFull={step == 1}
            caption="View all datasets"
          />
        )}
        {step >= 3 && (
          <CaptionImageFull
            src="revamp search/search modal.png"
            h="256"
            w="455"
            isFull={step == 3}
            adjust="-55%"
            caption="Search modal"
          />
        )}
        {step >= 5 && (
          <CaptionImageFull
            src="revamp search/search results.png"
            h="256"
            w="455"
            isFull={step == 5}
            adjust="-32%"
            caption="Search results"
          />
        )}
      </Flex>
    </ContentSlide>
  )
}

const Improvements = ({ direction, step }) => {
  return (
    <ContentSlide direction={direction} title="Potential improvements">
      {step == 1 && (
        <CaptionImageTransition
          src="revamp search/view all.png"
          h="512"
          w="910"
          caption="Too general"
          layoutId="viewAll_general"
        />
      )}
      {step == 3 && (
        <CaptionImageTransition
          src="revamp search/view all.png"
          h="512"
          w="910"
          caption="No sorting functionality"
          layoutId="viewAll_sort"
        />
      )}
      <UnorderedList spacing={8}>
        {step >= 2 && (
          <MListItem layoutId="viewAll_general" textStyle="body1">
            View all datasets is a bit too general, as it shows you everything
          </MListItem>
        )}
        {step >= 4 && (
          <MListItem layoutId="viewAll_sort" textStyle="body1">
            View all datasets has no sorting functionality. Default sort is by
            last updated, not apparent
          </MListItem>
        )}
        {step >= 5 && (
          <MListItem textStyle="body1" {...toggleOpacity} custom="enter">
            No direct way of remembering what you last viewed
          </MListItem>
        )}
        {step >= 6 && (
          <MListItem textStyle="body1" {...toggleOpacity} custom="enter">
            Other general improvements
          </MListItem>
        )}
      </UnorderedList>
    </ContentSlide>
  )
}

export default [Prior, Improvements]
