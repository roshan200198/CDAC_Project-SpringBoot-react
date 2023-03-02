import axios from "axios";
//import bookingjsx from "../pages/booking/bookingjsx";

const BOOKING_API_BASE_URL = "http://localhost:8084/booking"
const BOOKING_GETAPI_BASE_URL = "http://localhost:8084/viewbooking"

class BookingService {

    getBooking(){
        return axios.get(BOOKING_GETAPI_BASE_URL, {
            headers: {
              "access-control-allow-origin": "*",
            },
          }); 
        

  }

    createBooking(booking) {
        return axios.post(BOOKING_API_BASE_URL, booking, {
          headers: {
            "access-control-allow-origin": "*",
          },
        });
      }
}

export default new BookingService;