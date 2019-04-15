This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## About Langly

Langly is a tool intended for language learners and more generally online readers. The app allows users to submit the url for an article or text based web page, and then returns the formatted title and content of the text along with a cumulative readability score. The score is based on several known readability algorithms, listed in the [Flask Microservice README doc](https://github.com/NickFriedland/langly-flask-ms/blob/master/README.md).

## Planned Future Functionality

The app is a work in progress, and functionality that is being built or is planned includes:
* Allowing users to submit foreign language articles
* Allowing users to click on a word in the formatted article to highlight it and pull up a tool tip containing the definition of the word
* Allowing users to then save highlighted words to a vocab list at the bottom of the article
* Allowing users to turn words from their saved list into flashcards to be reviewed later
* Allowing users to categorize flash cards with category tags
* Allowing users to create accounts to save history of articles submitted, words saved, and flashcards created

## Getting Started

The app is split into three separate repos on Github: 
1. **React Front End**
2. [Node/Express Back End](https://github.com/NickFriedland/langly-express-be)
3. [Flask Microservice](https://github.com/NickFriedland/langly-flask-ms)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
