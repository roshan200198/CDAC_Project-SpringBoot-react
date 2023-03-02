package com.cdac.contactapi.Bean;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.lang.NonNullFields;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

@Entity
@Table(name = "contact")
@Data
@NoArgsConstructor
@AllArgsConstructor

public class ContactBean {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    
    private Integer id;
    private String name;
    
    private String email;
    private String phone;
    private String message;


    
}
