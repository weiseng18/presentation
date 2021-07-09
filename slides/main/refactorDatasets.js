// base components
import {
  List,
  Text,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  UnorderedList,
  VStack,
  withDefaultColorScheme,
} from "@chakra-ui/react"

import {
  MListItem,
  MTable,
  MTd,
  MText,
  MTr,
} from "../../components/MotionChakra"

// slide components
import ContentSlide from "../../components/ContentSlide"

import { toggleOpacity } from "../../animations"
import { useEffect, useState } from "react"

const Scope = ({ direction, step }) => {
  return (
    <ContentSlide
      direction={direction}
      title="Datasets refactoring"
      layoutIdTitle="refactor"
    >
      <UnorderedList spacing={8}>
        {step >= 1 && (
          <MListItem {...toggleOpacity} custom="enter">
            <Text textStyle="body1">Create Dataset class</Text>
          </MListItem>
        )}
        {step >= 2 && (
          <MListItem {...toggleOpacity} custom="enter">
            <Text textStyle="body1">Create Dataset subclasses</Text>
          </MListItem>
        )}
        {step >= 3 && (
          <MListItem {...toggleOpacity} custom="enter">
            <Text textStyle="body1">Replace existing controller functions</Text>
          </MListItem>
        )}
      </UnorderedList>
    </ContentSlide>
  )
}

const Context = ({ direction, step }) => {
  return (
    <ContentSlide direction={direction} title="Context">
      <List spacing={8}>
        {step >= 1 && (
          <MListItem {...toggleOpacity} custom="enter">
            <Text textStyle="body1">
              Gain access to datasets, if request is approved
            </Text>
          </MListItem>
        )}
        {step >= 2 && (
          <MListItem {...toggleOpacity} custom="enter">
            <Text textStyle="body1">All datasets are CSV files</Text>
          </MListItem>
        )}
        {step >= 3 && (
          <MListItem {...toggleOpacity} custom="enter">
            <Text textStyle="body1">PR to introduce</Text>
            <UnorderedList pl={4} mt={8} spacing={8}>
              {step >= 4 && (
                <MListItem {...toggleOpacity} custom="enter">
                  <Text textStyle="body1">Pre-approved datasets</Text>
                </MListItem>
              )}
              {step >= 5 && (
                <MListItem {...toggleOpacity} custom="enter">
                  <Text textStyle="body1">
                    Geospatial (KML, Shapefile, i.e. non-CSV) datasets
                  </Text>
                </MListItem>
              )}
            </UnorderedList>
          </MListItem>
        )}
      </List>
    </ContentSlide>
  )
}

const OnlyCSV = ({ direction, step }) => {
  return (
    <ContentSlide direction={direction} title="Datasets refactoring">
      <VStack spacing={8} alignItems="flex-start">
        {step >= 1 && (
          <MText textStyle="subHeading2" {...toggleOpacity} custom="enter">
            Vault only accepted CSV files
          </MText>
        )}
        <UnorderedList pl={4} mt={8} spacing={8}>
          {step >= 2 && (
            <MListItem {...toggleOpacity} custom="enter">
              <Text textStyle="body1">Cannot ingest into datastore</Text>
            </MListItem>
          )}
          {step >= 3 && (
            <MListItem {...toggleOpacity} custom="enter">
              <Text textStyle="body1">Current bucket data has TTL of 24h</Text>
            </MListItem>
          )}
          {step >= 4 && (
            <MListItem {...toggleOpacity} custom="enter">
              <Text textStyle="body1">
                In a request, we require users to specify what fields they want
              </Text>
            </MListItem>
          )}
          {step >= 5 && (
            <MListItem {...toggleOpacity} custom="enter">
              <Text textStyle="body1">
                In the dataset creation form, users can specify a data
                dictionary
              </Text>
            </MListItem>
          )}
          {step >= 6 && (
            <MListItem {...toggleOpacity} custom="enter">
              <Text textStyle="body1">
                CSV-specific validation, requirement rather than recommendation
              </Text>
            </MListItem>
          )}
        </UnorderedList>
      </VStack>
    </ContentSlide>
  )
}

const Cell = ({ t, animate }) => {
  // t for type
  if (t == "Y")
    return (
      <MTd animate={animate} border="none" bgColor="green.300">
        Y
      </MTd>
    )
  else if (t == "N")
    return (
      <MTd animate={animate} border="none" bgColor="red.300">
        N
      </MTd>
    )
  else
    return (
      <MTd animate={animate} border="none">
        {t}
      </MTd>
    )
}

