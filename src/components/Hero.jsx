import React from 'react'
import {FaTwitter, FaFacebook, FaLinkedin, FaArrowDown} from 'react-icons/fa';
import avatar from '../assets/avatar.png';

const Hero = () => {

    const SOCIAL =[
        {
            id: 1,
            link: "https://twitter.com",
            icon: <FaTwitter />,
        },
        {
            id: 2,
            link: "https://facebook.com",
            icon: <FaFacebook />,
        },
        {
            id: 3,
            link: "https://LinkedIn.com",
            icon: <FaLinkedin />,
        },
    ];

    window.addEventListener('scroll',function(){
        const downArrow = document.querySelector(".down-arrow");
        if (this.scrollY >= 90) downArrow.classList.add('hide-down-arrow');
        else downArrow.classList.remove('hide-down-arrow');
    })
  return (
    <section className='min-h-screen flex flex-col justify-start items-center p-5 text-center'>
        <h2 className='text-5xl text-dark-950 dark:text-amber-600 font-medium uppercase'>Mission Movement</h2>
        <h3 className='py-3 text-2xl'>Coaching program</h3>
        <p className='max-w-xl font-light text-gray-500'>
        <span className="animate-pulse text-4xl">⚔️</span> Creating a pathway for you to become .
        </p>
        {/* {SOCIAL} */}
        <div className='flex justify-evenly py-8 lg:py-16 text-3xl w-full md:w-1/3'>
            {SOCIAL.map(({id, link, icon})=>(
                <a href={link}key={id}
                target='_blank'
                rel='noopener noreferrer'
                className='cursor-pointer duration-300 hover:text-amber-600 hover:scale-125'>{icon}</a>
            ))}
        </div>
            {/* avatar and resume */}
            <div>
                <img src={avatar} alt="imagine" className='w-60 h-60 md:w-72 md:h-72 object-cover object-top  bg-gradient-to-b from-gray-800  rounded-xl pt-5 dark:bg-gradient-to-b dark:from-gray-300'/>
                <a href='/CV - Justin Peeters copy.pdf' download={true} 
                className='flex items-center justify-center mt-10 
                 bg-gray-400  
                dark:bg-amber-600 
                text-white py-2 rounded-lg
               hover:bg-amber-600 dark:hover:bg-gray-400
                cursor-pointer hover:scale-105 duration-200'>
                Resume</a>
           </div>
            {/* arrow down animation */}
        <div className='mt-5 down-arrow'>
            <FaArrowDown className='text-lime-950 dark:text-amber-600text-2xl animate-bounce'/>
        </div>
    </section>
  )
}

export default Hero