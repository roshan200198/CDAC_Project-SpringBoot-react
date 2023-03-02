package org.cdac.com.feedbackapi.repository;

import org.cdac.com.feedbackapi.entity.FeedbackBean;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FeedbackRepository extends JpaRepository<FeedbackBean, Integer>{

    

    
}
