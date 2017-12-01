>An API Server made with Express
# Instagram Directory API Server

This is the API server for the Instagram Directory project. The project contains is like a Yellow Pages but for Instagram Business

# How it works

## Install Dependencies

Note: Instagram Directory requires Node.js v4 or newer

```bash
npm install
```

## Scripts

The API ships with several convenience commands (runnable via `npm`):

  * `npm start`: start the server
  * `npm test`: run unit tests (TBD)
  * `npm run dev`: start the server with nodemon

## Endpoints

### Business
| METHOD 	| ENDPOINT           	| USAGE                  	| RETURNS  	|
|--------	|--------------------	|------------------------	|----------	|
| GET    	| /api/business/{id} 	| Get a business         	| business 	|
| GET    	| /api/business      	| Get a list of business 	| business 	|
| POST   	| /api/business      	| Add a business         	| business 	|

### Categories

| METHOD 	| ENDPOINT           	| USAGE                  	| RETURNS  	|
|--------	|--------------------	|------------------------	|----------	|
| GET    	| /api/categories/{id} 	| Get a category       	| category 	|
| GET    	| /api/categories      	| Get a list of categories 	| categories 	|
| POST   	| /api/categories      	| Add a category       	| category 	|
| GET    	| /api/categories/{id}/subcategories      	| Get a category related subcategories 	| subcategories 	|

### Subcategories
| METHOD 	| ENDPOINT           	| USAGE                  	| RETURNS  	|
|--------	|--------------------	|------------------------	|----------	|
| GET    	| /api/subcategories      	| Get a list of subcategories 	| subcategories 	|
| POST   	| /api/subcategories      	| Add a subcategories         	| subcategories 	|

## Contributing

Please fork and pull request against upstream master on a feature branch. Pretty please; provide unit tests and script
fixtures in the `test` directory.

## Continuous Integration

Travis tests every release. (TBD)
