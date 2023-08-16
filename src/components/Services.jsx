import React from 'react'
import Section from './common/Section';
import commerce from '../assets/commerce.png';
import mobile from '../assets/mobile.png';
import research from '../assets/research.png';
import web from '../assets/web.png';

const Services = () => {
  const services =[
    {
      id:1,
      image: commerce,
      title: "ECommerce website",
    },
    {
      id:2,
      image: mobile,
      title: "Mobile development",
    },
    {
      id:3,
      image: web,
      title: "Web development",
    },
    {
      id:4,
      image: research,
      title: "Research and development",
    },
  ];

  return (
    <Section 
    title="Services ⛏" 
    subtitle="Here are all the services I provide to my clients. 
    I hope I offer the service that you are looking for. If you don't find what you are looking for than please send me an email
    ">
  <div className='grid gap-10 lg:grid-cols-2'>
    {services.map(({id,image,title}) => (
        <div key={id} className='flex flex-col items-center justify-center p-5 shadow-lg shadow-gray-800 dark:shadow-gray-300 rounded-xl duration-300 ease-in-out hover:scale-110'>
          <img src={image} alt={title} className='w-36 h-36 md:w-44 md:h-44 object-contain'/>
          <h3 className='mt-5 text-base'>{title}</h3>
        </div>
    ))}
    </div>
    </Section>
  );
};

export default Services;