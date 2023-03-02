package com.cdac.signupapi.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.signupapi.Entity.SignupBean;
import com.cdac.signupapi.Repository.SignupRepository;

@Service
public class SignupService {

    @Autowired
    //private SignupBean bean;
    private SignupRepository repository;
    
    public String addSignupData(SignupBean bean){
        try{
            repository.save(bean);

        }catch(Exception ex){
            return "Error occuring while inserting contact data!";

        }
        return "Signup data added.";
    }

    public java.util.List<SignupBean> getAllSignupData(){

        return repository.findAll();
    }
}
