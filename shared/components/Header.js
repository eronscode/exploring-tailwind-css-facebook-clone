import React from 'react'
import Image from "next/image";

function Header() {
    return (
        <div className="l">
           <div className='flex item-center'>
               <Image
               src={'/images/fb.png'}
               width={40}
               height={40}
               alt="logo" />
           </div>
           <div>

           </div>
           <div></div>
        </div>
    )
}

export default Header
