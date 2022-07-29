import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useEffect } from 'react';
import { StyledFirebaseAuth } from 'react-firebaseui';

const config = {
  apiKey: 'AIzaSyDdrtQnFHeBpEZcAuzroSP5IuvGkausRh8',
  authDomain: 'redux-photo-project.firebaseapp.com',
};
firebase.initializeApp(config);

const uiConfig = {
  signInFlow: 'redirect',
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  signInSuccessUrl: '/photos',
};

function SignIn() {
  // Handle firebase auth
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user) => {
      if (!user) {
        console.log("User haven't log in");
        return;
      }
      const token = await user.getIdToken();
    });
    return () => unregisterAuthObserver();
  }, []);
  return (
    <div>
      <div className="text-center">
        <h2>Login Form</h2>
        <p>or login with social accounts</p>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </div>
    </div>
  );
}

export default SignIn;
