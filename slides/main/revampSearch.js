// base components
import { Flex, Text } from "@chakra-ui/react"

// slide components
import ContentSlide from "../../components/ContentSlide"

// custom components
import CaptionImageFull from "../../components/CaptionImageFull"

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

export default [Prior]
