# NestJS User Authentication service

## Description

A simple REST API for user registration, authentication and listing built with:
- NestJS
- PostgreSQL
- Prisma ORM
- JWT Authentication

## Deployment

1. **Clone the repository:**
```
> git clone https://github.com/ntlvs/biocad-test.git
> cd biocad-test
```
2. **Create .env file:**
```
DATABASE_URL=postgresql://test:test@postgres:5432/test?schema=public
POSTGRES_PASSWORD=postgres
JWT_SECRET=secret
```
3. **Deploy:**
```
> docker-compose up --build
```

## API Access:

API Docs (Swagger UI): http://localhost:3000/api

## API Endpoints
#### Authentication

| Method | Endpoint       | Description               |
|--------|----------------|---------------------------|
| POST   | `/auth/signup` | Register new user         |
| POST   | `/auth/signin` | Login                     |

#### Users

| Method | Endpoint       | Description               |
|--------|----------------|---------------------------|
| GET    |  /users        | Get users list            |
