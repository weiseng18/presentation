// base components
import { List, Text, UnorderedList } from "@chakra-ui/react"

import { MListItem } from "../../components/MotionChakra"

// slide components
import ContentSlide from "../../components/ContentSlide"

import { toggleOpacity } from "../../animations"

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

export default [Scope, Context]
