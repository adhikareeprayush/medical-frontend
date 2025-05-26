import React from 'react'
import calender from '../../../assets/icons/calender.png'

const images = {
  calender: calender,
};

const AppointmentSec = (props) => {
    const { styles } = props;
    return (
    <div className={`flex gap-2 py-2 px-4 items-center justify-center bg-primary rounded-md ${styles}`}>
        <p className='text-white'>Book an Appointment</p>
        <img className='w-5 h-5' src={calender} alt="" />
    </div>
  )
}

export default AppointmentSec