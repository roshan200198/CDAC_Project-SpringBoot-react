package com.cdac.bookingapi.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.bookingapi.Entity.BookingBean;
import com.cdac.bookingapi.Services.BookingService;

@RestController
public class BookingController {

    @Autowired
    private BookingService service;

    //@RequestMapping(value="/booking", method=RequestMethod.POST)
    @PostMapping("/booking")
    @CrossOrigin(origins = "*")
    public String postBookingData(@RequestBody BookingBean bean) {
        
        System.out.println("We are in post controller");
        System.out.println(bean);
        return service.addBookingData(bean);

    }

    @GetMapping("/viewbooking")
    @CrossOrigin(origins = "*")
     public java.util.List<BookingBean> viewBooking(BookingBean bean){
     return service.getAllBookingData();
     }
    
}
