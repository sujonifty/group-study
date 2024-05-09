import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";
import { GoogleAuthProvider } from "firebase/auth/cordova";



export const authContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
   
    // create user by email & password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // create login by email & password
    const createLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);

    }
      //sign in by google
      const createGoogleUser = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);

    }
    //Log out
    const createLogOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    }, []);

    const authInfo = {
        user,
        setUser,
        error,
        setError,
        loading,
        createUser,
        createLogin,
        createGoogleUser,
        createLogOut,

    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;