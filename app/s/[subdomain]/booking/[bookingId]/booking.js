'use client';

import { useParams } from 'next/navigation';
import './style.css'
import { useContext, useState } from 'react';
import { WindowContext } from '@/context/WindowContext';
import DateSelect from './dateSelect';

const Booking = () => {
    // const params = useParams();
    // const { bookingId } = params;
    const { clientWidth } = useContext(WindowContext); // Assuming you have a way to get clientWidth from context or props

    const [step, setStep] = useState(1);

    const initialBookingData = {
        clinicId: null,
        consultType: null,
    };
    // console.log('clientWidth', clientWidth)

    return (
        <div className='booking_section_main_wrapper'>
            <div className='booking_section_wrapper'>
            <div className='booking_left_section'>Left Section</div>
            <div className='booking_right_section'>
                {
                    step === 1 && (
                        <DateSelect/>
                    )
                }
                {
                    step === 2 && (
                        <div>
                            <p>Step 2</p>
                        </div>
                    )
                }
            </div>
            </div>
        </div>
    );
};

export default Booking;
