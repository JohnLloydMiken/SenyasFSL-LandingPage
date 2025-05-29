import UserIcon from '../assets/img/UserIcon.png'
import LandingPageSEc from './LandingSec.jsx'
function NavBar(){
    return(
      <div className='flex justify-around items-center  h-full w-full grow shrink'>
            <div className=' '>
                <h1 className='text-[#FAF3E1] text-3xl'>SenyasFSL</h1>
            </div>
            <div className=' w-2xl'>
                <ul className='flex justify-around text-[#FAF3E1]'>
                    
                    <li><a href= "">About Us</a></li>
                    <li>How To Use</li>
                    <li>FAQ's</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className='flex  justify-between items-center w-52 h-full '>
                <div>
                    <h1 className='text-[#FAF3E1]'>Download</h1>
                </div>
                <div>
                    <button><img src={UserIcon} alt="User Icon" className='w-13 mt-2 ' /></button>
                </div>
            </div>
      </div>
    )
}

export default NavBar;