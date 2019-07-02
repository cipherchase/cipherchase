DROP TABLE IF EXISTS users;

CREATE TABLE users(
   id serial primary key, 
   email text not null unique,
   firstname varchar,
   lastname varchar,
   password varchar,
   score int,
   sequence integer
 );