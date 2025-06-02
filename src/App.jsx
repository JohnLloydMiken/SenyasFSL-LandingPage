import ContactUs from './Components/ContactUs.jsx'
import './App.css'
import {Routes, Route} from 'react-router'
import LandingSec from './Components/LandingSec.jsx'
import HowToUSe from './Components/HowToUseSEc.jsx'
import FAQs from './Components/FAQs.jsx'
function App() {
 


  return (
    <>
      
      <Routes>
         <Route path='/' element = {<LandingSec/>}/>
         <Route path='/HowToUse' element = {<HowToUSe/>}/>
         <Route path='/FAQs' element = {<FAQs/>}/>
         <Route path='/ContactUs' element = {<ContactUs/>}/>

          
      </Routes>
    </> 
  )
}

export default App
