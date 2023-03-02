package com.cdac.contactapi.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.contactapi.Bean.ContactBean;
import com.cdac.contactapi.Repository.ContactRepository;

import antlr.collections.List;

@Service
public class ContactService {

    @Autowired
    private ContactRepository repository;

    public String addContactData(ContactBean bean){
        try{
            repository.save(bean);

        }catch(Exception ex){
            return "Error occuring while inserting contact data!";

        }
        return "Contact data added.";
    }

    public java.util.List<ContactBean> getAllContact(){

        return repository.findAll();
    }
    
}
