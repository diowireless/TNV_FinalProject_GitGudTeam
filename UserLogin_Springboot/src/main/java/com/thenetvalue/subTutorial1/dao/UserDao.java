package com.thenetvalue.subTutorial1.dao;

import com.thenetvalue.subTutorial1.model.User;

import java.util.List;

public interface UserDao {

    public int addUser(User user);
    public User getUserById(int id);
    public List<User> getAllUser();
    public User updateUser(int id, User user);
    public User getUserByUsername(String username);
    public User getUserByEmail(String email);
    public int deleteUserById(int id);
}
