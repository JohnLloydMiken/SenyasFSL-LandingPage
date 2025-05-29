import DownloadBTN from './DonwloadBTN.jsx'
import clsx from 'clsx';
function DownloadBanner({ children = "", className = '', ...rest }){
    return (
        <div className={clsx('' , className)}   {...rest}>
           
             {children}
        </div>
    )
}

export default DownloadBanner;