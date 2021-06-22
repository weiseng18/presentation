// base components
import { MText } from "../../components/MotionChakra"

// slide components
import TwoColSlide from "../../components/TwoColSlide"

import WithdrawRequest from "./withdrawRequest"

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
          Revamped search page
        </MText>
      )}
      {step >= 3 && (
        <MText textStyle="body1" animate={{ transform: "scale(1)" }}>
          Pre-approved datasets
        </MText>
      )}
    </TwoColSlide>
  )
}
export default [Title, ...WithdrawRequest]
