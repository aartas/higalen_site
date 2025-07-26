'use client';

import { useContext, useState } from 'react';
import { WindowContext } from '@/context/WindowContext';
import DateSelect from './dateSelect';
import SelectTime from './selectTime';
import './style.css'

const Booking = () => {
    // const params = useParams();
    // const { bookingId } = params;
    const { clientWidth } = useContext(WindowContext); // Assuming you have a way to get clientWidth from context or props

    const initialBookingData = {
        clinicDetails: {},
        consultType: null,
    };

    const [step, setStep] = useState(1);
    const [bookingDetails, setBookingDetails] = useState(initialBookingData);

    const nextPage = () => {
        setStep(step + 1);
    };
    const prevPage = () => {
        setStep(step - 1);
    };

    const updateBookingData = (data, step) => {
        setBookingDetails(data);

        if (step === 6) {
            // onSubmitCreateWorkspace(data);
        } else {
            nextPage();
        }
    };

    return (
        <div className='booking_section_main_wrapper'>
            <div className='booking_section_wrapper'>
                <div className='booking_left_section'>Left Section</div>
                <div className='booking_right_section'>
                    {
                        step === 1 && (
                            <DateSelect
                                nextPage={nextPage}
                                bookingDetails={bookingDetails}
                                updateBookingData={updateBookingData}
                            />
                        )
                    }
                    {
                        step === 2 && (
                           <SelectTime />
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Booking;
