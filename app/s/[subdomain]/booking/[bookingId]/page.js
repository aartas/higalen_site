// 'use client';
// import { useContext } from 'react';
// import { use } from 'react'; // <-- 👈 Required for unwrapping promises in RSC 2
// import { WindowContext } from '@/context/WindowContext';
import Booking from './booking';
const BookingPage = (props) => {
    // const { clientWidth } = useContext(WindowContext);

    // const { bookingId } = use(props.params); // 👈 Unwrap the promise

    return (
        <div>
            <Booking />
        </div>
    );
};

export default BookingPage;
