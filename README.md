
check system preferences that mysql is running

connect to the db by running `node server`

1. server.js
- sets up express
- loads + runs db
- loads routes

2. app/routes
- consists of 3 parts
  - an HTTP verb (GET, POST, PUT, DELETE)
  - a URL path/pattern
  - a handler function 

3. app/controllers
- our api for the db
- we use this in our server routes

4. app/models/index
- defines / creates:
- db: sample (defined in db.config)
- table: books (defined in app/models/index.js )
  
in postman: 

post localhost:8080/

in browser: 

localhost:8080/


Test models: node app/models/book.model.js

{
"title": "hi",
"author": "me",
"release_date": null,
"subject": "a",
}

this will create the timestamps automatically