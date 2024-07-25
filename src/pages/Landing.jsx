import React from 'react'
import Hero from '../components/Hero'
import Button from '../components/Button'
import Fixtures from '../components/Fixtures';
import YouTubeEmbed from '../components/YoutubeEmbedded';
import Carousel from '../components/Carousel';
import { testimonial } from '../utils';


export default function Landing() {
    return (
        <>
            <Hero />
            <div className='text-center'>
                <Button text='black' children='Get started' />
            </div>
            <Fixtures />
            <YouTubeEmbed />
            {/* <Carousel /> */}
            <div className='w-[95%] mt-[100px] mx-auto'>
                <div className='text-center lg:w-[60%] xs:w-full mx-auto'>
                    <h1 className='text-[#216A20] xs:text-4xl md:text-5xl'>Testimonials</h1>
                    <p className='text-[#808080] xs:text-sm md:text-md mt-3'>At 9ja Parrot picks, we take pride in delivering an exceptional Prediction experience that keeps our users coming back for more. But don’t just take our words for it, Hear what our satisfied customers have to say</p>
                </div>
                <div className='grid xs:grid-cols-1 mt-[100px] gap-3 sm:grid-cols-2 md:grid-cols-3'>
                    {
                        testimonial.map((items, idx) => {
                            return (
                                <div className='bg-white xs:mt-5 md:mt-0  rounded-md border-2 border-[#9ABF9A]'>
                                    <div className='w-full relative  bg-red-400 '>
                                        <img className='w-16 left-[45%] right-[45%] top-[-30px] absolute inline-block h-16' src={items.photo} alt="" />
                                    </div>
                                    <div className='text-center p-12'>
                                        <h1 className='text-[#000000] mb-2 border-b pb-2'>{items.name}</h1>
                                        <p className='text-xs text-[#808080] leading-[1.7]'>{items.content}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
}