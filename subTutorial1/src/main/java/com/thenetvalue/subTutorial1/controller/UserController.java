package com.thenetvalue.subTutorial1.controller;

import com.thenetvalue.subTutorial1.model.User;
import com.thenetvalue.subTutorial1.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {


    private UserService userService;

    @Autowired
    public UserController(UserService userSevice) {
        this.userService = userSevice;
    }

    @PostMapping("/")//espone il metodo nella rotta http://localhost:/users/
    public User  addUser(@RequestBody User user) {
        return  userService.addUser(user);
    }

    //espone il metodo nella rotta http:localhost:8080/users/login/
    @PatchMapping("/login/")
    public User loginUser(@RequestParam("em") String email, @RequestParam("wr") String password) {
        return userService.checkLogin(email, password);
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
    public User updateUser(@PathVariable("id") int id, @RequestBody User user) {
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
    public boolean deleteUserById(@PathVariable("id") int id) {
        return userService.deleteUserById(id);
    }
}



