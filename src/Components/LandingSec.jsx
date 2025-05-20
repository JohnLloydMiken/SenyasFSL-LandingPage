import Header from './Header.jsx'
import HeroBg from '../assets/img/HeroBg.png'
import HeroBGRight from '../assets/img/HeroBGRight.png'
import DownloadBanner from './DownloadBanner.jsx'

function LandingSec(){

    
    return (

      <>
      <div className='w-full h-max relative flex justify-center items-center flex-col'>
            <div className='absolute top-0 left-0 w-full z-50'>
                   <Header ></Header>
            </div>
            
             <div className='w-full h-max flex justify-center relative' >
            
                <div className= " w-1/2 h-[1230px]  max-w-[1230px] relative" >
                <img src={HeroBGRight} alt="" className='h-[1230px] w-[90%] relative left-[12rem]  ' />
                
                    <div className='absolute w-full top-[20rem] left-[7rem]  '>
                        <DownloadBanner></DownloadBanner>
                    </div>

                    <div className='absolute w-full top-[60rem] left-[7rem] '>
                        <h1 className='w-[55rem] italic font-bold text-[3rem]'>
                            Bridging <span className='text-[#FF8C00]'>Communication</span> Through Interactive Sign Language Learning
                        </h1>
                    </div>
                </div>  

                <div className= " w-1/2 h-[1027px] bg-no-repeat  [background-size:100%] bg-center max-w-[1027px] z-40" style={{backgroundImage: `url(${HeroBg})` }} >
                </div>
        
       </div>

      </div>
          
          
      </>
        
    )
}


export default LandingSec;