import { ArrowUp } from 'lucide-react'
import React from 'react'

const Card1 = () => {
  return (
    <>
    <div>Card1</div>
     <div className="card  bg-white w-75 h-140 max-w-md rounded-lg border-none shadow-2xl my-5 mx-6 py-4 px-6">
                <div className=" items-start  justify-between">
                    {/* <button className='bg-brown-200 rounded-4xl'>Best Seller</button> */}
        <img src='https://i.pinimg.com/736x/48/ab/d9/48abd9a39b91fe41b177483a71fc908e.jpg' alt='no image' className=' w-100 h-70 rounded-3xl object-cover drop-shadow-2xl'/>
        <br></br><button className=' bg-gray-700 rounded-2xl text-small text-white h-auto py-1 px-2'>Best Seller</button>
         </div>
         <div className="py-2">
            <h2 className='text-xl font-bold'>Nike Airforce 1 Preminum </h2>
            <h2 className='text-xl text-gray-500'>Own AirForce</h2>
            <p className='text-small text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, perspiciatis!</p>
         </div>
         <div className='other flex justify-between py-2 items-between'>
            {/* <p className='text-2xl text-bold'>$112</p> */}
            {/* <p>buy now</p> */}
            <button className=' bg-amber-100 rounded-2xl text-small text-gray-700 h-auto py-1 px-2 '>$111</button>
            <button className=' bg-gray-700 rounded-2xl text-small text-white h-auto py-1 px-2'>Buy Now <ArrowUp className='inline-block'/> </button>
            </div>  
    </div>
    </>
  )
}

export default Card1