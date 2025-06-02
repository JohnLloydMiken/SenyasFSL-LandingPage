import React, { useEffect, useState } from 'react'
import Header from './Header.jsx'
import HeroBGRight from '../assets/img/HeroBGRight.png'
import UpRightArrow from '../assets/img/UpRightArrow.png'
import DownRightArrow from '../assets/img/DownRightArrow.png'
import Footer from './Footer.jsx'
function FAQs (){
    
       const tempStyle = `w-full h-[70px] flex items-center justify-center bg-FAQBS p-8 rounded-3xl shadow-[0_0px_20px_#000000]/25 transition-all duration-400 overflow-hidden`;

       const expandedStyle = `w-full h-max  bg-[#7A6731] p-8 rounded-3xl shadow-[0_0px_20px_#000000]/25 transition-all duration-400 overflow-hidden`;

       const list = [
        'Beginners who want to learn FSL.',
         'Hearing individuals who wish to communicate better with the Deaf community.',
         'Students aged 7 years and above.',
         'Teachers, advocates, and even members of the Deaf community who want to reinforce their FSL skills through interactive tools.'
        
       ]
         const list2 = [
         'AI-Powered Gesture Recognition: Real-time feedback on your sign accuracy.',
         'Interactive Lessons: Step-by-step FSL lessons with animations and video demonstrations.',
         'Mini-Games: Fun games like "Match the Sign," "Sign & Spell," and "Speed Signing" to reinforce learning.',
         'Story-Driven Gameplay: Progress through a narrative-driven adventure where signing is essential to solve challenges.',
         'Gamification Elements: Earn XP, unlock achievements, and compete on leaderboards.',
         'Offline Mode: Access basic lessons without an internet connection.',
         'Customizable Avatars: Personalize your profile and track your progress.'
        
       ]

       const faqQuestion = [
        'What is SenyasFSL?',
        'Who is SenyasFSL for?',
        'How does the gesture-based gameplay work?',
        'What features does SenyasFSL offer?',
        'Is SenyasFSL free to use?',
        'Are there multiplayer features in SenyasFSL?',
        'Is SenyasFSL suitable for beginners?',
        'What devices is SenyasFSL compatible with?',
        'Does SenyasFSL replace formal FSL training?',
        'How accurate is the AI-powered gesture recognition?'

       ]

       const faqAnswers = [
        'SenyasFSL is an innovative mobile application designed to teach Filipino Sign Language (FSL) in an interactive and engaging way. It combines gamification, gesture-based gameplay, and AI-powered sign recognition using TensorFlow to provide real-time feedback and make learning FSL fun and accessible for beginners and learners of all ages.',
        
        'SenyasFSL is designed for:',

        'The app uses AI-powered gesture recognition technology to identify and verify your hand signs in real time. As you practice signing, the app provides instant feedback on your accuracy. The gamified elements, such as XP (experience points), leveling up, achievements, and mini-games, keep you motivated and engaged throughout your learning journey.',

        'SenyasFSL includes a variety of features to enhance your learning experience:',

        'SenyasFSL offers both free and premium features. Basic lessons and core functionalities are available for free, while additional content, customization options, and advanced features may require in-app purchases or a subscription.',
        
        'The first version of SenyasFSL is a single-player app focused on providing an engaging and accessible learning experience. Multiplayer interactions and community features may be explored in future updates.',

        'Yes! The platform is designed to accommodate beginners, with structured lessons, interactive tutorials, and gamified challenges to make learning FSL fun and engaging.',

        'SenyasFSL is initially optimized for Android devices. Future updates may include compatibility with iOS devices, but for now, Android users can fully enjoy the app.',

        'No, SenyasFSL is not a substitute for certified FSL trainers or formal courses. It is a supplementary learning tool designed to make FSL education more accessible and engaging. For advanced learning, we recommend combining SenyasFSL with formal training programs',

        'The AI model used in SenyasFSL is trained on a dataset of FSL signs and is designed to recognize gestures accurately. However, factors such as lighting conditions, camera quality, and hand placement can affect accuracy. We continuously work to improve the AI performance based on user feedback.'
       ]
    
      const [expandedIndex, setExpandedIndex] = useState(null);
    

     
      
      const newState = (index)=>{
            setExpandedIndex(prev => (prev === index ? null : index ));
           
      }

    
      
      useEffect(()=>{
            document.body.style.backgroundColor = "#FAF3E0"
          }, []);

          return(

            <>
                <div className='w-full h-screen relative'>
                    <Header/>
                        
                   
                    <div style={{backgroundImage: `url(${HeroBGRight})`}} className='w-[550px] h-[1025px] rotate-45 z-0 bg-no-repeat left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2  absolute '>
                        
                    </div>
                    <div className='z-50 w-11/12 h-max  mx-auto my-8 text-center relative'>
                        <h1 className='text-6xl'>FREQUENTLY ASKED QUESTION</h1>
                        <p className='text-2xl z-50 text-justify font-light'>Got questions? We've got answers! Our FAQ section provides essential information about SenyasFSL, from how the gesture-based gameplay works to accessibility and learning features. Whether you're a beginner, educator, or sign language enthusiast, find everything you need to know here!</p>
                    </div>

                    <div className={ 
                        `
                        w-11/12 ${expandedIndex === 3 ? 'h-[1300px]' : 'h-full'} mx-auto z-50 relative flex justify-around items-center flex-col max-h-[2000px]  
                        ` }>
                        
                        {faqQuestion.map((item, index) =>(
                            <div 
                                key={index}
                                className={`${expandedIndex === index ? expandedStyle : tempStyle}`}
                                onClick={() => newState(index)}
                                >
                                <div className=' w-full h-max flex justify-between items-center '>
                                    <h1 className= {`text-2xl font-bold ${expandedIndex === index ?  'text-[#FFF085]' : 'text-black'}`}>{item}</h1>
                                    <img src={expandedIndex === index ? UpRightArrow : DownRightArrow } alt="UP Right Arrow" className='rounded-full' />

                                   
                                </div>
                                 {expandedIndex === index && (
                                        
                                        <div>
                                            <p className='text-white font-light text-2xl w-11/12  relative mx-auto'>
                                                {faqAnswers[index]}

                                                {expandedIndex === 1 && (
                                                    <ul className='list-disc ml-8'>
                                                        {list.map((element , i) => (
                                                            <li key={i} className='text-lg'>{element}</li>
                                                        ))}
                                                    </ul>
                                                )}

                                                   {expandedIndex === 3 && (
                                                    <ul className='list-disc ml-8'>
                                                        {list2.map((element , i) => (
                                                            <li key={i} className='text-lg'>{element}</li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </p>
                                        </div>
                                    )}
                            </div>
                        ))};

                       
                       
                    </div>

                    <div className='w-11/12 h-max mx-auto rounded-xl bg-[#1E1E1E] p-8 text-[#FDEACC] flex justify-center items-center my-12'>
                        <div className='w-1/2'>
                            <h1 className='text-4xl font-bold'>Still Have Question?</h1>
                            <p className='text-justify text-2xl font-light'>We’re here to help! If you didn’t find the answer you were looking for in our FAQ section, feel free to reach out to us. Our team is happy to assist with any inquiries or concerns you may have about SenyasFSL .</p>
                        </div>
                        <div className='w-1/2 flex justify-end items-center'>
                            <button className='bg-amber-200 p-4 w-1/3 h-2/12  text-3xl rounded-3xl text-black'>Get In Touch</button>
                        </div>
                    </div>

                    <Footer></Footer>
                </div>
            </>
          )
}
export default FAQs;