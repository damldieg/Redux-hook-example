export const ADD_BOOKING = "APP/BOOK_TABLE/ADD_BOOKING";
export const DELETE_BOOKING = "APP/BOOK_TABLE/DELETE_BOOKING";

//Crea y exporta el initialState con un array de reservas vacias
export const initialState = {
  bookings: [{
    id: '123',
    name: 'logan',
    numberOfContact: '12312321',
    numberOfPeople: 4,
    dateTime: '2020-07-21T10:00'
  },
  {
    id: '125',
    name: 'damian',
    numberOfContact: '135465465',
    numberOfPeople: 5,
    dateTime: '2020-07-21T20:00'
  }],
};

//Crea la accion para agregar una nueva reserva
export const addBooking = (booking) => ({
  type: ADD_BOOKING,
  booking,
});

export const deleteBooking = (id) => ({
  type: DELETE_BOOKING,
  id,
});

//Crea el reducer
export const bookTableReducer = (state = initialState, action) => {
  if (action.type === ADD_BOOKING) {
    return {
      ...state,
      bookings: state.bookings.concat(action.booking),
    };
  }
  if (action.type === DELETE_BOOKING) {
    return {
      ...state,
      bookings: state.bookings.filter(b => b.id !== action.id),
    };
  }
};
