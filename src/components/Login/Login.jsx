import React, { useState } from 'react';
import app from '../../firebase/firebase.init';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut,  } from 'firebase/auth';

const Login = () => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const authenticUser = result.user;
            setUser(authenticUser);
            // IdP data available using getAdditionalUserInfo(result)
            console.log(authenticUser);
            // ...
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          });
    }

    const handleGithubSignIn = () => {
        signInWithPopup(auth, gitHubProvider)
  .then((result) => {
    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    const credential = GithubAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    // The signed-in user info.
    const authenticUser = result.user;
    setUser(authenticUser);
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GithubAuthProvider.credentialFromError(error);
    // ...
  });
    }

    const handleSignOut = () => {
        signOut(auth)
        .then((reuslt) => {
            setUser(null);
            console.log(reuslt);
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    return (
        <div>
        {user ? <button onClick={handleSignOut}>Sign Out</button> :
        <>
        <button onClick={handleGoogleSignIn}>Google login</button>
        <button onClick={handleGithubSignIn}>GitHub login</button>
        </>
        }
            { user && <div>
                <h2>Username: {user.displayName}</h2>
                <p>Email: {user.email}</p>
                <p>UId: {user.uid}</p>
                <img src={user.photoURL} alt="" />
            </div> }
        </div>
    );
};

export default Login;