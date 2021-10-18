package com.thenetvalue.subTutorial1.repository;

import com.thenetvalue.subTutorial1.model.User;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class InMemoriDatabase {//simula un database usero questa classe come un oggetto statico

    static  public int lastIndex = 0;
    static public Map<Integer,User> users = new HashMap<>();

    public static int addUser(User user) {//aggiunge un id al nostro DB in memoria
        user.setId(++lastIndex);//imposta l'id dell'utente user
        users.put(user.getId(), user);
        return 1;
    }

    public static User getUserById(int id) {//restituisce l'oggetto user in base al suo id
        return users.get(id);
    }

    public static List<User> getAllUser() {//restituisce tutti gli user
        return users.values().stream().toList();
    }

    public static User updateUser(int id, User user) { //restituisce l'user che ha id uguale a quello passato come parametro
        List<User> resultUsers = users.values().stream().toList();
        User resultUser = null;
        for(User u : resultUsers)
            if(u.getId()==id) {
                u.setUsername(user.getUsername());
                u.setEmail(user.getEmail());
                u.setFirstName(user.getFirstName());
                u.setLastName(user.getLastName());
                u.setPassword(user.getPassword());
                resultUser=u;
                break;
            }
        return resultUser;
    }

    public static User getUserByUsername(String username) { //restituisce l'user che ha username uguale a quello passato come parametro
        List<User> resultUsers = users.values().stream().toList();
        for(User u : resultUsers)
            if(u.getUsername().equals(username)) {
                return u;
            }
        return null;
    }

    public static User getUserByEmail(String email) { //restituisce l'user che ha username uguale a quello passato come parametro
        List<User> resultUsers = users.values().stream().toList();
        for(User u : resultUsers)
            if(u.getEmail().equals(email)) {
                return u;
            }
        return null;
    }

    public static int deleteUserById(int id) { //cancella le informazioni relative all'utente con identificativo uguale ad id
        List<User> resultUsers = users.values().stream().toList();
        for(User u : resultUsers) {
            if (u.getId() == id) {
                users.remove(id);
                return 1;
            }
        }
        return 0;
    }
}
