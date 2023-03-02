package com.cdac.contactapi.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.query.Jpa21Utils;
import org.springframework.stereotype.Repository;

import com.cdac.contactapi.Bean.ContactBean;

@Repository
public interface ContactRepository extends JpaRepository<ContactBean, Integer>{
    
}
