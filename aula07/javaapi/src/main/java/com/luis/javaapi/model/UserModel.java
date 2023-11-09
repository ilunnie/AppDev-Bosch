package com.luis.javaapi.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;

@Document("user")
@AllArgsConstructor
@Data
public class UserModel {
    @Id private String id;
    private String name;
    private short age;

    public UserModel(String name, short age) {
        this.name = name;
        this.age = age;
    }

    public UserModel(String id) {
        this.id = id;
    }

    public UserModel() { }
}
