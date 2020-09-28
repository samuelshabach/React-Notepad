import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCZvDqSa17c9w3Jacf23OGE6Qjcyutx19s",
    authDomain: "react-notepad-150c7.firebaseapp.com",
    databaseURL: "https://react-notepad-150c7.firebaseio.com",
    projectId: "react-notepad-150c7",
    storageBucket: "react-notepad-150c7.appspot.com",
    messagingSenderId: "944190656637",
    appId: "1:944190656637:web:99967863183fcc1c54a114",
    measurementId: "G-6C0PZYDCZN"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;