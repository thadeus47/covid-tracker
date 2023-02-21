# Covid tracker :

A livemark tracking COVID-19 disease pandemic.

Covid tracker dashboard app for registering users with mongodb and authentication using a JWT (json web token),It includes a password reset and Alan AI news reader functionality.

# Configuration :

Create a `config.env` file in the root directory and fill it with the following informations :

```
PORT=5000

DATABASE_CONNECTION="Your DB URI"

JWT_SECRET="Your JWT Secret key"
JWT_EXPIRE="10min"

#For password Reset :

EMAIL_SERVICE=""
EMAIL_USERNAME=""
EMAIL_PASSWORD=""
EMAIL_FROM=""
```

# Quick Start :

```Javascript
// Install dependencies for server & client
npm install && npm run client-install

// Run client & server with concurrently
npm run dev

// Server runs on http://localhost:5000 and client on http://localhost:3000
```
