import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase.init';
export const AuthContex=createContext(null)

const AuthProvider = ({children}) => {

    const googleProvider=new GoogleAuthProvider();

    const [user,setUser]=useState(null)
    const [loding,setLoding]=useState(true);
    const name='potato alu';
    const creatUser=(email,password)=>{
        setLoding(true)
       return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInWithGoogle=()=>{
        signInWithPopup(auth,googleProvider);
    }

    const loginUser=(email,password)=>{
        setLoding(true)
        return signInWithEmailAndPassword(auth,email,password);
    }



    // onAuthStateChanged(auth,currentUser=>{
    //     if(currentUser)
    //     {
    //         console.log('currently loged user',currentUser)
    //         setUser(currentUser)
    //     }else{
    //         console.log('sign out')
    //         setUser(null)
    //     }
    // })

    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth,currentUser=>{
            console.log('current User',currentUser);
            setUser(currentUser);
            
            setLoding(false)
            return()=>{
                unSubscribe();
            }
    
    
        })
    },[])

    const signOutUser=()=>{
        setLoding(true)
        signOut(auth);
    }


    const authInfo={
        name,
        user,
        loding,
        creatUser,
        loginUser,
        signOutUser,
        signInWithGoogle
    }
    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider >
    );
};

export default AuthProvider;