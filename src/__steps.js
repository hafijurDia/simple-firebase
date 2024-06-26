/***
 * 
 * ----------------
 * INITIAL SETUP
 * ---------------
 * 1. visit: console.firebase.google.com
 * 2. create project (skip google analytics)
 * 3. Register app (create config)
 * 4. install firebase npm install firebase
 * 5. add config file to your project
 * 6. Danger: Do not publish or make firebase config to public by pushing those to github
 * 
 * ---------------
 * INTEGRATION 
 * -----------------
 * 
 * 7. Visit: Go to Doc > Build > Authentication > Web > Get Started
 * 8. export app from the firebase.config.js file: export app
 * 9. Login.jsx: import getAuth from firebase/auth 
 * 10. create const auth = getAuth(app)
 * --------------------
 * PROVIDER
 * ------------------
 * 
 * 11. import googelAuthProvider and create a new provider
 * 12. use signInWihtPopUp and pass auth and provider
 * 13. activate sign-in metod (google, facebook, github, etc)
 * 14. vite: change 127.0.0.1 to localhost
 * 
 * ----------------
 * MORE AUTH PROVIDER
 * --------------------
 * 1. activate the auth provider (create app, provide redirect url, client id, client secret)
 * 
 */