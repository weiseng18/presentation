const changeSlide = {
  initial: "enter",
  animate: "center",
  exit: "exit",
  transition: {
    x: {
      type: 'spring',
      stiffness: 300,
      damping: 30,
    },
    opacity: {
      duration: 0.2
    }
  },
  variants: {
    enter: (direction) => {
      return {
        x: direction > 0 ? -1500 : 1500,
        opacity: 0
      }
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? -1500 : 1500,
        opacity: 0
      }
    }
  }
}

const toggleOpacity = {
  initial: "start",
  animate: "end",
  variants: {
    start: (action) => {
      return {
        opacity: action === 'exit' ? 1 : 0
      }
    },
    end: (action) => {
      return {
        opacity: action === 'exit' ? 0 : 1
      }
    },
  }
}

export {
  changeSlide,
  toggleOpacity
}