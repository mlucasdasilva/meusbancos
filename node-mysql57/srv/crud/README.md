

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

# Tutotial comandos curl - http  GET, POST, PUT and DELETE

    curl http://172.18.34.75:4000/learners
    curl -v http://172.18.34.75:4000/learners
    curl -o out.json http://172.18.34.75:4000/learners

## GET

    curl        http://172.18.34.75:4000/learners
    curl -X GET http://172.18.34.75:4000/learners

## POST

    curl         -d '{"id":9,"name":"baeldung"}' -H 'Content-Type: application/json' http://localhost:8082/spring-rest/foos/new
    curl -X POST -d '{"id":9,"name":"baeldung"}' -H 'Content-Type: application/json' http://localhost:8082/spring-rest/foos/new

## PUT

    curl -X PUT  -d @request.json -H 'Content-Type: application/json' http://localhost:8082/spring-rest/foos/9

## DELETE

    curl -X DELETE http://localhost:8082/spring-rest/foos/9


# refs.:
https://www.edureka.co/blog/node-js-mysql-tutorial/

