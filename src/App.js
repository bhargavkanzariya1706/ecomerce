import React, { useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './Components/Header';
import Home from './pages/Home';
import Footer from './Components/Footer';
import store from './store/store';
import Cart from './Components/Cart';
import Wishlist from './Components/Wishlist';
import Airdopes from './Components/Airdopes';
import TV from './Components/TV';
import Mobile from './Components/Mobile';

import Login from "./firebase/Login";
import Home1 from "./firebase/Home1";
import Signup from "./firebase/Signup";
import { auth } from './firebase/firebase';
import './index.scss';
import "./App.css";
 

export default function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  return (
    <div>
      <BrowserRouter  >
        <Provider store={store}>
          <Header />
          <Cart />
          <Wishlist />
         

          <section id="home">
            <div className="container">
              <div className="home_content">

                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/Airdopes' element={<Airdopes />} />
                  <Route path='/TV' element={<TV />} />
                  <Route path='/Mobile' element={<Mobile />} />

                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/" element={<Home1 name={userName} />} />
                </Routes>
              </div>
            </div>
          </section>
          
        </Provider>
        <Footer />
      </BrowserRouter>
      
    </div>

  );
}
