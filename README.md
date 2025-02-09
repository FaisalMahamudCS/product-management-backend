## Quick Start

To create a project, simply run:

```bash
npx create-nodejs-ts-app <project-name>
```

Or

```bash
npm init nodejs-ts-app <project-name>
```

## Manual Installation

Clone the repo:

```bash
git clone <repo-url>
```

Install the dependencies:

```bash
yarn install
```

Set the environment variables:

```bash
cp .env.example .env

# open .env and modify the environment variables (if needed)
```

Running locally:

```bash
yarn dev
```

Running in production:

```bash
yarn start
```

Compiling to JS from TS:

```bash
yarn compile
```

Compiling to JS from TS in watch mode:

```bash
yarn compile:watch
```

Committing changes:

```bash
yarn commit
```

Testing:

```bash
# run all tests
yarn test

# run TypeScript tests
yarn test:ts

# run JS tests
yarn test:js

# run all tests in watch mode
yarn test:watch

# run test coverage
yarn coverage
```

Docker:

```bash
# run docker container in development mode
yarn docker:dev

# run docker container in production mode
yarn docker:prod

# run all tests in a docker container
yarn docker:test
```

Linting:

```bash
# run ESLint
yarn lint

# fix ESLint errors
yarn lint:fix

# run prettier
yarn prettier

# fix prettier errors
yarn prettier:fix
```

## Making Changes

Run `yarn dev` so you can compile TypeScript (.ts) files in watch mode:

```bash
yarn dev
```

Add your changes to TypeScript (.ts) files which are in the `src` folder. The files will be automatically compiled to JS if you are in watch mode.

Add tests for the new feature.

Run `yarn test:ts` to make sure all TypeScript tests pass:

```bash
yarn test:ts
```

## Environment Variables

The environment variables can be found and modified in the `.env` file. They come with these default values:

```bash
# Port number
PORT=3000

# URL of the Mongo DB
MONGODB_URL=mongodb://127.0.0.1:27017/product-management

# JWT
# JWT secret key
JWT_SECRET=thisisasamplesecret
# Number of minutes after which an access token expires
JWT_ACCESS_EXPIRATION_MINUTES=30
# Number of days after which a refresh token expires
JWT_REFRESH_EXPIRATION_DAYS=30

# SMTP configuration options for the email service
# For testing, you can use a fake SMTP service like Ethereal: https://ethereal.email/create
SMTP_HOST=email-server
SMTP_PORT=587
SMTP_USERNAME=email-server-username
SMTP_PASSWORD=email-server-password
EMAIL_FROM=support@yourapp.com

# URL of client application
CLIENT_URL=http://localhost:5000
```

## Project Structure

```
<project-structure>
```

## API Documentation

To view the list of available APIs and their specifications, run the server and go to `http://localhost:3000/v1/docs` in your browser. This documentation page is automatically generated using the [swagger](https://swagger.io/) definitions written as comments in the route files.

### API Endpoints

List of available routes:

**Auth routes**:\
`POST /v1/auth/register` - register\
`POST /v1/auth/login` - login\
`POST /v1/auth/refresh-tokens` - refresh auth tokens\
`POST /v1/auth/forgot-password` - send reset password email\
`POST /v1/auth/reset-password` - reset password

**User routes**:\
`POST /v1/users` - create a user\
`GET /v1/users` - get all users\
`GET /v1/users/:userId` - get user\
`PATCH /v1/users/:userId` - update user\
`DELETE /v1/users/:userId` - delete user

**Product routes**:\
`POST /v1/products` - create a product\
`GET /v1/products` - get all products\
`GET /v1/products/:productId` - get product\
`PATCH /v1/products/:productId` - update product\
`DELETE /v1/products/:productId` - delete product

**Order routes**:\
`POST /v1/orders` - create an order\
`GET /v1/orders` - get all orders\
`GET /v1/orders/:orderId` - get order\
`PATCH /v1/orders/:orderId` - update order\
`DELETE /v1/orders/:orderId` - delete order

**Cart routes**:\
`POST /v1/carts` - create a cart\
`GET /v1/carts` - get all carts\
`GET /v1/carts/:cartId` - get cart\
`PATCH /v1/carts/:cartId` - update cart\
`DELETE /v1/carts/:cartId` - delete cart

**Category routes**:\
`POST /v1/categories` - create a category\
`GET /v1/categories` - get all categories\
`GET /v1/categories/:categoryId` - get category\
`PATCH /v1/categories/:categoryId` - update category\
`DELETE /v1/categories/:categoryId` - delete category
```
