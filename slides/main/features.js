// base components
import { MText } from "../../components/MotionChakra"

// slide components
import TwoColSlide from "../../components/TwoColSlide"

import WithdrawRequest from "./withdrawRequest"
import RefactorDatasets from "./refactorDatasets"
import RevampSearch from "./revampSearch"

const Title = ({ direction, step }) => {
  return (
    <TwoColSlide direction={direction} title="Vault">
      {step >= 1 && (
        <MText
          textStyle="body1"
          animate={{ transform: `scale(${step === 4 ? 2 : 1})` }}
        >
          Withdraw request
        </MText>
      )}
      {step >= 2 && (
        <MText textStyle="body1" animate={{ transform: "scale(1)" }}>
          Datasets refactoring
        </MText>
      )}
      {step >= 3 && (
        <MText textStyle="body1" animate={{ transform: "scale(1)" }}>
          Revamped search page
        </MText>
      )}
    </TwoColSlide>
  )
}

const TitleTwo = ({ direction, step }) => {
  return (
    <TwoColSlide direction={direction} title="Vault">
      <MText textStyle="body1" animate={{ transform: "scale(1)" }}>
        Withdraw request
      </MText>
      <MText
        textStyle="body1"
        animate={{ transform: `scale(${step === 1 ? 2 : 1})` }}
        layoutId={step >= 1 && "refactor"}
      >
        Datasets refactoring
      </MText>
      <MText textStyle="body1" animate={{ transform: "scale(1)" }}>
        Revamped search page
      </MText>
    </TwoColSlide>
  )
}

const TitleThree = ({ direction, step }) => {
  return (
    <TwoColSlide direction={direction} title="Vault">
      <MText textStyle="body1" animate={{ transform: "scale(1)" }}>
        Withdraw request
      </MText>
      <MText textStyle="body1" animate={{ transform: "scale(1)" }}>
        Datasets refactoring
      </MText>
      <MText
        textStyle="body1"
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
