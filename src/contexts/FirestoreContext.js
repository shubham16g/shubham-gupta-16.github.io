import React, { useContext, useState, useEffect, useRef } from 'react'
import { getFirestore, doc, getDoc, } from "firebase/firestore";
import { getDatabase, set, ref, onValue } from "firebase/database";
import app from "../firebase";
import { useAuth } from './AuthContext';


const db = getFirestore(app)
const database = getDatabase(app)


const FirestoreContext = React.createContext()

export function useFireStore() {
    return useContext(FirestoreContext)
}
// let isLoading = useRef(0)
// let [state, setState] = useState()

export function FirestoreProvider({ children }) {

    const { currentUser } = useAuth()

    const [services, setServices] = useState()


    // realtime-databse cart

    const [cart, setCart] = useState({})
    const docRef = doc(db, "services", 'children')

    let isCartLoaded = useRef(false)

    function getCart() {
        if (currentUser == null) return
        if (isCartLoaded.current) return
        console.error('here2');
        isCartLoaded.current = true
        onValue(ref(database, 'cart/' + currentUser.uid), (snapshot) => {
            const data = snapshot.val();
            // console.error(data);
            setCart(data == null ? {} : data)
        });
    }
    async function updateCart(bKey, value) {
        try {
            await set(ref(database, 'cart/' + currentUser.uid + '/' + bKey), value > 0 ? value : null);
        } catch (error) {
            
        }
    }


    /* async function addService(key, name, price, duration) {
        await setDoc(docRef, {
            [key]: {
                children: {
                    'bkey6': {
                        name: name,
                        price: price,
                        duration: duration
                    }
                }
            }
        }, { merge: true })
    } */

    async function loadDoc() {
        if (services != null) return
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            setServices(docSnap.data())
        } else {
            // doc.data() will be undefned in this case
            alert("No such document!");
        }
    }

    useEffect(() => {
        getCart()
    });

    useEffect(() => {
        loadDoc()
    });

    const value = {
        services,
        updateCart,
        cart
    }

    return (
        <FirestoreContext.Provider value={value}>
            {children}
        </FirestoreContext.Provider>
    )
}
