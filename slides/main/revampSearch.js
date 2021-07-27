// base components
import {
  Flex,
  Text,
  List,
  UnorderedList,
  VStack,
  AspectRatio,
} from "@chakra-ui/react"
import { MListItem } from "../../components/MotionChakra"

// slide components
import ContentSlide from "../../components/ContentSlide"

// custom components
import CaptionImage from "../../components/CaptionImage"
import CaptionImageFull from "../../components/CaptionImageFull"
import CaptionImageTransition from "../../components/CaptionImageTransition"

// syntax highlighting
import SyntaxHighlighter from "react-syntax-highlighter"
import { vs2015 } from "react-syntax-highlighter/dist/cjs/styles/hljs"

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
        {step >= 2 && step !== 3 && (
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

const ChakraSlide = ({ direction, step }) => {
  return (
    <ContentSlide direction={direction} title="Chakra UI">
      <UnorderedList spacing={8}>
        {step >= 1 && (
          <MListItem textStyle="body1" {...toggleOpacity} custom="enter">
            Chakra components are very functional
          </MListItem>
        )}
        {step >= 2 && (
          <MListItem textStyle="body1" {...toggleOpacity} custom="enter">
            Chakra is very suitable for OGP products
          </MListItem>
        )}
        {step >= 3 && (
          <MListItem textStyle="body1" {...toggleOpacity} custom="enter">
            Chakra allows you to define a theme file
          </MListItem>
        )}
        {step >= 4 && (
          <MListItem textStyle="body1" {...toggleOpacity} custom="enter">
            Inline CSS-in-JS made the workflow more seamless
          </MListItem>
        )}
      </UnorderedList>
    </ContentSlide>
  )
}

const Issues = ({ direction, step }) => {
  const [code, setCode] = useState("")
  const [showCode, setShowCode] = useState(false)

  const [images, setImages] = useState([])

  const setImagesHelper = (imagesInfo) => {
    // add fixed prepend
    imagesInfo.forEach((one) => {
      one.src = "revamp search/" + one.src
    })
    setImages(imagesInfo)
  }

  const clearQueue = () => {
    setImages([])
  }

  // controls the images and code
  useEffect(() => {
    switch (step) {
      case 1:
        setImagesHelper([
          {
            src: "bugs/1 title too long.png",
            caption: "Dataset title too long",
          },
        ])
        setShowCode(true)
        setCode('<Text textStyle="subHeading1">\n  {title}\n</Text>')
        break
      case 2:
        setImagesHelper([
          {
            src: "fixes/1a.png",
            caption: "noOfLines",
          },
        ])
        setShowCode(true)
        setCode(
          '<Text noOfLines={2} textStyle="subHeading1">\n  {title}\n</Text>'
        )
        break
      case 3:
        setImagesHelper([
          {
            src: "fixes/1a.png",
            caption: "noOfLines",
          },
          {
            src: "fixes/1b.png",
            caption: "compare scrollHeight and clientHeight",
          },
        ])
        setShowCode(true)
        setCode(
          'const titleRef = React.useRef()\n\nuseEffect(() => {\n  /* only show tooltip if the dataset title is truncated */\n  const scrollHeight = titleRef.current.scrollHeight\n  const clientHeight = titleRef.current.clientHeight\n  if (scrollHeight !== clientHeight) setTruncatedTitle(true)\n}, [titleRef.current])\n\n{truncatedTitle ? (\n  <Tooltip label={title}>\n    <Text noOfLines={2} ref={titleRef} textStyle="subHeading1">\n      {title}\n    </Text>\n  </Tooltip>\n) : (\n  <Text noOfLines={2} ref={titleRef} textStyle="subHeading1">\n    {title}\n  </Text>\n)}'
        )
        break
      case 4:
        setImagesHelper([
          {
            src: "bugs/2 agency name too long.png",
            caption: "Agency name too long",
          },
        ])
        setShowCode(true)
        setCode('<Text textStyle="subHeading1">\n  {agencyName}\n</Text>')
        break
      case 5:
        setImagesHelper([
          {
            src: "fixes/2a.png",
            caption: "noOfLines and abbreviation",
          },
        ])
        setShowCode(true)
        setCode(
          '<Text noOfLines={1} textStyle="subHeading1">\n  {agencyDisplay}\n</Text>'
        )
        break
      case 6:
        setImagesHelper([
          {
            src: "fixes/2a.png",
            caption: "noOfLines",
          },
          {
            src: "fixes/2b.png",
            caption: "compare scrollHeight and clientHeight",
          },
        ])
        setShowCode(true)
        setCode(
          'const agencyRef = React.useRef()\n\nuseEffect(() => {\n  /* only show tooltip if the agency name is truncated */\n  const scrollHeight = agencyRef.current.scrollHeight\n  const clientHeight = agencyRef.current.clientHeight\n  if (scrollHeight !== clientHeight) setTruncatedAgency(true)\n}, [agencyRef.current])\n\n{trunactedAgency ? (\n  <Tooltip label={agencyDisplay}>\n    <Text noOfLines={1} ref={agencyRef} textStyle="subHeading3">\n      {agencyDisplay}\n    </Text>\n  </Tooltip>\n) : (\n  <Text noOfLines={1} ref={agencyRef} textStyle="subHeading3">\n    {agencyDisplay}\n  </Text>\n)}'
        )
        break
      case 7:
        setImagesHelper([
          {
            src: "bugs/3 overlapping titles.png",
            caption: "Overlapping titles",
            h: "300",
          },
        ])
        setShowCode(true)
        setCode('<Text textStyle="subHeading1">\n  {title}\n</Text>')
        break
      case 8:
        setImagesHelper([
          {
            src: "fixes/3.png",
            caption: "Set a fixed width",
          },
        ])
        setShowCode(true)
        setCode('<Text textStyle="subHeading1" w="100%">\n  {title}\n</Text>')
        break
      case 10:
        setShowCode(true)
        setCode(
          'const BackToTopButton = (props) => {\n  /**\n   * 24px is the width/height excluding padding of 12px in all directions\n   *\n   * 32px is the y-distance to the top of the footer\n   */\n  return (\n    <Box\n      float="right"\n      position="sticky"\n      h="24px"\n      w="24px"\n      right="32px"\n      bottom="32px"\n      cursor="pointer"\n      p="12px"\n      bg="neutral.100"\n      borderRadius="100px"\n      onClick={() => {\n        window.scrollTo({\n          top: 0,\n          left: 0,\n          behavior: \'smooth\',\n        })\n      }}\n      {...props}\n    >\n      <ChakraIcon type="arrowUp" boxSize="24px" margin="0" color="neutral.700" />\n    </Box>\n  )\n}\n'
        )
        break
      default:
        clearQueue()
        setShowCode(false)
    }
  }, [step])

  return (
    <ContentSlide direction={direction} title="Issues faced">
      {step === 0 && (
        <Text textStyle="body1">
          I encountered my fair share of issues while working on the UI
        </Text>
      )}
      {step >= 1 && (
        <Flex
          position="absolute"
          h="100vh"
          w="100vw"
          top="0"
          left="0"
          justifyContent="space-around"
          alignItems="center"
          bgColor="white"
        >
          {step <= 8 && (
            <VStack spacing={8}>
              {images &&
                images.length &&
                images.map((one) => (
                  <CaptionImage
                    src={one.src}
                    caption={one.caption}
                    h={one.h || 512 / images.length}
                  />
                ))}
            </VStack>
          )}
          {showCode && (
            <SyntaxHighlighter
              language="javascript"
              style={vs2015}
              showLineNumbers
            >
              {code}
            </SyntaxHighlighter>
          )}
          {step === 9 && (
            <Text textStyle="subHeading1">Back to top button</Text>
          )}
        </Flex>
      )}
    </ContentSlide>
  )
}

export default [Prior, Improvements, ActualFeatures, ChakraSlide, Issues]
