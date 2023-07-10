import { useState,useEffect } from 'react'
import './App.css'
import {Route,Routes} from 'react-router-dom'
import Registration from './registr_log/registration'
import Login from './registr_log/login'
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/Contact'
import Shop from './components/Shop/Shop'
import MemberDetail from './components/Shop/memberDetail'
import Basket from './components/Shop/Basket'
function App() {
  const [first, setfirst] = useState(false)

   

  return (
   <div>
{first?
<Routes>
  <Route path='/' index element={<Login/>}/>
  <Route path='/registration' element={<Registration/>}/>
</Routes>

:
<div>
    <Navbar/>

  <Routes>
    <Route path='/Main' index element={<Main/>}/>
  <Route path='/Contact' element={<Contact/>}/>
  <Route path='/' element={<Shop/>}/>
  <Route path='/memberDetail/:memberId' element={<MemberDetail/>}/>
  <Route path='/Basket' element={<Basket/>}/>
  </Routes>

<Footer/>


</div>
}


   </div>
  )
}

export default App
