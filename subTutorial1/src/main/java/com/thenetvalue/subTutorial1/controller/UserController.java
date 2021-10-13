package com.thenetvalue.subTutorial1.controller;

import com.thenetvalue.subTutorial1.model.User;
import com.thenetvalue.subTutorial1.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
    UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/")//espone il metodo nella rotta http://localhost:/users/
    public String addUser(@RequestBody User user) {
        return userService.addUser(user);
    }

    @GetMapping("/{id}")//espone il metodo nella rotta http://localhost:/users/{id}
    public User getUserById(@PathVariable("id") int id) {
        return userService.getUserById(id);
    }

    @GetMapping("/")//espone il metodo nella rotta http://localhost:/users/
    //@CrossOrigin(origins = "http://localhost:4200")
    public Iterable<User> getAllUser() {
        return userService.getAllUsers();
    }

    @PutMapping("/update/{id}")//espone il metodo nella rotta http://localhost:/users/update/{id}
    public String updateUser(@PathVariable("id") int id, @RequestBody User user) {
        user.setId(id);
        return userService.updateUser(id, user);
    }

    @GetMapping("/username/{usname}")//espone il metodo nella rotta http://localhost:/users/username/{username}
    public User getUserByUsername(@PathVariable("usname") String username) {
        return userService.getUserByUsername(username);
    }

    @GetMapping("/mail/{email}")//espone il metodo nella rotta http://localhost:/users/mail/{email}
    public User getUserByEmail(@PathVariable("email") String email) {
        return userService.getUserByEmail(email);
    }

    @DeleteMapping("/delete/{id}")//espone il metodo nella rotta http://localhost:/users/delete/{id}
    public String deleteUserById(@PathVariable("id") int id) {
        return userService.deleteUserById(id);
    }
}



