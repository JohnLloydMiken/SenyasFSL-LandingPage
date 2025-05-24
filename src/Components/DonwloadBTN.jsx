
import clsx from 'clsx';
function DownloadBTN ({ children = "DownLoad Now!", className = '', ...rest }){


    return(

        <>
         <button className={clsx(
        '  rounded-full  text-[1.75rem] italic',
        className
      )} 
        {...rest}
      >
        
       {children}
      </button>
         
        </>

    )
}

export default DownloadBTN;

