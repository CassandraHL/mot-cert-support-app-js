# Timesheet Manager
This provides the frontend for the Timesheet manager support app for the Automation in Testing Engineer learning journey.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting Started

### Installing Dependencies

Before running the checks for the first time, you'll have to install project dependencies using

```
npm install
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run wdio`

Runs end-to-end tests according to [wdio.conf.js](wdio.conf.js)

If you just want to run a specific test file, you can use something like

```
npx wdio run ./wdio.conf.js --spec login.e2e.js
```

## CI/CD Integration

The project is integrated with GitHub actions.  The build and test process is triggered with every push to main.  Pipeline configuration can be found in [.github/workflows/build_test_react.yml](.github/workflows/build_test_react.yml)