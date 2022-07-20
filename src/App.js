import React, { useEffect, useState } from 'react'
import Navbar from './components/homepage/Navbar';
import Header from './components/homepage/Header';
import About from './components/homepage/About';
import Services from './components/homepage/Services';
import Testimonials from './components/homepage/Testimonials';
import Footer from "./components/homepage/Footer";
import ContactUs from "./components/homepage/ContactUs";

import Loading from './components/Loading';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { SplashScreen } from './components/SplashScreen';


function App() {
  const name = 'Shubham'
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  // alert(location.pathname)

  return (
    <>
      <BrowserRouter>
        {/* <Navbar title={name} onLoading={setLoading} onSignInClicked={() => { }} /> */}
        <Routes>
          <Route exact path='/' element={
            <SplashScreen/>
            // <>
            //   <Header title={name} />
            //   <About />
            //   <Services items={[1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,]} />
            //   <Testimonials />
            //   <ContactUs />
            // </>
          } />
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
      <Loading visible={isLoading} />
    </>
  );
}

export default App;
