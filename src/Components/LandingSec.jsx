import Header from './Header.jsx'
import HeroBg from '../assets/img/HeroBg.png'
import HeroBGRight from '../assets/img/HeroBGRight.png'
import DownloadBanner from './DownloadBanner.jsx'
import AboutUsIMG from '../assets/img/AboutUsIMG.png'
import DownloadBTN from './DonwloadBTN.jsx'
import Footer from './Footer.jsx'
function LandingSec(){

    
    return (

      <>
    <div className='w-full h-max relative flex justify-center items-center flex-col max-h-max mb-12'>
             
            <div className='absolute top-0 left-0 w-full z-50'>
                   <Header ></Header>
            </div>
            
        <div className='w-full h-max flex justify-center relative' >
            
                <div className= " w-1/2 h-[1130px]  max-w-[1230px] relative " >
                <img src={HeroBGRight} alt="" className='h-[1230px] w-[90%] relative left-[12rem]  ' />
                
                    <div className='absolute w-full top-[20rem] left-[7rem]  '>
                        <DownloadBanner></DownloadBanner>
                    </div>

                    <div className='absolute w-full top-[58rem] left-[7rem] '>
                        <h1 className='w-[55rem] italic font-bold text-[3rem]'>
                            Bridging <span className='text-[#FF8C00]'>Communication</span> Through Interactive Sign Language Learning
                        </h1>
                    </div>
                </div>  

                <div className= " w-1/2 h-[1027px] bg-no-repeat  [background-size:100%] bg-center max-w-[1027px] z-40" style={{backgroundImage: `url(${HeroBg})` }} >
                </div>
        
        </div>
       

    </div>

     <div className='w-full h-screen relative flex justify-center items-center flex-col  max-h-max mb-12'>
            <div className='w-[90%] h-[700px] bg-[#3B3526] rounded-2xl  relative max-w-[2000px]'>
                <div className='w-[40%] h-full  relative left-0 pl-4 pt-8 pb-2 pr-4'>
                    <h1 className='text-5xl text-white'>About <span className='text-[#FF9C00]'>Us</span></h1>
                    <p className='relative top-[2rem] left-[3rem] w-[550px] text-[1.18rem] text-white text-justify font-light '>SenyasFSL is a <span className='text-[#FF9C00]'>gamified</span> and interactive learning platform designed to make learning <span className='text-[#FF9C00]'>Filipino Sign Language (FSL)</span> more engaging and accessible. Using gesture-based gameplay powered by <span className='text-[#FF9C00]'>TensorFlow</span>, the platform enables users to learn FSL in an immersive and interactive way, bridging communication gaps between the deaf and hearing communities.
                    <br />
                    This web application is developed as part of a capstone project that aims to enhance language accessibility, promote inclusivity, and improve learning retention through a fun and interactive experience. SenyasFSL integrates <span className='text-[#FF9C00]'>artificial intelligence (AI)</span> and <span className='text-[#FF9C00]'>machine learning (ML)</span> to recognize and evaluate users' hand gestures, ensuring accuracy and effective learning.
                    <br />
                    By providing interactive lessons, real-time gesture recognition, and gamified exercises, SenyasFSL fosters an engaging environment for both beginners and advanced learners who wish to master Filipino Sign Language.</p>

                    <div className=' w-11/12 h-max  flex justify-between items-center relative top-[6rem]'>
                        <h2 className='text-[#FF9C00] text-4xl'>SenyasFSL</h2>
                     <DownloadBTN className='bg-[#FAF3E0] text-[#1E1E1E] w-[300px] h-[55px]'></DownloadBTN>
                    </div>
                </div>
                <div className='absolute w-[60%] h-[110%] bg-no-repeat bg-cover right-0  -top-10 rounded-2xl'  style={{backgroundImage: `url(${AboutUsIMG})` }}></div>
            </div>
    </div>

    <div className='w-full max-w-full max-h-max flex justify-center items-center flex-col mb-12'>
        <div className='w-11/12  text-center mb-16'>
            <h1 className='text-[4.5rem]'>Key <span className='text-[#5F8B4C]'>Features</span></h1>
            <h4 className='text-[1.5rem]'>Innovative Features for an Engaging Sign Language Learning Experience</h4>
        </div>
      
        <div className='w-11/12 h-max grid grid-cols-3 gap-4 '>
            <div className='w-[500px] h-[200px] p-4 rounded-lg border border-black/30'>
                <h5>AI-Powered Gesture Recognition</h5>
                <p>Utilizing TensorFlow, the platform accurately detects and evaluates hand gestures, providing instant feedback to users.</p>
            </div>
            <div className='w-[500px] p-4 rounded-lg border border-black/30'>
                <h5>Gamified Learning Experience</h5>
                <p>Lessons are designed in a game format, encouraging users to progress through interactive challenges, quizzes, and rewards.</p>
            </div>
            <div className='w-[500px] p-4 rounded-lg border border-black/30 row-span-3'>
                <h5>Comprehensive FSL Lessons</h5>
                <p>Users receive instant feedback on their gestures and can track their learning progress through a built-in dashboard.</p>
            </div>
            <div className='w-[500px] p-4 rounded-lg border border-black/30'>
                <h5>Real-Time Feedback & Progress Tracking</h5>
                <p>Covers basic to advanced Filipino Sign Language vocabulary, sentence construction, and real-life conversational scenarios.</p>
            </div>
            <div className='w-[500px] p-4 rounded-lg border border-black/30'>
                <h5>Inclusive & User-Friendly Interface</h5>
                <p>Designed to cater to beginners, educators, and individuals in the deaf and hard-of-hearing community with an intuitive and accessible UI.</p>
            </div>
            <div className=' p-4 rounded-lg col-span-2  border border-black/30'>
                <h5>Interactive Challenges & Achievement System</h5>
                <p>Users can participate in daily challenges, earn badges, and unlock new levels as they progress, making learning more motivating and rewarding.</p>
            </div>
        </div>

    </div>
          
          <Footer></Footer>
          
      </>
        
    )
}


export default LandingSec;