const DatasetFlows = ({ direction, step }) => {
  const [opacity, setOpacity] = useState([1, 1, 1, 1, 1])

  useEffect(() => {
    document.addEventListener("keypress", (e) => {
      // e.code: DigitX
      const code = e.code
      if (code.length === 6 && code[5] == parseInt(code[5]))
        toggleCol(parseInt(code[5]), e.shiftKey)
    })
  }, [])

  /**
   *
   * @param {*} which digit 1-5, or 0
   * @param {*} shiftKey whether shiftKey was pressed or not
   */
  const toggleCol = (which, shiftKey) => {
    let arr
    if (which === 0) {
      arr = [1, 1, 1, 1, 1]
    }
    // if shift key was pressed, then add on, rather than toggle.
    else if (shiftKey) {
      // currently does not work
      // some strange react state thing
      arr = opacity
      arr[which - 1] = 1
    }
    // else, turn off everything else, and turn on current col
    else {
      arr = [0.1, 0.1, 0.1, 0.1, 0.1]
      arr[which - 1] = 1
    }
    setOpacity(arr)
  }

  return (
    <ContentSlide direction={direction} title="Dataset flows">
      {step >= 1 && (
        <MTable {...toggleOpacity} custom="enter">
          <Thead>
            <Tr>
              <Th w="25%" fontSize="sm">
                Flow
              </Th>
              <Th fontSize="sm" animate={{ opacity: opacity[0] }}>
                Ingested
              </Th>
              <Th fontSize="sm" animate={{ opacity: opacity[1] }}>
                Has Dataset
              </Th>
              <Th fontSize="sm" animate={{ opacity: opacity[2] }}>
                Has Sample
              </Th>
              <Th fontSize="sm" animate={{ opacity: opacity[3] }}>
                Needs Approval
              </Th>
              <Th w="15%" fontSize="sm" animate={{ opacity: opacity[4] }}>
                Categories
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Cell t="1 (Regular)" />
              <Cell animate={{ opacity: opacity[0] }} t="Y" />
              <Cell animate={{ opacity: opacity[1] }} t="Y" />
              <Cell animate={{ opacity: opacity[2] }} t="Y" />
              <Cell animate={{ opacity: opacity[3] }} t="Y" />
              <Cell animate={{ opacity: opacity[4] }} t="Not Geospatial" />
            </Tr>
            <Tr>
              <Cell t="2 (Confidential)" />
              <Cell animate={{ opacity: opacity[0] }} t="Y" />
              <Cell animate={{ opacity: opacity[1] }} t="Y" />
              <Cell animate={{ opacity: opacity[2] }} t="Y" />
              <Cell animate={{ opacity: opacity[3] }} t="Y" />
              <Cell animate={{ opacity: opacity[4] }} t="Not Geospatial" />
            </Tr>
            <Tr>
              <Cell t="3 (Metadata-Only)" />
              <Cell animate={{ opacity: opacity[0] }} t="N" />
              <Cell animate={{ opacity: opacity[1] }} t="N" />
              <Cell animate={{ opacity: opacity[2] }} t="N" />
              <Cell animate={{ opacity: opacity[3] }} t="Y" />
              <Cell animate={{ opacity: opacity[4] }} t="Any" />
            </Tr>
            {step >= 2 && (
              <MTr {...toggleOpacity} custom="enter">
                <Cell t="4 (Pre-Approved, non-CSV)" />
                <Cell animate={{ opacity: opacity[0] }} t="N" />
                <Cell animate={{ opacity: opacity[1] }} t="Y" />
                <Cell animate={{ opacity: opacity[2] }} t="N" />
                <Cell animate={{ opacity: opacity[3] }} t="N" />
                <Cell
                  animate={{ opacity: opacity[4] }}
                  t="Geospatial, Others"
                />
              </MTr>
            )}
            {step >= 3 && (
              <MTr {...toggleOpacity} custom="enter">
                <Cell t="5 (Pre-Approved, CSV)" />
                <Cell animate={{ opacity: opacity[0] }} t="Y" />
                <Cell animate={{ opacity: opacity[1] }} t="Y" />
                <Cell animate={{ opacity: opacity[2] }} t="Y" />
                <Cell animate={{ opacity: opacity[3] }} t="N" />
                <Cell
                  animate={{ opacity: opacity[4] }}
                  t="Not (Geospatial, Others)"
                />
              </MTr>
            )}
            {step >= 4 && (
              <MTr {...toggleOpacity} custom="enter">
                <Cell t="6 (Requires approval, non-CSV)" />
                <Cell animate={{ opacity: opacity[0] }} t="N" />
                <Cell animate={{ opacity: opacity[1] }} t="Y" />
                <Cell animate={{ opacity: opacity[2] }} t="N" />
                <Cell animate={{ opacity: opacity[3] }} t="Y" />
                <Cell animate={{ opacity: opacity[4] }} t="??" />
              </MTr>
            )}
          </Tbody>
        </MTable>
      )}
    </ContentSlide>
  )
}

export default [Scope, Context, OnlyCSV, DatasetFlows]
