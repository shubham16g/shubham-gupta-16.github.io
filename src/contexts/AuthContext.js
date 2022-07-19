import React, { useContext, useState, useEffect } from 'react'
import { getAuth, onAuthStateChanged, signOut, updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import app from "../firebase";


const auth = getAuth(app)

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()

    async function signup(name, email, password) {
        await createUserWithEmailAndPassword(auth, email, password)
        return updateProfile(auth.currentUser, { displayName: name })
    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logout() {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user)
        })
        return unsubscribe
    }, []);

    

    const value = {
        currentUser,
        signup,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
            {/* {currentUser == null ? 'no': 'ya'} */}
        </AuthContext.Provider>
    )
}
