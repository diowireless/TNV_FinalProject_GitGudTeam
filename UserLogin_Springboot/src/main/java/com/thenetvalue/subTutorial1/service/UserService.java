package com.thenetvalue.subTutorial1.service;

import com.thenetvalue.subTutorial1.dao.UserRepositoryDAO;
import com.thenetvalue.subTutorial1.model.User;

import com.thenetvalue.subTutorial1.sequrity.Crypto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;


import org.springframework.stereotype.Service;


import java.util.Locale;
import java.util.Optional;

@Service
public class UserService  {

    UserRepositoryDAO userDao;

    //le annotation indicano che la classe qualificata da firstUserDao che implementa UserDao
    //dovra essere iniettata.
    @Autowired
    public UserService(@Qualifier("dbUserDao") UserRepositoryDAO userDao) {
        this.userDao = userDao;
    }

    //implementazioni dei metodi crud----------------------------------------------------------------------------------

    //restituisce l'utente salvato se l'inserimento è andato a buon fine altrimenti null
    public User addUser(User user) {
        if(user==null || user.equals("")) 
            return null;
        User result=userDao.findByEmail(user.getEmail());
        if(result==null ) {
            user.setPassword(Crypto.encrypt(user.getPassword()));
            userDao.save(user);
        }
        return result;
    }

    //restituiece l'utente User solo se la username e la passrword inviate sono corrette.
    public User checkLogin(String email, String password) {
        String passwordCripted = Crypto.encrypt(password);
        System.out.println("chiamato:"+email+":"+password);
        User result= userDao.findByEmail(email);

        if(result!=null)
            if(result.getPassword().equals(passwordCripted))
                return result;

        return null;
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
    public User updateUser(int id, User user) {
        user.setPassword(Crypto.encrypt(user.getPassword()));
        User result = userDao.findByEmail(user.getEmail());
            if(result != null && result.getId()!=id)
                return null;
            user.setId(id);
            result = userDao.save(user);
            if(result!=null && result.getId()!=0)
                return result;
            return null;
    }

    //restituisce l'utente user che ha username uguale a quello passato come parametro.
    public User getUserByUsername(String username) {
        User user = userDao.findByUsername(username);
        return  user;
    }

    //restituisce un utente user che ha la email uguale a quella passata come parametro
    public User getUserByEmail(String email) {
        User user = userDao.findByEmail(email);
        return  user;
    }


    //Elimina le inforamzioni relative all'utente user con id uguale a qyello passato per parametro
    public boolean deleteUserById(int id) {
        User result = userDao.findById(id).orElse(null);
            if(result != null) {
                userDao.deleteById(id);
                return true;
        }
        return false;
    }
}









