# Welcome To Jay's Instagram

See the deployed demo [here!](https://github.com/facebook/create-react-app).

## Project Architecture and Design

Here is a full breakdown of the folder structure and architecture.

### App.js

This is where the head of the snake lives as I would say. Inside the App.js there are a few neat things I did that I would love to touch on.

 - React Router v5
 - React lazy() and Suspense - code splitting by only loading pages we need, as well as adding a fallback or loading screen using Suspense 
 - We also use a component called ProtectedRoute which is a custom component that takes in the user and the route we want to protect to see if the user is logged in or not
 - We also use the user context but we will talk about that later.

### /pages

This is where all the pages for our app live such as Profile, Not Found etc. Not much goes on in these pages excpet we use useEffect to set the document title.

### /styles

So lets talk about styling now. For this project we have used Tailwind CSS and have configured it in this folder.This folder mostly just has config files and nothing special.

### /services

This is where the meat of our firebase calls live. We do everything from getting the users photos to toggling the follow and unfollow fields! There is alot of cool firebase service calls that can be used for many different situations.

### /lib

This is where the firebase config lives.



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

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
