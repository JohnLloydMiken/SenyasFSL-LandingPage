

function DownloadBanner(){
    return (
        <div className="w-[520px] h-[315px] border flex flex-col justify-between">
            <h2 className="uppercase text-2xl">welcome to senyasfsl!</h2>
            <h1 className="text-[40px] font-bold w-[450px]">Learn, Play, and Sign with AI-Powered FSL</h1>
            <p className="text-lg">An interactive way to explore Filipino Sign Language with AI recognition and gesture-based learning.</p>
            <button className="w-[350px] h-[65px] bg-[#000000] rounded-full text-[#FAF3E0] text-[1.75rem] italic">Download Now!</button>
        </div>
    )
}

export default DownloadBanner;