// base components
import { MText } from "../../components/MotionChakra"

// slide components
import TwoColSlide from "../../components/TwoColSlide"

import WithdrawRequest from "./withdrawRequest"
import RefactorDatasets from "./refactorDatasets"
import RevampSearch from "./revampSearch"

const WITHDRAW_REQUEST = 6
const REFACTOR_DATASETS = 17
const REVAMP_SEARCH = 29

const Title = ({ direction, step, jumpToSlide }) => {
  return (
    <TwoColSlide direction={direction} title="Vault">
      {step >= 1 && (
        <MText
          textStyle="body1"
          cursor="pointer"
          onClick={() => jumpToSlide(WITHDRAW_REQUEST)}
          animate={{ transform: `scale(${step === 4 ? 2 : 1})` }}
        >
          Withdraw request
        </MText>
      )}
      {step >= 2 && (
        <MText
          textStyle="body1"
          cursor="pointer"
          onClick={() => jumpToSlide(REFACTOR_DATASETS)}
          animate={{ transform: "scale(1)" }}
        >
          Datasets refactoring
        </MText>
      )}
      {step >= 3 && (
        <MText
          textStyle="body1"
          cursor="pointer"
          onClick={() => jumpToSlide(REVAMP_SEARCH)}
          animate={{ transform: "scale(1)" }}
        >
          Revamped search page
        </MText>
      )}
    </TwoColSlide>
  )
}

const TitleTwo = ({ direction, step, jumpToSlide }) => {
  return (
    <TwoColSlide direction={direction} title="Vault">
      <MText
        textStyle="body1"
        cursor="pointer"
        onClick={() => jumpToSlide(WITHDRAW_REQUEST)}
        animate={{ transform: "scale(1)" }}
      >
        Withdraw request
      </MText>
      <MText
        textStyle="body1"
        cursor="pointer"
        onClick={() => jumpToSlide(REFACTOR_DATASETS)}
        animate={{ transform: `scale(${step === 1 ? 2 : 1})` }}
        layoutId={step >= 1 && "refactor"}
      >
        Datasets refactoring
      </MText>
      <MText
        textStyle="body1"
        cursor="pointer"
        onClick={() => jumpToSlide(REVAMP_SEARCH)}
        animate={{ transform: "scale(1)" }}
      >
        Revamped search page
      </MText>
    </TwoColSlide>
  )
}

const TitleThree = ({ direction, step, jumpToSlide }) => {
  return (
    <TwoColSlide direction={direction} title="Vault">
      <MText
        textStyle="body1"
        cursor="pointer"
        onClick={() => jumpToSlide(WITHDRAW_REQUEST)}
        animate={{ transform: "scale(1)" }}
      >
        Withdraw request
      </MText>
      <MText
        textStyle="body1"
        cursor="pointer"
        onClick={() => jumpToSlide(REFACTOR_DATASETS)}
        animate={{ transform: "scale(1)" }}
      >
        Datasets refactoring
      </MText>
      <MText
        textStyle="body1"
        cursor="pointer"
        onClick={() => jumpToSlide(REVAMP_SEARCH)}
        animate={{ transform: `scale(${step === 1 ? 2 : 1})` }}
      >
        Revamped search page
      </MText>
    </TwoColSlide>
  )
}

export default [
  Title,
  ...WithdrawRequest,
  TitleTwo,
  ...RefactorDatasets,
  TitleThree,
  ...RevampSearch,
]
