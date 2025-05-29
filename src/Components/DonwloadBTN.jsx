
import clsx from 'clsx';
function DownloadBTN ({ children = "DownLoad Now!", className = '', ...rest }){


    return(

        <>
         <button className={clsx(
        '  rounded-full   italic hover:underline hover:cursor-pointer',
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

