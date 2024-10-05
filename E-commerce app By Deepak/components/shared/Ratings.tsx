/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
//import rating from "../../public/star-icon.png";
//import Image from "next/image";

const Ratings = ({ratings}:{ratings:any}) => {
    ratings  = JSON.parse(ratings);
   
    return (
        <div className='flex items-center'>
            {
                Array(4).fill(1).map((dummyItem,idx)=> <img key={idx} src="https://cdn-icons-png.flaticon.com/512/8367/8367762.png" width={20} height={20} alt="rating" />)
            }
            <h1 className='text-[#007185] ml-2 font-medium' >{ratings.count} ratings</h1>
            
        </div>
    )
}

export default Ratings