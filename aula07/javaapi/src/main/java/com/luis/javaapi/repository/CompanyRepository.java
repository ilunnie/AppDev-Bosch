package com.luis.javaapi.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.luis.javaapi.model.CompanyModel;

public interface CompanyRepository extends MongoRepository<CompanyModel, String> {

    @Query("{'name': ?0}")
    List<CompanyModel> findByName(String name);
}
