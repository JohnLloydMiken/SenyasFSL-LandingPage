import Header from './Header.jsx'
import HeroBg from '../assets/img/HeroBg.png'
import HeroBGRight from '../assets/img/HeroBGRight.png'
import DownloadBanner from './DownloadBanner.jsx'
import React, { useEffect } from 'react'
function Hero(){

    
    return (

       <div >
            <Header></Header>
            <DownloadBanner ></DownloadBanner>
       </div>
           
        
    )
}

export default Hero;