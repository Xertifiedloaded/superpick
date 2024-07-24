import React from 'react'
import Hero from '../components/Hero'
import Button from '../components/Button'
import Fixtures from '../components/Fixtures';
import YouTubeEmbed from '../components/YoutubeEmbedded';


export default function Landing() {
    return (
        <>
            <Hero />
            <div className='text-center'>
                <Button text='black' children='Get started' />
            </div>
            <Fixtures />
            <YouTubeEmbed  />
        </>
    );
}