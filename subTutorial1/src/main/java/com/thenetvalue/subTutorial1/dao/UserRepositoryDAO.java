package com.thenetvalue.subTutorial1.dao;

import com.thenetvalue.subTutorial1.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.Optional;

@Repository("dbUserDao")//queste annotazioni permettono di eseguire le operazioni crud base
@CrossOrigin(origins = "http://localhost:4200")
public interface UserRepositoryDAO extends CrudRepository<User, Integer> {

    Optional<User> findByUsername(String username) ;

    Optional<User> findByEmail(String email) ;

}
