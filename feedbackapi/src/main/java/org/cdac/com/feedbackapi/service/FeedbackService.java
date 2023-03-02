package org.cdac.com.feedbackapi.service;

import org.cdac.com.feedbackapi.entity.FeedbackBean;
import org.cdac.com.feedbackapi.repository.FeedbackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import antlr.collections.List;


@Service
public class FeedbackService {

    @Autowired
    private FeedbackRepository repository;

    public String addFeedbackData(FeedbackBean bean){

        try{
            repository.save(bean);
            
        }catch(Exception ex){
            return "Error occured while inserting a data";
        }
        return "Feedback added!!";
        
    }

    public java.util.List<FeedbackBean> getAllFeedback(){
        return repository.findAll();           // select * from feedback
    }
}
