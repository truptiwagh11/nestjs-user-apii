# NestJS + MySQL User API

This is a simple REST API built using NestJS and MySQL. It allows you to create and fetch users.

## Features
- Create user
- Get user by ID
- Get all users
- Uses Sequelize ORM
- Connected with MySQL

## Technologies
- NestJS
- MySQL
- Sequelize
- TypeScript

## API Endpoints

### POST /users
Create a user  
Request body:
```json
{
  "username": "trupti",
  "email": "trupti@example.com"
} 
