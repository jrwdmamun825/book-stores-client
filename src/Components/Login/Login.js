import React, { useContext } from 'react';
import firebaseConfig from './firebase.config';
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const [loggedInUser , setLoggedInUser] = useContext(UserContext);
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    } 
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            const { displayName, email } = result.user;
            const signedInUser = { name: displayName, email }
            setLoggedInUser(signedInUser);
            history.replace(from);
            
            // history.replace(from);
            // ...
        }).catch(function (error) {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }
    return (
        <div className="container">
            <div style={{ marginTop: '200px', marginLeft: '250px', height: '200px' }} className="container card w-50 bg-light">
                <div className="card-body mt-5 p-4">
                    <button className="btn btn-primary w-100 text-warning" onClick={handleGoogleSignIn} >
                    <i className="fab fa-google ml-3"> continue with google</i>

                    </button>

                </div>
            </div>
        </div>
    );
};

export default Login;