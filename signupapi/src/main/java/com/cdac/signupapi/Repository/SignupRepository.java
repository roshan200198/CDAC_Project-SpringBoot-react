package com.cdac.signupapi.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.signupapi.Entity.SignupBean;

public interface SignupRepository extends JpaRepository<SignupBean, Integer> {
    
}
