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

 CREATE TABLE codechallenges(
   id serial primary key,
   challenge text
 );


 INSERT INTO codechallenges (challenge) 
 VALUES('for (let i = 0; i < cars.length; i+=1) { 
  text += cars[i] + "paints";
  }');
