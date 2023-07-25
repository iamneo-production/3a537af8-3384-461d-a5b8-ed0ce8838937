package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.NewsSaved;

public interface NewsSavedRepository  extends JpaRepository<NewsSaved,Long>{
    // public List<NewsSaved>  findByEmail();

    // public void deleteByEmail(String email);
     
}
