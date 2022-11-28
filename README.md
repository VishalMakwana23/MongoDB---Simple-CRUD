# MongoDB---Simple-CRUD (Book Management)



## Emphasis

- The Aim of this app is to show how data is being passed via "Postman" and MongoDB

- It is an Assignment given by VNSGU .

- It's a simple Heroku App with MongoDB

## Requirements
- Nodejs 14.18.0 LTS and above
- Visual Studio Code or Other Editors

## SCHEMA:

    id: String,
    title: String,
    auther: String,
    publisher: String,
    price: String
    
    
 ## POST REQUESTS (POSTMAN):
 
 _ADD_
- add new Book

      {
        "newBook":{
        "id": "b1",
        "title": "OOP",
        "auther": "Balagurusamy",
        "publisher": "Neelkanth Publishers",
        "price": "1999"         
         }
      }
                
_RETRIEVE_
- fetch Book details based on Book Id

        http://localhost:5000/list

_UPDATE_
- update Book  

        {
        "title": "java",
        "auther": "James Gosling",
        "publisher": "Sun Microsystems",
        "price": "2999"
        }

_DELETE_
- delete Book

        http://localhost:5000/deleteBook/java

## Want to see the Postman Screenshots?
- [Click Here](https://github.com/VishalMakwana23/MongoDB---Simple-CRUD/tree/main/Postman)!

## Heroku app link...!
- [Click Here](https://simple--crud.herokuapp.com)!

## Heroku app link to see Data...!
- [Click Here to see data in heroku](https://simple--crud.herokuapp.com/list)!

## JACASCRIPT
https://vnsguacin-my.sharepoint.com/:f:/g/personal/vishalmakwana_dcs22n_vnsgu_ac_in/EhhtWfOMEfVGlTIw47TDJhYBzcNR0dojaHZsQfCpsPlaVg

## Node JS
https://vnsguacin-my.sharepoint.com/:f:/g/personal/vishalmakwana_dcs22n_vnsgu_ac_in/Eh6L9gfV62ZFo3Ie3xKuNhIBrtwTwtjkv1kKQn_qhFqTmQ?e=4GIncd

