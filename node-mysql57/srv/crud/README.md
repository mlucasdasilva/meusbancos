
# Quick Start

## Criar banco
   node dbcreate.js

## Executar aplicacao:
   nodemon script.js


# Tutorial sobre como foi criada esta app crud

    mkdir crud
    cd crud
    npm init
    npm i --s express express-handlebars mongoose body-parser
    npm i --s express express-handlebars mysql body-parser
    npm i -g nodemon

# Tutorial para criação do banco de dados

   CREATE DATABASE IF NOT EXISTS learners;
   USE learners;
   CREATE TABLE IF NOT EXISTS learnerdetails (
     learner_id INT NOT NULL AUTO_INCREMENT,
     learner_name VARCHAR(255),
     learner_email VARCHAR(255),
     course_id INT,
     PRIMARY KEY(learner_id)
   );
   INSERT INTO learnerdetails ( learner_name, learner_email, course_id ) VALUES ("john","john@mail.com",50);
   INSERT INTO learnerdetails ( learner_name, learner_email, course_id ) VALUES ("mary","mary@mail.com",50);
   INSERT INTO learnerdetails ( learner_name, learner_email, course_id ) VALUES ("peter","peter@mail.com",50);

   DROP PROCEDURE IF EXISTS `learnerAddOrEdit`;
   DELIMITER $$
   CREATE DEFINER=`root`@`localhost` PROCEDURE `learnerAddOrEdit`(
     IN _learner_id INT,
     IN _learner_name VARCHAR(255),
     IN _learner_email VARCHAR(255),
     IN _course_id INT
   )
   BEGIN
     IF _learner_id = 0 THEN
     INSERT INTO learnerdetails(learner_name,learner_email,course_id)
     VALUES (_learner_name,_learner_email,_course_id);
     SET _learner_id = last_insert_id();
     ELSE
     UPDATE learnerdetails
     SET
     learner_name = _learner_name,
     learner_email = _learner_email,
     course_id = _course_id
     WHERE learner_id = _learner_id;
     END IF;
     SELECT _learner_id AS 'learner_id';
   END $$
   DELIMITER ;


# Tutorial comandos curl - http  GET, POST, PUT and DELETE

    curl http://172.18.34.75:4000/learners
    curl -v http://172.18.34.75:4000/learners
    curl -o out.json http://172.18.34.75:4000/learners

## GET

    curl        http://172.18.34.75:4000/learners
    curl -X GET http://172.18.34.75:4000/learners

## POST

    curl         -d '{"learner_name":"xana","learner_email":"xana@mail.com","course_id":50}' -H 'Content-Type: application/json' http://172.18.34.75:4000/learners
    curl -X POST -d '{"learner_name":"xana","learner_email":"xana@mail.com","course_id":50}' -H 'Content-Type: application/json' http://172.18.34.75:4000/learners
    curl -X POST -d '{"learner_name":"paul","learner_email":"paul@mail.com","course_id":50}' -H 'Content-Type: application/json' http://172.18.34.75:4000/learners
    curl -X POST -d @request.json -H 'Content-Type: application/json' http://172.18.34.75:4000/learners

## PUT

    curl -X PUT  -d '{"learner_id":1,"learner_name":"john","learner_email":"john.2000@mail.com","course_id":51}' -H 'Content-Type: application/json' http://172.18.34.75:4000/learners
    curl -X PUT  -d '{"learner_id":4,"learner_name":"xana","learner_email":"xana@mail.com","course_id":51}' -H 'Content-Type: application/json' http://172.18.34.75:4000/learners
    curl -X PUT  -d '{"learner_id":4,"learner_name":"xana","learner_email":"xana@mail.com","course_id":52}' -H 'Content-Type: application/json' http://172.18.34.75:4000/learners
    curl -X PUT  -d @request.json -H 'Content-Type: application/json' http://172.18.34.75:4000/learners

## DELETE

    curl -X DELETE http://172.18.34.75:4000/learners/1


# refs.:
https://www.edureka.co/blog/node-js-mysql-tutorial/
https://www.baeldung.com/curl-rest

