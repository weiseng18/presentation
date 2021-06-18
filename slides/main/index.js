import TitleSlide from "../../components/TitleSlide"

const Title = ({ direction }) => {
  return (
    <TitleSlide
      direction={direction}
      title="web-slides"
      subtitle="simple framework for web presentation"
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

export default [Title, Final]
