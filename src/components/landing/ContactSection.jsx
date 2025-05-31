import React from 'react'
// import phoneIcon from '../../assets/icons/contact/phone.svg'
// import locationIcon from '../../assets/icons/contact/location.svg'
// import mailIcon from '../../assets/icons/contact/mail.svg'
// import clockIcon from '../../assets/icons/contact/clock.svg'
import { FiPhoneCall } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { FiMail } from "react-icons/fi";
import { FiClock } from "react-icons/fi";


const contactCards = [
    {
      icon: FiPhoneCall,
      title: 'Emergency',
      content1: '(237) 681-812-255',
      content2: '(237) 666-331-894',
    },
    {
      icon: GrLocation,
      title: 'Location',
      content1: '0123 Some place',
      content2: '9876 Some country',
    },
    {
      icon: FiMail,
      title: 'Email',
      content1: 'fildineeesoe@gmil.com',
      content2: 'myebstudios@gmail.com',
    },
    {
      icon: FiClock,
      title: 'Working Hours',
      content1: 'Mon-Sat 09:00-20:00',
      content2: 'Sunday Emergency only',
    },
  ];
  

const ContactSection = () => {
  return (
    <section className='my-24 flex w-full flex-col items-center justify-center px-5 sm:px-6 lg:px-8'>
        <div className="my-6 text-center"> 
        <h1 className="text-secondary text-xl sm:text-2xl font-bold tracking-widest uppercase mb-[20px]">
          Get in Touch
        </h1>
        <p className="text-primary text-2xl sm:text-3xl font-display1">Contact</p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 w-full max-w-5xl'>
  {contactCards.map((card, index) => (
    <div
      key={index}
      className='group flex flex-col gap-2 pl-4 py-[38px] justify-center bg-accent rounded-md hover:bg-primary transition-colors duration-300'
    >
      <div className="flex h-9 w-9 items-center justify-center text-primary group-hover:text-accent transition-colors duration-300">
        <card.icon size={28} className="w-full h-full" />
      </div>

      <h3 className='text-primary text-xl font-body2 font-semibold tracking-wide group-hover:text-accent transition-colors duration-300'>
        {card.title}
      </h3>
      <div className='flex flex-col gap-1'>
        <p className='text-primary text-base tracking-wider group-hover:text-accent transition-colors duration-300'>
          {card.content1}
        </p>
        <p className='text-primary text-base tracking-wider group-hover:text-accent transition-colors duration-300'>
          {card.content2}
        </p>
      </div>
    </div>
  ))}
</div>

    </section>
  )
}

export default ContactSection