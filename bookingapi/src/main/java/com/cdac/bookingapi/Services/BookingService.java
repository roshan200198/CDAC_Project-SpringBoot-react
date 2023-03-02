package com.cdac.bookingapi.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.bookingapi.Entity.BookingBean;
import com.cdac.bookingapi.Repository.BookingRepository;

@Service
public class BookingService {
    
    @Autowired
    private BookingRepository repository;
        
        public String addBookingData(BookingBean bean){
             try{

                repository.save(bean);

            } catch(Exception ex) {

                return "Error occuring while inserting booking data!";
    
            }
             return "Booking data added.";
        }

    public java.util.List<BookingBean> getAllBookingData(){

        return repository.findAll();
    }
}
