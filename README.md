
## Available Scripts

To run the application:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Accessing a running version


## Tech Test Notes

I've used "boostrap" and "moment" for ease of formatting/styling - probably a little overkill for this application

I've not attemped to add paging, although I see it is available in the API

Within React, Ive used "componentDidMount" and "componentDidUpdate" - I'm conscious these are being depracated in the latest versions of React but my recent experience with React is and older version, so for the sake of speed and familiarity (being confident of what I'm producting) I've used these old methods.  I know the preferred way is now to use hooks but it's not something I've used in anger enough to use it here with any confidence.

I've not concentrating too much on styling, except making it responsive and some basic button/form treatment.

I've added a couple of basic unit tests using Jest, one testing the App title to ensure the page is rendered, the other to check the user search form is rendered independently. Expanding the tests, given more time, would include adding tests for those components that require props to be passed to "mock" api calls to than allow the component to render (without needing to call the "real" api).

