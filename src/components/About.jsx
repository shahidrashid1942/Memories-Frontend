import React from 'react'

function About() {
    return (
        <div className='min-h-[80dvh] flex justify-center items-center'>
            <div className='flex flex-col space-y-2 p-4 justify-center items-center'>
                <p className='text-justify'>Welcome to our note-taking app built with the powerful MERN stack. With intuitive interfaces and seamless integration, our platform enables you to effortlessly create, manage, and access your notes from anywhere. Experience the convenience of modern technology as you stay organized and productive throughout your day.</p>
                <a href="https://shahidrashid.vercel.app" target="_blank"><button className='border border-2px px-1 py-2 rounded btn glass'>Contact Me</button></a>
            </div>
        </div>
    )
}

export default About