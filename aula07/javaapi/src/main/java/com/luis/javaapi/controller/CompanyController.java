package com.luis.javaapi.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.luis.javaapi.model.CompanyModel;
import com.luis.javaapi.model.UserModel;
import com.luis.javaapi.service.CompanyService;

@RestController
@RequestMapping("company")
public class CompanyController {
    @Autowired
    CompanyService companyService;

    @GetMapping({"", "/"})
    public List<CompanyModel> getAllCompanies()
    {
        return companyService.findAll();
    }

    @GetMapping("/?id={id}")
    public Optional<CompanyModel> findById(@PathVariable String id)
    {
        return companyService.findById(id);
    }

    @GetMapping("/{name}")
    public List<CompanyModel> getCompanyByName(@PathVariable String name)
    {
        return companyService.findByName(name);
    }

    @PostMapping({"", "/"})
    public void newCompany(@RequestBody CompanyModel company)
    {
        companyService.save(company);
    }

    @PostMapping("/adduser/{userid}")
    public void newUser(@RequestBody CompanyModel company, @PathVariable String userid)
    {
        Optional<UserModel> user = new UserController().findById(userid);

        if(user != null)
            companyService.addUser(company, user.get());
    }
}
