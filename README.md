>An API Server made with Express
# Instagram Directory API Server

This is the API server for the Instagram Directory project. The project contains is like a Yellow Pages but for Instagram Business

# How it works

## Install Dependencies

Note: Instagram Directory requires Node.js v4 or newer

```bash
npm install
```

## scripts

The API ships with several convenience commands (runnable via `npm`):

  * `npm start`: start the server
  * `npm test`: run unit tests (TBD)
  * `npm run dev`: start the server with nodemon



  | METHOD 	| ENDPOINT           	| USAGE          	| RETURNS  	|   	|
  |--------	|--------------------	|----------------	|----------	|---	|
  | GET    	| /api/business/{id} 	| Get a business 	| business 	|   	|
  |        	|                    	|                	|          	|   	|
  |        	|                    	|                	|          	|   	|


## Contributing

Please fork and pull request against upstream master on a feature branch. Pretty please; provide unit tests and script
fixtures in the `test` directory.

### Continuous Integration

Travis tests every release against Node.js versions `4` and `6`.

[![Build Status](https://travis-ci.org/pelias/api.png?branch=master)](https://travis-ci.org/pelias/api)
