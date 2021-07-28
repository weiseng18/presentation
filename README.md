# presentation

Slides for my end-of-internship presentation at [Open Government Products](https://www.open.gov.sg/).

## How to view my slides

- Clone the repo
- Go to the `ogp` branch
- Run `npm install`
- Run `npm run dev`
- Go to `localhost:3000/slides` in your browser
- Click into the browser window to focus

## Keybinds

- Press `a` or `d` to move left or right
- Press `e` to go to the final slide
- Press `t` to bring up the dataset table (can be done at any slide)
- When on dataset table, press `1-5` to only show the 1st to 5th columns, hiding the rest
- When on dataset table, press `Shift + 1-5` to show the 1st to 5th column, in addition to whatever is shown
- When on dataset table, press `0` to show all columns

## How stuff works

#### Individual slides

- Each slide is its own custom component
- Slides are grouped nicely within `slides/main/`
- An array of components is passed into `slides.js`

#### `slides.js`

- Receives an array of slides
- constant `STEP_MAX` is an array, `STEP_MAX[i]` is the number of steps a slide `i-1` has
