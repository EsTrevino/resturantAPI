Restaurant API for backend practice
//*********************************************
packages used:

dependencies:
1) express - backend javascript framework for building backend web/mobile applications
2) mongoose - object mapper for working with MongoDB which is a  non relational database
3) body-parser -parse incoming request bodies in a middleware before your handlers, available under the req.body property

dev-dependencies:
1)nodemon - monitors changes to and refreshes server code after each save
2)eslint - style checker/ javascript linter
3)babel - transpiles es6 code into es5 code
4)babel-cli
5)babel-core
6)babel-eslint
7)babel-preset-es2015
8)babel-preset-stage-0
//************************************************************
//config files************************************************************
eslint Config options in package.json file:
1)ParserOptions
  a)ecmaVersion = 7;
  b)sourceType = "module"
2)env
  a)node = true;
3)rules
  a)"no-console": 0
  b)"no-unused-vars": 1

setup for .babelrc file:
1)presets
  a)"es2015"
  b)"stage-0"
  **for info on stage-0 preset see here:**
  https://stackoverflow.com/questions/37251552/whats-the-difference-between-babel-preset-stage-0-babel-preset-stage-1-etc
//***************************************************************************
//scripts for package.json*****************************************************
1) "dev": NODE_ENV=development nodemon -w src --exec \ babel-node src --presets es2015,stage-0"
2) "build": "babel src -s -D -d dist --presets es2015,stage-0"
**babel --help for more info on specific commands**
-s = source maps
-D = when compiling a directory copy over non-compilable files
-d = compile an input directory of modules into an output directory

3) "prestart": "npm run -s build""

4) "start": "NODE_ENV=production pm2 start dist"
  pm2 is a process manager that will watch node and make sure its running, like nodemon but for production

5) "lint": "eslint src"

  quick word on Source Maps:
    -Source maps are JSON files that contain information on how to map your transpiled source code back to their original source
    -if you have ever done programming in a compliled language like Objective-C, you can think of source maps as javascripts version of debug symbols

//****************************************************************************
------------------------------------------------------
1) setting up mongoDB for Node api
  a)in src folder, we created an index.js file and did basic server set up including importing config.passport
  b)created routes, middleware, and config folders along with their respective index.js
    -config just exported port variable to index.js in source and mongoUrl to db.js
    -routes setup mongo routes by using router variable to initialize instance of express using router variable to hold all of our routes
    -middleware index.js sets up middleware for use in routes index.js
  c) setup db.js file to export the connection function that the routes file will use
------------------------------------------------------
