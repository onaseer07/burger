     CREATE DATABASE burgers_db;
     USE burgers_db;
     CREATE TABLE burgers(
         id INT(10) NOT NULL AUTO_INCREMENT
         ,burger_name VARHCAR(30) NOT NULL
         ,devoured boolean
         ,PRIMARY KEY(id)
     );