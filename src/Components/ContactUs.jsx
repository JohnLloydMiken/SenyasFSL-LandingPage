import Header from './Header.jsx'
import ContactUsBG from  '../assets/img/ContactUsBG.png'
import DownloadBanner from './DownloadBanner.jsx'
import DownloadBTN from './DonwloadBTN.jsx'
import Footer from './Footer.jsx'
import NavBar from './NavBar.jsx'
function ContactUs(){

    return(
            <>
                <div className='w-full h-full'>
                    <Header/>
                      
                    
                    <div className='w-11/12 h-screen relative mx-auto my-8  flex justify-center items-center max-h-[930px] max-w-[2000px]'>
                        <div className='w-1/2 h-full overflow-hidden relative'>
                             <img src={ContactUsBG} alt="" className=' w-full z-0' />
                             <div className='absolute top-10 right-10 z-50'>
                                 <h1 className='text-OrangeSenyas text-3xl'>SenyasFSL</h1>
                             </div>
                             <div className='w-[380px] absolute z-50 top-[28rem] left-8 '>
                                    <p className='text-4xl font-light text-[#FAF3E0]'>Bridging <span className='text-OrangeSenyas'>Communication</span> Through Interactive <span className='text-[#FFF085]'>Sign Language Learning</span></p>
                             </div>
                                <div className='absolute z-50  w-2/3  bottom-4 right-1'>
                                    <DownloadBanner className='w-full text-right'>
                                        <h3 className='uppercase font-light text-2xl text-white'>welcome to senyasfsl</h3>
                                       
                                        <h1 className="text-[2.5rem] font-bold text-white mb-2">Learn, Play, and Sign with AI-Powered FSL</h1>
                                        <p className="text-[1rem] w-[full] text-white mb-4">An interactive way to explore Filipino Sign Language with AI recognition and gesture-based learning.</p>
                                        <DownloadBTN className='w-3/4 h-[55px] bg-[#FFF085] text-black font-bold text-2xl'></DownloadBTN>
                                </DownloadBanner>
                                </div>
                        </div>
                        
                        <div className='w-1/2 h-full bg-[#ACD3A8] rounded-r-[50px] p-4'>

                            <div className='w-11/12 h-max relative'>
                                <h1 className='text-7xl'>Contact Us</h1>
                                <p className='font-light text-2xl relative ml-20 mt-12'>Let’s Make Something Great Together – Get in Touch with Us!</p>
                            </div>

                            <div className='w-11/12 h-max  relative mx-auto m-4'>
                                <form action="">
                                    <div className=' flex'>
                                          <div className='w-1/2 mb-4'>
                                            <label htmlFor="" className='block text-2xl font-bold'>Name: </label>
                                          <input type="text"  className='bg-white w-11/12 h-8'/>
                                          </div>
                                         <div className='w-1/2'>
                                             <label htmlFor="" className='block text-2xl font-bold'>Email: </label>
                                             <input type="text" className='bg-white w-full h-8' />
                                         </div>
                                    </div>
                                    <label htmlFor="" className='text-2xl font-bold '>Subject: </label>
                                    <input type="text" className='block bg-white w-full h-8 my-2' />
                                    <label htmlFor="" className='text-2xl font-bold'>Message: </label>
                                    <input type="text" className='block bg-white w-full h-[400px] my-2' />

                                    <button className='w-2/5 p-4 rounded-4xl bg-black text-white text-2xl mx-53 my-6'>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>

                    <Footer></Footer>
                </div>
            </>
    );
}
 export default ContactUs;