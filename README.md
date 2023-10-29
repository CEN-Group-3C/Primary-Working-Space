# User Management System Example

Example project demonstrating the use of Node.js, Express, PostgreSQL, React, and Docker.

**Note:** This project is not intended to be used in production. It is only meant to be used as a learning tool. I know the passwords aren't hashed, and are displayed as plain text, if you want this feature, feel free to add it yourself.

## Get Started

### Prerequisites

- [Docker](https://www.docker.com/get-started) (Required)
- [Docker Compose](https://docs.docker.com/compose/install/) (Required)
  - **Note:** Docker Compose is included with Docker Desktop for Windows and macOS
- [Node.js](https://nodejs.org/en/) (Optional)

### Installation

Once you pull the project down and are inside the root directory, run the following command:

```sh
docker-compose up --build
```

## Environments

- `localhost:1337`: Node.js server
- `localhost:3000`: Vite development server

### Endpoints

Below are the endpoints that are available for the Node.js server.

| Method | Route | Description |
| ------ | ----- | ----------- |
| GET    | `/api` | Returns a welcome message |
| GET    | `/api/users` | Returns all users |
| GET    | `/api/users/:id` | Returns a single user |
| POST   | `/api/users` | Creates a new user |
| PUT    | `/api/users/:id` | Updates a user |
| DELETE | `/api/users/:id` | Deletes a user |

Example request body for `POST` and `PUT` requests:

```json
// POST /api/users
{
  "name": "User Name",
  "email": "user@xample.com",
  "password": "password"
}
```

```json
// PUT /api/users/1
{
  "name": "New Name",
}
``````
