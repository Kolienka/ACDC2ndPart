# Partie 2 projet ACDC Analyse de performances

Cette seconde partie du projet ACDC a été réalisée à l'aide du framework React.JS

### Fonctionalités:
  1. Recupération des contrats disponibles via l'API et affichage de ces derniers
  2. Affichage des informations d'un contrat séléctionné (nom, méthode, type d'inputs et outputs...)
  3. Personnalisation et réaliser d'executions (une ou plusieurs à la fois) d'un smart contrat choisi (taille des inputs de base, choix d'un pas, du nombre d'executions...) Il         est possible d'attribuer un nom à chaque execution afin de les identifier facilement
  4. Choix d'une execution réalisée afin d'afficher la courbe montrant l'évolution du coût en gas du contrat en fonction de la taille des inputs
  5. Récupération via une API de l'équivalence d'un ethereum en euros
  
  ### Piste d'améliorations:
  1. Petite calculatrice permettant de convertir le montant voulu d'ethereum en euros/dollars et inversement 
  2. Ameliorer la partie du graphe afin de pouvoir afficher plusieurs courbes de manières simultanée afin de comparer le coût en gas de ces dernieres
  3. Pouvoir donner un coût au gas afin d'estimer le prix d'un smart contract 

# Lancer le projet:
  1. Démarer le partie 1 du projet réalisée par Simon Sassi à l'aide de ./gradlew run
  2. Se déplacer dans le repertoire de la partie 2 du projet et lancer `npm i`
  3. Dans le même repertoire lancer `npm start`
  4. Se rendre sur son navigateur favori et donner l'url http://localhost:3000

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

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

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
