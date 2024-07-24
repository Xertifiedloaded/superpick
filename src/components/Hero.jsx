import React from 'react'

export default function Hero() {
    return (
        <>
            <div className='text-center mt-5 '>
                <h1 className='text-[#1A5219]  font-700 lg:leading-[1.4] xs:text-2xl md:text-4xl lg:text-5xl'>STAY AHEAD OF THE GAME, <br /> ALL FOR FREE</h1>
                <p className='text-[#808080] xs:w-[90%]  md:w-[70%] lg:w-[40%] mx-auto'>From Analysis to Victory, Elevate your football knowledge with our cutting edge Prediction Platform</p>
            </div>
            <div className='hero lg:bg-cover lg:h-[700px] xs:h-[700px] flex xs:items-center justify-end mt-6'>
                <div className='lg:w-[50%] xs:w-full xs:my-0 lg:my-[120px] lg:mx-[50px]'>
                    <h1 className='lg:text-[#1A5219] text-center lg:text-5xl xs:text-4xl xs:text-[#E80000]   font-700 '>9JA PARROT PICKS</h1>
                    <div className='lg:w-[70%] mt-4 lg:mx-auto flex justify-center '>
                        <p className='text-center'>Correctly predict the final scores of 3 out of 5 football matches for a chance to win <span className='text-[#E80000] font-600'>One million Naira</span> cash and other amazing Consolation prizes.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
