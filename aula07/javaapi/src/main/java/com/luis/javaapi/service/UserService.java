package com.luis.javaapi.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.luis.javaapi.model.UserModel;
import com.luis.javaapi.repository.UserRepository;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public UserModel save(UserModel userModel) {
        return this.userRepository.save(userModel);
    }

    public void save(String id, String name, short age) {
        this.userRepository.save(new UserModel(id, name, age));
    }

    public List<UserModel> findAll() {
        return (List<UserModel>) this.userRepository.findAll();
    }

    public Optional<UserModel> findById(String id) {
        return this.userRepository.findById(id);
    }

    public List<UserModel> findByName(String name) {
        return (List<UserModel>) this.userRepository.findByName(name);
    }

    public List<UserModel> findByAgeAndName(short age, String name) {
        return (List<UserModel>) this.userRepository.findByAgeAndName(age, name);
    }

    public void delete(String id) {
        this.userRepository.deleteById(id);
    }

    public void update(String id, String newName, short newAge) {
        Optional<UserModel> user = this.findById(id);

        if (user.isPresent()) {
            user.get().setName(newName);
            user.get().setAge(newAge);

            this.userRepository.save(user.get());
        }
    }
}
