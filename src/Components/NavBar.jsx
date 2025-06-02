import UserIcon from '../assets/img/UserIcon.png'
import LandingPageSEc from './LandingSec.jsx'
import React, {useState} from 'react';
import {Link, useLocation} from 'react-router-dom'
function NavBar(){

    const location = useLocation();
    const currentPath = location.pathname;
  

    return(
      <div className='flex justify-around items-center  h-full w-full grow shrink'>
            <div className=' '>
                <h1 className='text-[#FAF3E1] text-3xl'>SenyasFSL</h1>
            </div>
            <div className=' w-2xl'>
                <ul className='flex justify-around text-[#FAF3E1]'>
                    
                    <Link to='/' className={`${currentPath === '/' ? 'text-OrangeSenyas underline underline-offset-8 decoration-[#5F8B4C] decoration-2': ''}`}>About Us</Link>
                    <Link to='/HowToUse' 
                    className={`${currentPath === '/HowToUse' ? 'text-OrangeSenyas underline underline-offset-8 decoration-[#5F8B4C] decoration-2': ''}`}>How To Use</Link>

                    
                    <Link to='/ContactUs'
                    className={`${currentPath === '/ContactUs' ? 'text-OrangeSenyas underline underline-offset-8 decoration-[#5F8B4C] decoration-2': ''}`}
                    >Contact Us</Link>
                    <Link to='/FAQs' 
                    className={`${currentPath === '/FAQs' ? 'text-OrangeSenyas underline underline-offset-8 decoration-[#5F8B4C] decoration-2': ''}`}
                    >FAQ's</Link>

                   
                </ul>
            </div>
            <div className='flex  justify-between items-center w-52 h-full '>
                <div>
                   <Link to='/'
                   className={`text-white`}
                   >Download</Link>
                </div>
                <div>
                    <button><img src={UserIcon} alt="User Icon" className='w-13 mt-2 ' /></button>
                </div>
            </div>
      </div>
    )
}

export default NavBar;