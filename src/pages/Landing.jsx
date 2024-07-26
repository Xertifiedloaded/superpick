import React, { useState } from 'react'
import Hero from '../components/Hero'
import Button from '../components/Button'
import Fixtures from '../components/Fixtures';
import YouTubeEmbed from '../components/YoutubeEmbedded';
import Carousel from '../components/Carousel';
import faqImage from '../assets/faq.svg'
import { faqData, testimonial } from '../utils';
import downChevron from '../assets/chevron-down.svg'

export default function Landing() {
    const [visible, setLimit] = useState(4)
    const [click, setClicked] = useState(false)
    const [readMore, setReadMore] = useState(false)
    const showMore = () => {
        setLimit((preValue) => preValue + 4)
    }
    const showLess = () => {
        setLimit((preValue) => preValue - 4)
    }
    const toggleFaq = idx => {
        if (click === idx) {
            return (
                setClicked(null)
            )
        }
        setClicked(idx)
    }
    return (
        <>
            <Hero />
            <div className='text-center'>
                <Button text='black' children='Get started' />
            </div>
            <Fixtures />
            <YouTubeEmbed />
            <div className="faq w-[95%] mt-[100px] mx-auto">
                <div className='border border-b border-t-0 border-l-0 border-r-0 border-b-[#808080]  '>
                    <h1 className='text-[#1A5219] text-xl py-2'>FAQs</h1>
                </div>
                <section className='md:flex xs:block mt-[50px] justify-between items-center'>
                    <div className='md:w-[50%] xs:w-full  md:mx-auto'>
                        <img className='w-[400px]' src={faqImage} alt="" />
                    </div>
                    <div className='md:w-[50%]'>
                        {faqData.slice(0, visible).map((items, idx) => (
                            <div onClick={() => toggleFaq(idx)} className='bg-white rounded-md px-4 py-5 flex justify-between items-center mt-3 '>
                                <ul>
                                    <li className='text-md text-[#545454]'>
                                        {items.question}
                                    </li>
                                    {click === idx && <small className={`${click === idx ? "translate-y-0 transition-all duration-500 ease-in-out" : "translate-y-[-40px] transition-all duration-500 ease-in-out"}`}>{items.answer}</small>}
                                </ul>
                                <img className={`w-4 h-4 ${click === idx ? 'rotate-180 transition-all duration-500 ease-in-out' : 'rotate-0 transition-all duration-500 ease-in-out'} `} src={downChevron} alt="" />
                            </div>
                        ))}
                        <div className='text-center mt-4'>
                            <button className='border border-[#8A8A8A] p-3 rounded-lg text-sm' >{visible <= 6 ? <p className='text-[#333333]' onClick={showMore}>More FAQs</p> :
                                <p className='text-[#333333] text-sm' onClick={showLess}>Show FAQs</p>}</button>
                        </div>
                    </div>
                </section>
            </div>
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