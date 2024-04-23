import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import SignIn from './Pages/Signin'
import SignOut from './Pages/SignUp'
import About from './Pages/About'
import Profile from './Pages/Profile'
import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute'
import CreateListing from './Pages/Create_listingpage'
import Listing from './Pages/listing';


export default function App() {
  return (
   <BrowserRouter>
   <Header/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/sign-in" element={<SignIn/>}/>
    <Route path="/sign-up" element={<SignOut/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path='/listing/:listingId' element={<Listing />} />
    <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/create-listing' element={<CreateListing/>}/>
          </Route>
    </Routes>
  </BrowserRouter>
  )
  
}
