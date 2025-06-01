import React, { useEffect } from 'react'
import Header from './Header.jsx'
import DownloadBanner from './DownloadBanner.jsx'
import How from '../assets/img/How.png'
import DownloadBTN from './DonwloadBTN.jsx'
import Footer from './Footer.jsx'
function HowToUseSection (){

    useEffect(()=>{
        document.body.style.backgroundColor = "#332603"
      }, []);
return(
    <>
     
    <div className='w-full h-screen flex justify-center items-center flex-col relative max-h-[1024px] '>
         <div className='w-full max-w-[2000px] '>
             <Header></Header>
         </div>
        <div className=' w-11/12 h-max relative 
        text-center max-w-[2000px]'>
            <h1 className='text-[4rem] text-white'>How Does <span className='text-[#45BF10]'>SenyasFSL</span> Works?</h1>
            <p className='text-[1.25rem] text-white font-light text-justify'>Welcome to <span className='text-[#FF9C00]'>SenyasFSL</span> , your interactive and gamified learning platform for mastering Filipino Sign Language (FSL)! This app is designed to make learning FSL fun, engaging, and effective through a step-by-step progression system. Below is a detailed guide on how to use the app and navigate its features</p>
        </div>

        <div className='w-11/12 h-full  relative max-w-[2000px] '>
           <div className='w-max h-max relative top-[5rem]'>
                <DownloadBanner>
                        <h2 className="uppercase text-3xl text-[#FDEACC]">welcome to senyasfsl!</h2>
                        <h1 className="text-[3rem] font-bold w-[550px] text-[#FDEACC]">Learn, Play, and Sign with AI-Powered FSL</h1>
                        <p className="text-[1.5rem] w-[600px] text-[#FDEACC]">An interactive way to explore Filipino Sign Language with AI recognition and gesture-based learning.</p>
                        <DownloadBTN className='w-[400px] h-[65px] bg-[#5F8B4C] text-[#FAF3E0]'></DownloadBTN>
                </DownloadBanner>
           </div>
            <img src={How} alt="" className=' absolute right-[0rem] top-[-4rem]' />
            <button className='w-[400px] h-[65px] bg-[#5F8B4C] text-[#FAF3E0]  rounded-full  text-[1.75rem] italic hover:underline hover:cursor-pointer absolute left-[33rem] top-[43rem]'>Learn How To Play</button>
        </div>
    </div>  
        {/*Start OF Timeline */}
    <div className='w-full h-max relative top-28 mb-96'>
       <div className='pt-[64px]' >
            <ul className='pt-[100px]'>
                <li className='relative mx-auto my-0 w-[2px] mb-12 
                bg-GreenSenyas
                before:bg-[#FFF085]
                  before:absolute
                  before:left-1/2
                  before:top-[-32px]
                  before:translate-x-[-50%]
                  before:w-4
                  before:h-4
                  before:rounded-full
                  
                  '>
                    <div className=' w-[580px] h-[620px] bg-[#EBFFEE]/10 rounded-3xl p-4 text-white text-2xl font-light shadow-[0_0px_20px_#BAA979] relative right-[50rem] -top-48'>
                        <h3 className='text-[#45BF10] text-[1.5rem] mb-2'>Tips For Success</h3>
                           <ul className='list-disc ml-12'>
                                <li>
                                    <h4 className='text-[#FF9C00]'>Practice Regularly :</h4>
                                    <p>Consistency is key! Spend a few minutes daily on the app to build your skills over time.</p>
                                </li>
                                <li>
                                     <h4 className='text-[#FF9C00]'>Use Feedback Wisely :</h4>
                                     <p>Pay attention to the AI feedback and focus on improving your weak areas.</p>
                                </li>
                                <li>
                                     <h4 className='text-[#FF9C00]'>Engage with the Community :</h4>
                                     <p>Share your achievements on social media or join forums to connect with other learners.</p>
                                </li>
                                <li>
                                        <h4 className='text-[#FF9C00]'>In AI-based levels :</h4>
                                        <p>position yourself in good lighting and ensure your hands are visible to the camera.</p>
                                </li>
                                <li>
                                     <h4 className='text-[#FF9C00]'>Follow the on-screen sign demonstration :</h4>
                                     <p>Follow the on-screen sign demonstration and perform the gesture.The app will analyze and provide real-time feedback on accuracy.</p>
                                </li>

                           
                           </ul>
                    </div>
                </li>
                <li className='relative mx-auto my-0 w-[2px] mb-12
                before:bg-[#FFF085]
                bg-GreenSenyas
                  before:absolute
                  before:left-1/2
                  before:top-[-32px]
                  before:translate-x-[-50%]
                  before:w-4
                  before:h-4
                  before:rounded-full
                '>
                    <div className=' w-[580px] h-[450px]  relative left-[15rem] -top-64'>
                        <h1 className='text-white text-5xl text-center mb-4'>--Getting Started--</h1>
                        <div className='bg-[#EBFFEE]/10 rounded-3xl p-4 text-white text-3xl shadow-[0_0px_20px_#BAA979] font-light'>
                             <DownloadBanner>
                                <h2 className="uppercase text-[20px] text-[#FDEACC] font-bold">Dowload and Install:</h2>
                                <h1 className="text-[1rem] font-bold w-[550px] text-[#FDEACC] mb-2">Learn, Play, and Sign with AI-Powered FSL</h1>
                                <p className="text-[1rem] w-[full] text-[#FDEACC] mb-4">An interactive way to explore Filipino Sign Language with AI recognition and gesture-based learning.</p>
                                <DownloadBTN className='w-[250px] h-[55px] bg-[#5F8B4C] text-[#FAF3E0] font-bold'></DownloadBTN>
                           </DownloadBanner>
                           <h4 className='font-bold'>Sign Up or Log In :</h4>
                           <p className='text-[1rem] ml-4'>Create a new account using your email or log in if you already have one. Your progress will be saved securely in your profile.</p>

                           <h4 className='font-bold'>Customize Your Avatar :</h4>
                           <p className='text-[1rem] ml-4'>Personalize your in-game avatar to make your learning journey more fun and engaging. You can update your avatar anytime in the Profile section.</p>

                           <h4 className='font-bold'>Explore the Dashboard :</h4>
                           <p className='text-[1rem] ml-4'>Familiarize yourself with the dashboard, where you’ll find your progress tracker, lesson history, daily challenges, and achievements.</p>
                        </div>
                    </div>
                </li>

                <li className='relative mx-auto my-0 w-[2px] mb-12
                bg-GreenSenyas
                before:bg-[#FFF085]
                  before:absolute
                  before:left-1/2
                  before:top-[-32px]
                  before:translate-x-[-50%]
                  before:w-4
                  before:h-4
                  before:rounded-full
                '>
                    <div className='text-white w-[650px] h-[700px] relative right-[50rem] -top-[10rem]'>
                        <div className='w-[750px] h-max  text-center'>
                            <h1 className='text-5xl mb-4'>--Understanding the Gameplay--</h1>
                            <p className='font-light text-[1.25rem] w-[full] text-justify mb-8'>SenyasFSL is a progress-based game where you must complete each level before advancing to the next. As you progress, the difficulty increases, allowing you to learn more complex Filipino Sign Language (FSL) signs.</p>
                        </div>
                        <div className=' h-max bg-[#EBFFEE]/10 rounded-3xl p-4  text-3xl shadow-[0_0px_20px_#BAA979] '>
                            <h2 className='font-bold '>Level Structure :</h2>
                            <h4 className='text-OrangeSenyas'>Level 1 :</h4>
                                <p className='font-light text-[1.25rem] ml-4'>
                                Video Tutorial: Watch a short video demonstrating basic Filipino Sign Language alphabets or words. These animations are designed to help you understand proper hand shapes and movements.
                                </p>
                                <br />
                                <p className='font-light text-[1.25rem] ml-4'>
                                    Quiz Time :After the tutorial, test your knowledge with a quiz. The app will display a sign on the screen, and you’ll select the correct answer from multiple-choice options.
                                </p>
                                <br />

                            <h4 className='text-OrangeSenyas'>Level 2 :</h4>
                                <p className='font-light text-[1.25rem] ml-4'>
                                    AI-Powered Gesture Recognition :This is where the magic happens! The app will display a sign, and you’ll practice it in front of your device’s camera. Our AI technology will analyze your gestures in real-time and provide instant feedback on your accuracy.
                                    </p>
                                    <br />
                                    <p className='font-light text-[1.25rem] ml-4'>
                                        Error Detection and Suggestions :If your sign isn’t accurate, the app will highlight areas for improvement and guide you step-by-step to perfect your technique.
                                    </p>
                                <br />
                            <h4 className='text-OrangeSenyas'>Level 3 :</h4>
                               <p className='font-light text-[1.25rem] ml-4'>New Signs and Words :Similar to Level 1, but with more complex Filipino words or phrases. Watch the tutorial videos and answer quiz questions to reinforce your learning.
                                </p>
                                <br />
                            <h4 className='text-OrangeSenyas'>Level 4 :</h4>
                           <p className='font-light text-[1.25rem] ml-4'>Practice Makes Perfect :Just like Level 2, but now focusing on the signs you learned in Level 3. Use the AI-powered feedback to refine your skills and ensure accuracy.
                            </p>
                                 <br />
                            <h4 className='text-OrangeSenyas'>Level 5 :</h4>
                           <p className='font-light text-[1.25rem] ml-4'>Comprehensive Quiz :Test your knowledge with a mix of quiz-type questions and hands-on practice. This assessment evaluates everything you’ve learned in the previous levels.</p>
                                <br />
                           <p className='font-light text-[1.25rem] ml-4'>
                            Progress to the Next Cycle :Once you pass Level 5, you’ll unlock the next set of levels, each introducing increasingly complex FSL signs and phrases.
                           </p>
                        </div>
                        <p className='font-light text-[1.25rem] ml-4' >This cycle repeats up to Level 50, with increasingly complex signs and words at higher levels.</p>
                    </div>

                    <div className='relative left-[15rem] -top-[30rem]'>
                         <DownloadBanner className='w-[600px] h-[300px]  flex justify-between items-start flex-col'>
                              
                                <h1 className="text-[3rem] font-bold w-[550px] text-[#FDEACC]">Learn, Play, and Sign with AI-Powered FSL</h1>
                                <p className="text-[1.5rem] w-[600px] text-[#FDEACC]">An interactive way to explore Filipino Sign Language with AI recognition and gesture-based learning.</p>
                                <DownloadBTN className='w-[400px] h-[65px] bg-[#5F8B4C] text-[#FAF3E0] text-4xl'></DownloadBTN>
                           </DownloadBanner>

                           <div className='w-[580px] h-max  bg-[#EBFFEE]/10 rounded-3xl p-4  shadow-[0_0px_20px_#BAA979] text-white relative  top-[10rem] -left-[2rem]'>
                            <h1 className='text-GreenSenyas text-[2rem]'>Technical Support</h1>
                            <h4 className='text-3xl font-light'>If you encounter any issues while using the app, don’t hesitate to reach out:</h4>
                            <ul className='list-disc text-2xl font-light ml-4'>
                                <li className='m-2'>In-App Help Center :Access FAQs and troubleshooting guides directly within the app.</li>
                                <li>Contact Us :Email our support team at support@senyasfsl.com or visit our website for more assistance.</li>
                            </ul>
                           </div>
                    </div>
                </li>

                <li className='relative mx-auto my-0 w-[2px] mb-12
                bg-GreenSenyas
                before:bg-[#FFF085]
                  before:absolute
                  before:left-1/2
                  before:top-[-32px]
                  before:translate-x-[-50%]
                  before:w-4
                  before:h-4
                  before:rounded-full
                '>
                    <div className='w-[780px] h-max  text-white relative left-[5rem] -top-28'> 
                        <h1 className='text-5xl text-center'>--Offline Mode--</h1>
                        <p className='text-2xl font-light'>No internet? No problem! SenyasFSL offers an offline mode that allows you to access essential lessons and practice basic signs without connectivity. Sync your progress once you’re back online.</p>
                    </div>
                    <div className='w-[580px] h-max  text-white bg-[#EBFFEE]/10 rounded-3xl p-4   shadow-[0_0px_20px_#BAA979] relative right-[50rem] -top-[5rem]'>
                        <h3 className='text-GreenSenyas text-3xl'>Accessibility Features</h3>
                        <h5 className='text-2xl font-light'>We’ve designed SenyasFSL to be inclusive for all learners:</h5>
                        <ul className='list-disc font-light text-lg ml-6'>
                            <li><span className='text-OrangeSenyas'>Adjustable Learning Pace :</span> <br />Customize the difficulty settings to match your skill level and learning speed.</li>
                            <li><span className='text-OrangeSenyas'>Audio and Text Guidance :</span> <br />Enhance your experience with audio instructions and text-based guidance for better accessibility.</li>
                        </ul>
                    </div>
                </li>
                 
                <li className='relative mx-auto my-0 w-[2px] mb-12 last:pb-[7px] last:w-0 last:h-0
                before:bg-[#FFF085]
                  before:absolute
                  before:left-1/2
                  before:top-[-32px]
                  before:translate-x-[-50%]
                  before:w-4
                  before:h-4
                  before:rounded-full
                '>
                    <div className='w-[1580px]  p-4 text-white text-center relative right-[50rem]'>
                        <h1 className='text-5xl' >--Have Fun and Keep Learning!--</h1>
                        <p className='text-2xl font-light text-justify'>SenyasFSL makes learning Filipino Sign Language fun and engaging! Challenge yourself, track your progress, and become fluent in signing as you advance through the game.</p>
                    </div>
                </li>

            </ul>
       </div>
    </div>
    <Footer></Footer>
    </>
)
}

export default HowToUseSection;