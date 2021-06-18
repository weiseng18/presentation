import TitleSlide from "../../components/TitleSlide"

import Introduction from "./introduction"

const Title = ({ direction }) => {
  return (
    <TitleSlide
      direction={direction}
      title="My time here at OGP"
      subtitle="Tan Wei Seng"
    />
  )
}

const Final = ({ direction }) => {
  return (
    <TitleSlide
      direction={direction}
      title="The End"
      subtitle="Any questions?"
    />
  )
}

export default [Title, ...Introduction, Final]
