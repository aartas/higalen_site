'use client';

import { useParams } from 'next/navigation';

const Booking = () => {
    const params = useParams();
    const { bookingId } = params;

    return (
        <div>
            <h1>Booking Code: {bookingId}</h1>
        </div>
    );
};

export default Booking;
