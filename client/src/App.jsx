import React from 'react'
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard'
import About from './pages/Aboutus';
import Home from './pages/Home';
import Project from './pages/Project';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Header from './components/Header';

// import Signup from './pages/Signup'
// import Singin from './pages/Signin'

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
     <Routes>
     <Route path= "/" element={<Home />}/>
     <Route path= "/about" element={<About />}/>
     <Route path= "/dashboard" element={<Dashboard/>}/>
     <Route path= "/project" element={<Project />}/>
     <Route path= "/signup" element={<Signup />}/>
     <Route path= "/signin" element={<Signin />}/>
     </Routes>
    </BrowserRouter>
    </>
  )
}
