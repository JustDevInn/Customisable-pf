import React from 'react';
import Section from './common/Section';
import avatar1 from '../assets/avatar1.png';
import avatar2 from '../assets/avatar2.png';
import avatar3 from '../assets/avatar3.png';

const Testimonials = () => {
    const TESTIMONIALS = [
        {
            id: 1,
            image: avatar1,
            name: "John",
            comment: 
            "Great work delivered!",
        },
        {
            id: 2,
            image: avatar2,
            name: "Doe",
            comment: 
            "Extremely happy with the end-result!",
        },
        {
            id: 3,
            image: avatar3,
            name: "Johny Doey",
            comment: 
            "Great work delivered, extremely happy with the end-result!",
        },
    ]
  return (
    <Section title="Testimonials 💬" subtitle="This is what my clients have to say about me, I accept clients from all around the world"
    >
    <div className='max-w-xl flex flex-col gap-8'>
        {TESTIMONIALS.map(({id, image, name, comment}) =>(
            <div className='flex p-4 justify-center items-center rounded-xl shadow-md shadow-gray-800 dark:shadow-gray-300 duration-300 ease-in-out hover:scale-125'>
                <div className='w-1/3' key={id}>
                    <img src={image} alt={name} className='w-20 h-20 object-cover object-top pt-2'/>
                </div>
                <div className='w-2/3 flex flex-col justify-center items-center gap-3 p-2'>
                    <h3 className='text-xl font-semibold'>{name}</h3>
                    <p className='text-sm font-extralight'>{comment}</p>
                </div>
            </div>

        ))}
    </div>

    </Section>
  )
}

export default Testimonials