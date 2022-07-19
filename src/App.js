import React, { useState } from 'react'
import Navbar from './components/homepage/Navbar';
import Header from './components/homepage/Header';
import About from './components/homepage/About';
import Services from './components/homepage/Services';
import Testimonials from './components/homepage/Testimonials';
import Footer from "./components/homepage/Footer";
import ContactUs from "./components/homepage/ContactUs";

import Loading from './components/Loading';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  const name = 'QT-parlour'
  const [isLoading, setLoading] = useState(false)


  // alert(location.pathname)

  return (
    <>
      <BrowserRouter>
        <Navbar title={name} onLoading={setLoading} onSignInClicked={() => { }} />
        <Routes>
          <Route exact path='/' element={
            <>
              <Header title={name} />
              <About />
              <Services items={[1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,]} />
              <Testimonials />
              <ContactUs />
            </>
          } />
        </Routes>
      </BrowserRouter>
      <Footer />
      <Loading visible={isLoading} />
    </>
  );
}

export default App;
