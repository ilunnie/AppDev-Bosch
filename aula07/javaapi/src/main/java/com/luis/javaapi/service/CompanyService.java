package com.luis.javaapi.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties.User;
import org.springframework.stereotype.Service;

import com.luis.javaapi.model.CompanyModel;
import com.luis.javaapi.model.UserModel;
import com.luis.javaapi.repository.CompanyRepository;

@Service
public class CompanyService {
    @Autowired
    private CompanyRepository companyRepository;
    private UserService userService;

    public CompanyModel save(CompanyModel companyModel) {
        return this.companyRepository.save(companyModel);
    }

    public void save(String id, String name) {
        this.companyRepository.save(new CompanyModel(id, name));
    }

    public void addUser(CompanyModel company, UserModel user) {
        if(company.getListUser() == null) {
            List<UserModel> list = new List();
            company.setListUser(user);
        }
        company.getListUser().add(user);
    }

    public void addUser(String companyid, String userId) {
        Optional<CompanyModel> company = this.companyRepository.findById(companyid);
        Optional<UserModel> user = userService.findById(userId);

        if (company != null && user != null)
            this.addUser(company.get(), user.get());
    }

    public List<CompanyModel> findAll() {
        return this.companyRepository.findAll();
    }

    public Optional<CompanyModel> findById(String id) {
        return this.companyRepository.findById(id);
    }

    public List<CompanyModel> findByName(String name) {
        return this.companyRepository.findByName(name);
    }
}
