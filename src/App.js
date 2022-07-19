import React, { useState } from 'react'
import Navbar from './components/homepage/Navbar';
import Header from './components/homepage/Header';
import About from './components/homepage/About';
import Services from './components/homepage/Services';
import Testimonials from './components/homepage/Testimonials';
import Footer from "./components/homepage/Footer";
import ContactUs from "./components/homepage/ContactUs";
import LoginSignup from "./components/LoginSignup";

import { AuthProvider } from './contexts/AuthContext';
import Loading from './components/Loading';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookingPage from './components/BookingPage';
import { FirestoreProvider } from './contexts/FirestoreContext';


function App() {
  const name = 'QT-parlour'
  const [isAuthPopupVisible, setAuthPopupVisible] = useState(false)
  const [isLoading, setLoading] = useState(false)


  // alert(location.pathname)

  return (
    <AuthProvider>
      <FirestoreProvider>
        <BrowserRouter>
          <Navbar title={name} onLoading={setLoading} onSignInClicked={() => { setAuthPopupVisible(true) }} />
          <Routes>
            <Route exact path='/' element={<>
              <Header title={name} />
              <About />
              <Services items={[1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,]} />
              <Testimonials />
              <ContactUs />
            </>} />
            <Route path='/booking' element={<BookingPage />} />
          </Routes>
        </BrowserRouter>
        <Footer />
        <LoginSignup visible={isAuthPopupVisible} onLoading={setLoading} onClose={() => { setAuthPopupVisible(false) }} />
        <Loading visible={isLoading} />
      </FirestoreProvider>
    </AuthProvider>
  );
}

export default App;
