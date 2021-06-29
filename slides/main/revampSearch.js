// base components
import { Flex, Text, List, UnorderedList } from "@chakra-ui/react"
import { MListItem } from "../../components/MotionChakra"

// slide components
import ContentSlide from "../../components/ContentSlide"

// custom components
import CaptionImageFull from "../../components/CaptionImageFull"
import CaptionImageTransition from "../../components/CaptionImageTransition"

import { useEffect, useState } from "react"
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
    <ContentSlide
      direction={direction}
      layoutIdTitle="improvements"
      title="Potential improvements"
    >
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
          <MListItem
            layoutId="viewAll_bookmark"
            textStyle="body1"
            {...toggleOpacity}
            custom="enter"
          >
            No direct way of remembering what you last viewed
          </MListItem>
        )}
        {step >= 6 && (
          <MListItem
            layoutId="viewAll_others"
            textStyle="body1"
            {...toggleOpacity}
            custom="enter"
          >
            Other general improvements
          </MListItem>
        )}
      </UnorderedList>
    </ContentSlide>
  )
}

const ActualFeatures = ({ direction, step }) => {
  const [opacity, setOpacity] = useState([1, 1, 1, 1])
  useEffect(() => {
    // prior to opacity toggle section
    if (step < 1) setOpacity([1, 1, 1, 1])
    else {
      if (step >= 11) setOpacity([0.2, 0.2, 0.2, 1])
      else if (step >= 8) setOpacity([0.2, 0.2, 1, 0.2])
      else if (step >= 5) setOpacity([0.2, 1, 0.2, 0.2])
      else setOpacity([1, 0.2, 0.2, 0.2])
    }
  }, [step])

  return (
    <ContentSlide
      direction={direction}
      layoutIdTitle="improvements"
      title="Actual features"
    >
      <List spacing={8}>
        <MListItem
          layoutId="viewAll_general"
          animate={{ opacity: opacity[0] }}
          textStyle="body1"
        >
          View all datasets is a bit too general, as it shows you everything
          {step < 5 && (
            <UnorderedList mt={8} spacing={8}>
              {step >= 2 && (
                <MListItem
                  ml={8}
                  textStyle="body1"
                  {...toggleOpacity}
                  custom="enter"
                >
                  Trending and Most downloaded sections
                </MListItem>
              )}
              {step >= 3 && (
                <MListItem
                  ml={8}
                  textStyle="body1"
                  {...toggleOpacity}
                  custom="enter"
                >
                  Filter by categories
                </MListItem>
              )}
              {step >= 4 && (
                <MListItem
                  ml={8}
                  textStyle="body1"
                  {...toggleOpacity}
                  custom="enter"
                >
                  Agency page
                </MListItem>
              )}
            </UnorderedList>
          )}
        </MListItem>
        <MListItem
          layoutId="viewAll_sort"
          animate={{ opacity: opacity[1] }}
          textStyle="body1"
        >
          View all datasets has no sorting functionality. Default sort is by
          last updated, not apparent
          {step < 8 && (
            <UnorderedList mt={8} spacing={8}>
              {step >= 6 && (
                <MListItem
                  ml={8}
                  textStyle="body1"
                  {...toggleOpacity}
                  custom="enter"
                >
                  View all, sorted by trending or most downloads
                </MListItem>
              )}
              {step >= 7 && (
                <MListItem
                  ml={8}
                  textStyle="body1"
                  {...toggleOpacity}
                  custom="enter"
                >
                  Search results can be sorted by last updated, most views, A to
                  Z, Z to A, etc.
                </MListItem>
              )}
            </UnorderedList>
          )}
        </MListItem>
        <MListItem
          layoutId="viewAll_bookmark"
          textStyle="body1"
          animate={{ opacity: opacity[2] }}
        >
          No direct way of remembering what you last viewed
          {step < 11 && (
            <UnorderedList mt={8} spacing={8}>
              {step >= 9 && (
                <MListItem
                  ml={8}
                  textStyle="body1"
                  {...toggleOpacity}
                  custom="enter"
                >
                  Bookmark functionality
                </MListItem>
              )}
              {step >= 10 && (
                <MListItem
                  ml={8}
                  textStyle="body1"
                  {...toggleOpacity}
                  custom="enter"
                >
                  Show user their previous searches/views
                </MListItem>
              )}
            </UnorderedList>
          )}
        </MListItem>
        <MListItem
          layoutId="viewAll_others"
          textStyle="body1"
          animate={{ opacity: opacity[3] }}
        >
          Other general improvements
          {step < 14 && (
            <UnorderedList mt={8} spacing={8}>
              {step >= 12 && (
                <MListItem
                  ml={8}
                  textStyle="body1"
                  {...toggleOpacity}
                  custom="enter"
                >
                  Wrote search page in Chakra UI
                </MListItem>
              )}
              {step >= 13 && (
                <MListItem
                  ml={8}
                  textStyle="body1"
                  {...toggleOpacity}
                  custom="enter"
                >
                  Skeleton loading states
                </MListItem>
              )}
            </UnorderedList>
          )}
        </MListItem>
      </List>
    </ContentSlide>
  )
}

export default [Prior, Improvements, ActualFeatures]
