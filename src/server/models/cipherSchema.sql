DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id serial primary key, 
  username varchar not null unique,
  password varchar,
  firstname varchar,
  email text not null unique,
  lastname varchar,
  score int,
  sequence integer
);

CREATE TABLE codechallenges (
  id serial primary key,
  challenge text
);

INSERT INTO codechallenges (challenge) 
VALUES('let counter = 0;<br/>for (let i = 0; i < array.length; i++) {<br/>&nbsp;&nbsp;counter += 1;<br/>}');

INSERT INTO codechallenges (challenge) 
VALUES('function squareNum(num){<br/>&nbsp;&nbsp;return num*num;<br/>};');

INSERT INTO codechallenges (challenge) 
VALUES('function add(a, b) {<br/>&nbsp;&nbsp;return a + b;<br/>}');

INSERT INTO codechallenges (challenge) 
VALUES('let sum = arr.reduce((acc, val) => {<br/>&nbsp;&nbsp;return acc + val;<br/>});');
