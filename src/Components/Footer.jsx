import FB from '../assets/img/FB.png'
import IG from '../assets/img/IG.png'
import Tiktok from '../assets/img/tiktok.png'
import YT from '../assets/img/YT.png'
import LinkedIn from '../assets/img/linkedin.png'
import Twitter from '../assets/img/Twitter.png'
function Footer(){

    return(
        <footer className='bg-[#231F20] max-w-full h-[21rem] flex justify-center items-center text-white/30 text-lg    '>
           <div className=' w-11/12 h-11/12 max-w-[2000px]  flex justify-around items-center flex-col relative'>
                <div className='w-full flex justify-center items-center  '>
                    <div className='w-[40%]'>
                        <h1 className='text-[#FF9C00] text-[4rem]'>SenyasFSL</h1>
                    </div>
                    <div className='w-[60%] flex justify-between items-center'>
                        <div>
                            <p>About</p>
                            <ul className='text-white'>
                                <li>Get the App</li>
                                <li>Key Features</li>
                            </ul>
                        </div>
                        <div>
                            <p>How To Use</p>
                            <ul className='text-white'>
                                <li>Learn how to use the app</li>
                                <li>Tutorials</li>
                            </ul>
                        </div>
                        <div> 
                            <p>Feedbacks</p>
                            <ul className='text-white'>
                                <li>Share us Your Thoughts</li>
                                <li>Rate Our App</li>
                            </ul>
                        </div>
                        <div>
                            <p>Socials</p>
                            <ul className='grid grid-cols-3 gap-4'>
                                <li><img src={FB} alt="" /></li>
                                <li><img src={IG} alt="" /></li>
                                <li><img src={Tiktok} alt="" /></li>
                                <li><img src={YT} alt="" /></li>
                                    <li><img src={LinkedIn} alt="" /></li>
                                    <li><img src={Twitter} alt="" /></li>
                                    
                            </ul>
                        </div>
                    </div>
                </div>

                <hr className='bg-white/30 w-[200%]  ' />

                <div className='w-full flex justify-between items-center text-[1.5rem]'>
                    <div className='w-1/2'>
                        <h1>
                            @ 2025 SenyasFSL
                        </h1>
                    </div>
                    <div className='w-1/2'>
                        <ul className='flex justify-around'>
                            <li>Help & Support</li>
                            <li>Privacy</li>
                            <li>Copyrights</li>
                            <li>Terms and Services</li>
                        </ul>
                    </div>

                </div>
           </div>
        </footer>
    )
}

export default Footer;