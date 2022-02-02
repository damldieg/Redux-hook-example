import React from 'react';
import { deleteBooking } from '../store/bookTableReducer';
import { useStore } from '../store/Store';

const BookingList = () => {
  const [state, dispatch] = useStore();
  const { bookings } = state;

  const handleDeleteABook = (id) => {
    dispatch(deleteBooking(id));
  }

  const Booking = ({ item }) => (
    <>
      <div key={item.id}>
        <div>
          <b>Guest name:</b> {item.name}
        </div>
        <div>
          <b>Number of Contact:</b> {item.numberOfContact}
        </div>
        <div>
          <b>Number of Guests:</b> {item.numberOfPeople}
        </div>
        <div>
          <b>Date and Time:</b> {new Date(item.dateTime).toString()}
        </div>
        <button type="button" onClick={() => handleDeleteABook(item.id)}>Delete</button>
        <hr />
      </div>
    </>
  );

  return (
    <>
      <h2>Bookings List</h2>
      {bookings.map((booking) => (
        <Booking key={booking.id} item={booking} />
      ))}
    </>
  );
};

export default BookingList;