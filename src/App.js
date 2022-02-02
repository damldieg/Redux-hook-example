import React from "react";
import BookingForm from "./components/BookingForm";
import BookingList from "./components/BookingList";
// import { useStore } from "./store/Store";

function App() {
  return (
    <>
      <h1>Booking System</h1>
      <BookingForm />
      <BookingList />
    </>
  );
}

export default App;
