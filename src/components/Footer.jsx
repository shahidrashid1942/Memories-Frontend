import React from 'react';
import { Github, Facebook, Twitter } from '../svg icons/moon';

function Footer() {
    
    return (
        <div className='flex flex-col justify-center items-center space-y-2 p-2'>
        <hr className={`border-secondary border-2 w-[90%]` }  />
        <div className='flex space-x-3 items-center justify-center'>
            <a href="https://github.com/shahidrashid1942/" target='_blank'><Github/></a>
            <a href="https://facebook.com/shahidbhat.bhat.77" target='_blank'><Facebook /></a>
            <a href="https://twitter.com/shahidrashid09" target='_blank'><Twitter /></a>
        </div>
        <p className='text-sm'>&copy; 2024 Made By Shahid Rashid</p>
        </div>
    )
}

export default Footer