import { initializeApp } from "firebase/app";

// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyC1l-k6Ts0Hjini-XF1pQUWV4pwecLbNUs",
    authDomain: "qt-parlour.firebaseapp.com",
    databaseURL: "https://qt-parlour-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "qt-parlour",
    storageBucket: "qt-parlour.appspot.com",
    messagingSenderId: "201122580540",
    appId: "1:201122580540:web:63fe5c0649288375c05b39",
    measurementId: "G-57FJXW8C9F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// export const auth = getAuth(app)

export default app
// const analytics = getAnalytics(app);