package com.cdac.signupapi.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.signupapi.Entity.SignupBean;
import com.cdac.signupapi.Services.SignupService;
import org.springframework.web.bind.annotation.RequestMethod;


@RestController
public class SignupController {

    @Autowired
    private SignupService service;

    @RequestMapping(value="/signup", method=RequestMethod.POST)
    @CrossOrigin(origins = "*")
    public String postSignupData(@RequestBody SignupBean bean) {
        
        System.out.println("We are in post controller");
        return service.addSignupData(bean);
    }

    @GetMapping("/viewsignup")
    @CrossOrigin(origins = "*")
     public java.util.List<SignupBean> viewContact(SignupBean bean){
     return service.getAllSignupData();
     }
    
    
}
