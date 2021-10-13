package com.thenetvalue.subTutorial1.service;

import com.thenetvalue.subTutorial1.dao.UserRepositoryDAO;
import com.thenetvalue.subTutorial1.model.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    UserRepositoryDAO userDao;

    //le annotation indicano che la classe qualificata da firstUserDao che implementa UserDao
    //dovra essere iniettata.
    @Autowired
    public UserService(@Qualifier("dbUserDao") UserRepositoryDAO userDao) {
        this.userDao = userDao;
    }

    //implementazioni dei metodi crud----------------------------------------------------------------------------------

    //restituisce una stringa che indica il sucesso o meno dell'inserimento dell'utente user
    public String addUser(User user) {
        User result = userDao.save(user);
        if (result != null && result.getId() != 0)
            return "Utente inserito con sucesso nel DB";
        else
            return "Errore: Inserimento fallito";
    }

    //restituscie un oggetto di tipo user o null se non viene trovato
    public User getUserById(int id) {
        Optional<User> optionalUser = userDao.findById(id);
        return optionalUser.orElse(null);//equivalente result.get();
    }

    //restituisce tutti gli utenti registrati
    public Iterable<User> getAllUsers() {
        return userDao.findAll();
    }

    //Modifica i dati dell'utente con id uguale a quello passato come parametro
    public String updateUser(int id, User user) {
        user.setId(id);
        User result = userDao.save(user);
        if (result != null && result.getId() != 0)
            return "Utente inserito con sucesso nel DB";
        else
            return "Errore: Inserimento fallito";
    }

    //restituisce l'utente user che ha username uguale a quello passato come parametro.
    public User getUserByUsername(String username) {
        Optional<User> optionaUser = userDao.findByUsername(username);
        return  optionaUser.orElse(null);
    }

    //restituisce un utente user che ha la email uguale a quella passata come parametro
    public User getUserByEmail(String email) {
        Optional<User> optionaUser = userDao.findByEmail(email);
        return  optionaUser.orElse(null);
    }


    //Elimina le inforamzioni relative all'utente user con id uguale a qyello passato per parametro
    public String deleteUserById(int id) {
        User result = userDao.findById(id).orElse(null);
            if(result != null) {
                userDao.deleteById(id);
                return "Operazione delite eseguita con sucesso.";
        }
        return "Errore: operazione delete fallita";
    }

}









