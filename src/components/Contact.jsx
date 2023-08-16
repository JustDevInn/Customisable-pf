import React from 'react'
import Section from './common/Section'
import {FaTwitter, FaFacebook, FaLinkedin} from 'react-icons/fa'
import contact from '../assets/mobile.png';

const Contact = () => {

        const SOCIALS = [
            {
                id: 1,
                link:"https://twitter.com",
                icon: <FaTwitter />,
            },
            {
                id: 3,
                link:"https://Facebook.com",
                icon: <FaFacebook />,
            },
            {
                id: 2,
                link:"https://LinkedIn.com",
                icon: <FaLinkedin />,
            },
        ]

  return (
    <Section title="Contact 📞" subtitle="These are ways you can get in contact with me. Hope to hear form you soon :)">
        <div className='flex flex-col items-center justify-center gap-8 text-center'>
                    <div> 
                        <img src={contact} alt="contact info" className='w-32 h-32'/> 
                    </div>
                    <div>
                        <p className='max-w-xs md:max-w-lg font-extralight'>I am open to talk about freelance opportunities. Feel free to contact me via your preffered medium.</p>
                    </div>
                    <div className='flex w-full items-center justify-evenly text-3xl'>
                    {SOCIALS.map(({id, link, icon}) => (
                        <a href={link} target="_black" rel="noopener noreferrer" className='duration-200 ease-in-out hover:text-rose-600'
                        >
                        {icon}</a>
                    ))}
                    </div>
                    {/* bottom form */}
                    <div className='p-8 text-left w-full'>
                    {/* Get link from getform and insert in to action field in order for the form to work */}
                        <form action="" method="POST">
                            <div className='gap-4 w-full'>
                                <div className='flex flex-col '>
                                <label className='capitalize text-sm py-2 font-extralight'>name</label>
                                <input type="text" name="name" className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white'></input>
                                </div>
                                <div className='flex flex-col '>
                                <label className='capitalize text-sm py-2 font-extralight'>phone</label>
                                <input type="number" name="phone" className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white'></input>
                                </div>
                                <div className='flex flex-col '>
                                <label className='capitalize text-sm py-2 font-extralight'>email</label>
                                <input type="text" name="email" className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white'></input>
                                </div>
                                <div className='flex flex-col '>
                                <label className='capitalize text-sm py-2 font-extralight'>message</label>
                                <textarea name="message" rows="10" className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white resize-none'></textarea>
                                </div>
                            </div>
                            <div className='flex items-center justify-center'>
                                <button className='my-8 bg-gradient-to-r from-amber-600 to-lime-950 text-white px-6 py-3 uppercase rounded-md tracking-wider cursor-pointer hover:scale-105 duration-200'
                                >send message</button>
                            </div>
                        </form>
                    </div>
                    </div>
    </Section>
  )
}

export default Contact