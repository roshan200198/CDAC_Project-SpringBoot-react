package com.cdac.bookingapi.Entity;

import java.net.PasswordAuthentication;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Table(name = "booking")
@NoArgsConstructor
@AllArgsConstructor
public class BookingBean {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    private String Name;
    private String Email;
    private String Phone;
    private String DOB;
    private String Gender;
    private String Address;
    private String Pickup_point;
    private String Payment; 
    
}
