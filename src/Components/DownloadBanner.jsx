import DownloadBTN from './DonwloadBTN.jsx'

function DownloadBanner(){
    return (
        <div className="w-[720px] h-[350px]  flex flex-col justify-between ">
            <h2 className="uppercase text-3xl">welcome to senyasfsl!</h2>
            <h1 className="text-[3rem] font-bold w-[550px]">Learn, Play, and Sign with AI-Powered FSL</h1>
            <p className="text-[1.5rem] w-[600px]">An interactive way to explore Filipino Sign Language with AI recognition and gesture-based learning.</p>
           <DownloadBTN className='w-[400px] h-[65px] bg-[#000000] text-[#FAF3E0]'></DownloadBTN>
        </div>
    )
}

export default DownloadBanner;