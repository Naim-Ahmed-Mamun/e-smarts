import { useEffect, useState } from "react";
import initializeFirebaseAuthentication from "../components/shared/Login/Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,
signOut,onAuthStateChanged,updateProfile } from "firebase/auth";
import Swal from 'sweetalert2';

initializeFirebaseAuthentication()

const useFirebase = () => {
    const [user,setUser] = useState({});
    const [authError,setAuthError] = useState('');
    const [admin, setAdmin] = useState(false)
    const [loading,setLoading] = useState(true);

    // auth
    const auth = getAuth();

    // register user
    const registerUser = (email,password,name,reset,navigate) => {
        createUserWithEmailAndPassword(auth,email,password)
        .then(result => {
            const user = {email:email,displayName:name}
            setUser(user)
            // savedUser
            console.log(result.user)
            savedUser(name,email);
            setLoading(false);
            // update
            updateProfile(auth.currentUser, {
                displayName: name
              }).then(() => {
                
              }).catch((error) => {
               
              });
              Swal.fire({
                icon: 'success',
                title: 'Register Successfully',
            })
            navigate('/home')
            reset()
        })
        .catch(err => {
            console.log(err.message);
            setAuthError(err.message);
            Swal.fire({
                icon: 'error',
                title: authError,
            })
        })
    }

    // sign in user
    const loginUser = (email,password,location,navigate) => {
        signInWithEmailAndPassword(auth,email,password)
        .then(result => {
            setUser(result.user);
            setLoading(false);
            const redirect_uri = location?.state?.from || '/';
            Swal.fire({
                icon: 'success',
                title: 'Login Successfully',
            })
            navigate(redirect_uri)
        })
        .catch(err => {
            setAuthError(err.message)
            console.log(err.message);
            Swal.fire({
                icon: 'error',
                title: authError,
            })
        })
    }

    // on Auth State Changed
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } else {
              setUser({})
            }
            setLoading(false)
          });
          return () => unsubscribe;
    },[auth])

    // logout
    const logout = () => {
        signOut(auth)
        .then(() => {
            setUser({})
          })
          .catch((error) => {
            setAuthError(error.message)
          });
    };

    // check admin from user collection
    useEffect(() => {
        const url = `https://limitless-shelf-68611.herokuapp.com/users/${user?.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setAdmin(data.admin)
            })
    }, [user?.email])

    // saved user info
    const savedUser = (name,email) => {
        const user = {displayName:name,email:email};
        fetch('https://limitless-shelf-68611.herokuapp.com/users',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }

    return{
        user,
        registerUser,
        loginUser,
        logout,
        authError,
        loading,
        admin
    }
}

export default useFirebase;