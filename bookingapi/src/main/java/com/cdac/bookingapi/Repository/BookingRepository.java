package com.cdac.bookingapi.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cdac.bookingapi.Entity.BookingBean;

@Repository
public interface BookingRepository extends JpaRepository<BookingBean, Integer>{
    
    
}
