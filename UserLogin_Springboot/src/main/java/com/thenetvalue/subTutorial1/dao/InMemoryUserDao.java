package com.thenetvalue.subTutorial1.dao;

import com.thenetvalue.subTutorial1.model.User;
import com.thenetvalue.subTutorial1.repository.InMemoriDatabase;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository(value="firstUserDao")
public class InMemoryUserDao implements UserDao {

    @Override
    public int addUser(User user) {
        return InMemoriDatabase.addUser(user);
    }

    @Override
    public User getUserById(int id) {
        return InMemoriDatabase.getUserById(id);
    }

    @Override
    public List<User> getAllUser() {
        return InMemoriDatabase.getAllUser();
    }

    @Override
    public User updateUser(int id, User user) {
        return InMemoriDatabase.updateUser(id, user);
    }

    @Override
    public User getUserByUsername(String username) {
        return InMemoriDatabase.getUserByUsername(username);
    }

    @Override
    public User getUserByEmail(String email) {
        return InMemoriDatabase.getUserByEmail(email);
    }

    @Override
    public int deleteUserById(int id) {
        return InMemoriDatabase.deleteUserById(id);
    }
}
