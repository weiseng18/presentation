// base components
import { Grid, List, Text, UnorderedList, VStack } from "@chakra-ui/react"

import { MFlex, MListItem, MTd, MText } from "../../components/MotionChakra"

// slide components
import ContentSlide from "../../components/ContentSlide"

// syntax highlighting
import SyntaxHighlighter from "react-syntax-highlighter"
import { vs2015 } from "react-syntax-highlighter/dist/cjs/styles/hljs"

import { toggleOpacity } from "../../animations"
import DatasetTable from "../../components/custom/DatasetTable"

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
  return (
    <ContentSlide direction={direction} title="Dataset flows">
      {step >= 1 && <DatasetTable step={step} />}
      {step === 5 && (
        <MFlex
          position="absolute"
          h="100vh"
          w="100vw"
          p={8}
          top="0"
          left="0"
          bgColor="white"
          justifyContent="center"
          {...toggleOpacity}
          custom="enter"
        >
          <SyntaxHighlighter
            language="javascript"
            style={vs2015}
            showLineNumbers
          >
            {
              "export const validateDataset = async (req: Request, res: Response, next: NextFunction) => {\n  try {\n    // Middleware for validation\n    // Validate req.body against the DataSchema\n    // including nested validation of data_dictionary\n    const validRequestBody = ajv.validate(DatasetSchema, req.body)\n    if (!validRequestBody) {\n      const err = ajv.errorsText(ajv.errors)\n      if (err.includes(MAX_COMBINED_LENGTH_KEYWORD)) {\n        throw new Error('Data dictionary is too large. Please reduce the number of columns.')\n      }\n      throw new Error(err)\n    }\n\n    const datasetId = req.params.id\n    const currentDataset = await Dataset.findByPk(datasetId)\n    if (currentDataset.dataset_state === undefined) throw new Error('Invalid Dataset')\n\n    if (currentDataset.dataset_state.source_agency !== req.body.source_agency)\n      throw new Error('Cannot change source agency')\n\n    // If dataset is Geospace or metadata-only, skip validation/ingestion checks\n    if (req.body.domain === 'Geospatial') {\n      const externalUrl = req.body.external_url\n      if (!externalUrl || externalUrl.length === 0) {\n        throw new Error(`external_url required for geospace dataset`)\n      }\n      if (!isValidExternalUrl(externalUrl)) {\n        throw new Error(`An invalid external_url ${externalUrl} was provided.`)\n      }\n\n      return next()\n    }\n    if (req.body.isMetadataOnly === true) {\n      return next()\n    }\n\n    // If new file uploaded check file validation exists and completed\n    if (req.body.newFileUploaded) {\n      const latestValidation = await ValidationService.getLatestValidation(datasetId)\n      if (latestValidation === undefined) throw new Error('Validation does not exist')\n      if (latestValidation.status !== ValidationStatus.Completed) throw new Error('Validation not completed')\n\n      //Ensure that dictionary matches length of current dictionary\n      if (req.body.data_dictionary.length !== currentDataset.dataset_state.data_dictionary.length) {\n        throw new Error('Invalid number of entries in data dictionary')\n      }\n    }\n\n    // Check if there is an existing ingestion running\n    const latestIngestion = await Dataset.getLatestIngestion(datasetId)\n    if (latestIngestion && latestIngestion.status === IngestionStatus.RUNNING) {\n      // Safety check to allow reingestion after 30 mins (in case of hung / disconnected ingestion)\n      const diffInMins = (new Date().valueOf() - latestIngestion.created_at.valueOf()) / 1000 / 60\n      if (diffInMins < 30) {\n        throw new Error(`Please wait for previous ingestion to complete before making new changes`)\n      }\n    }\n    next()\n  } catch (err) {\n    next(new HttpException(400, `Error saving dataset. ${err.message}`))\n  }\n}"
            }
          </SyntaxHighlighter>
        </MFlex>
      )}
    </ContentSlide>
  )
}

const Aim = ({ direction, step }) => {
  return (
    <ContentSlide direction={direction} title="Aim">
      <UnorderedList spacing={8}>
        {step >= 1 && (
          <MListItem {...toggleOpacity} custom="enter">
            <Text textStyle="body1">Create Dataset class/subclasses</Text>
          </MListItem>
        )}
        {step >= 2 && (
          <MListItem {...toggleOpacity} custom="enter">
            <Text textStyle="body1">
              Controller functions can focus on high-level logic
            </Text>
          </MListItem>
        )}
        {step >= 3 && (
          <MListItem {...toggleOpacity} custom="enter">
            <Text textStyle="body1">Code logic is easier to follow</Text>
          </MListItem>
        )}
      </UnorderedList>
    </ContentSlide>
  )
}

const GeneralApproach = ({ direction, step }) => {
  return (
    <ContentSlide direction={direction} title="General Approach">
      <Grid w="100%" templateColumns="repeat(2, 1fr)" gap={24} mt={4}>
        <VStack spacing={8} alignItems="flex-start">
          {step >= 1 && (
            <MText textStyle="subHeading2" {...toggleOpacity} custom="enter">
              MetadataOnlyDataset, IngestedDataset, NonIngestedDataset
            </MText>
          )}
          <UnorderedList pl={4} mt={8} spacing={8}>
            {step >= 2 && (
              <MListItem {...toggleOpacity} custom="enter">
                <Text textStyle="body1">Stored in datastore, or S3</Text>
              </MListItem>
            )}
            {step >= 3 && (
              <MListItem {...toggleOpacity} custom="enter">
                <Text textStyle="body1">Validate or not</Text>
              </MListItem>
            )}
            {step >= 4 && (
              <MListItem {...toggleOpacity} custom="enter">
                <Text textStyle="body1">Can apply a subset</Text>
              </MListItem>
            )}
            {step >= 5 && (
              <MListItem {...toggleOpacity} custom="enter">
                <Text textStyle="body1">Can append</Text>
              </MListItem>
            )}
          </UnorderedList>
        </VStack>
        <VStack spacing={8} alignItems="flex-start">
          {step >= 6 && (
            <MText textStyle="subHeading2" {...toggleOpacity} custom="enter">
              Pre-approved or not
            </MText>
          )}
          <UnorderedList pl={4} mt={8} spacing={8}>
            {step >= 7 && (
              <MListItem {...toggleOpacity} custom="enter">
                <Text textStyle="body1">Dataset should not be requested</Text>
              </MListItem>
            )}
            {step >= 8 && (
              <MListItem {...toggleOpacity} custom="enter">
                <Text textStyle="body1">
                  Should not download non-pre-approved directly
                </Text>
              </MListItem>
            )}
          </UnorderedList>
        </VStack>
      </Grid>
    </ContentSlide>
  )
}

export default [Scope, Context, OnlyCSV, DatasetFlows, Aim, GeneralApproach]
