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
View the app <a href="https://timdo.ashermathews.co/">https://timdo.ashermathews.co</a>
<br><br>

- Timdo is a web-app that helps the user to organise and make full use of his/her study time.
- Timdo is basically a timer app that helps you organise your study time.
- It also has a <a href="https://en.wikipedia.org/wiki/Pomodoro_Technique">pomdoro</a> timer which helps to manage your time effectively
- it even has a focus meter which uses machine learning to analyse your level of focus and alert you when necessary.

# Technologies Used

The front-end of timdo is built with <a href="https://reactjs.org/">react-js</a>
and the a library named <a href="https://react.geist-ui.dev/">geist-ui</a> is used for bootstrapping.
<br><br>
Timdo also has a backend which is built using <a href="https://www.djangoproject.com/">Django</a>
and uses <a href="https://www.sqlite.org/index.html">Sqllite</a> as a database.<br>
the front-end communicates with backend using an API which uses Json to carry data<br>
<a href="https://github.com/Asher-MS/timdo_api">Link to the API repo</a>
<br><br>
The API is hosted <a href="https://timdo-api.herokuapp.com/api/all">here</a>
<br><br>
The Machine learning model is built using <a href="https://teachablemachine.withgoogle.com/">google's teachable machine</a>
<br>

## <a href="https://github.com/Asher-MS/timdo/blob/master/README.md#contributing">Contributing</a>
## Setup

```
git clone https://github.com/Asher-MS/timdo.git
cd timdo
npm install
npm start
```

This will start your development server at <a href="http://localhost:3000">http://localhost:3000</a>

# Features

## Pomdoro Timer

It helps you to manage your time using <a href="https://en.wikipedia.org/wiki/Pomodoro_Technique">Pomdoro Technique</a>

<img src="screenshots\pomdoro.JPG"/>

<br>
<br>

## Inspirational Quotes

Motivational Quotes give us a quick burst of energy and enthusiansm to achieve our goals
<img src="screenshots\inspo.JPG"/>

<br>
<br>

## Music

Music provides a soothing and relaxing environment for studying and increases our productivity
<img src="screenshots\music.JPG"/>

<br>
<br>

## Task Tracker

Users can track their academic tasks which helps them to use their time more effectively
<img src="screenshots\timer.JPG">

<br>
<br>

## Focus Analyzer

It uses Machine Learning to analyze your facial and body expressions to measure your Focus level
<img src="screenshots\focus.JPG"/>



## Note: Please Turn off brave sheilds if you are using BraveBrowser for the proper functioning of the app

## Contributing
Please read the <a href="https://github.com/Asher-MS/timdo/blob/master/CONTRIBUTING.md">contribution guidelines</a> before contributing
