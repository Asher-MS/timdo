<!-- # Getting Started with Create React App

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

<!-- ### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) -->

<p align="center">
<img src="public/assets/Capture-removebg-preview.png"></img>
</p>
<p align="center">
<img src="public/assets/tagline.png" width=600 height=60/>
</p>

- Timdo is an web-app that helps the user to organise and make full use of his/her study time.
- Timdo is basically a timer app that helps you organise your study times.
- It also has a <a href="https://en.wikipedia.org/wiki/Pomodoro_Technique">pomdoro</a> timer which helps to manage you time effectively
- it also has a focus meter which uses machine learning to analyse your level of focus and alert you when necessary.

# Technologies Used

The front-end of timdo is built with <a href="https://reactjs.org/">react-js</a>
and the a library named <a href="https://react.geist-ui.dev/">geist-ui</a> is used for bootstrapping.
<br><br>
Timdo also has a backend which is built using <a href="https://www.djangoproject.com/">Django</a>
and uses <a href="https://www.sqlite.org/index.html">Sqllite</a> as a database.<br>
the front-end communicates with backend using an API which uses Json to carry data<br>
<a href="https://github.com/Asher-MS/timdo_api">Link to the API repo</a>
<br>
The API is hosted <a href="https://timdo-api.herokuapp.com/api/">here</a>
<br><br>
The Machine learning model is built using <a href="https://teachablemachine.withgoogle.com/">google's teachable machine</a>

## Setup

```
git clone https://github.com/Asher-MS/timdo.git
cd timdo
npm install
npm start
```

This will start your development server at <a href="http://localhost:3000">http://localhost:3000</a>
