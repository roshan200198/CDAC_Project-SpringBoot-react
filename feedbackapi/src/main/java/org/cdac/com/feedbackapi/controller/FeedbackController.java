package org.cdac.com.feedbackapi.controller;

import java.util.List;

import org.cdac.com.feedbackapi.entity.FeedbackBean;
import org.cdac.com.feedbackapi.service.FeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController                              //used bcoz here view section not declaired. it is in react.js
public class FeedbackController {

    @Autowired
    private FeedbackService service;

    @RequestMapping(method = RequestMethod.POST, value = "/submitfeedback")
    @CrossOrigin(origins = "*")
    public String addUsersFeedbackData(@RequestBody FeedbackBean bean){

    System.out.println("Add user method is working");
    return service.addFeedbackData(bean);

    
   }

   //To get feedback data

   @GetMapping("/viewfeedback") 
   @CrossOrigin(origins = "*")
   public List<FeedbackBean> getFeedbackData(){
     return service.getAllFeedback();
   }
   
  
    
}
