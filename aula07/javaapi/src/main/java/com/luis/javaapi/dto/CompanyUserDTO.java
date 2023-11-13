package com.luis.javaapi.dto;

import java.util.List;

import com.luis.javaapi.model.CompanyModel;
import com.luis.javaapi.model.UserModel;

import lombok.Data;

@Data
public class CompanyUserDTO {
    private List<UserModel> userList;
    private CompanyModel company;
}
