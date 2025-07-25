const BookingPage = async (props) => {
    const params = await props.params;
    const { bookingId } = params;


    return (
        <div>
            <h1>Booking Code: {bookingId}</h1>
        </div>
    );
}

export default BookingPage;