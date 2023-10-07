# Task Management Backend

Welcome to the Task Management Backend, a RESTful API for managing tasks and user authentication. This project provides endpoints for users to sign up, log in, and manage their tasks.

## Table of Contents
- [Endpoints](#endpoints)
  - [User Router](#user-router)
  - [Task Router](#task-router)
- [Data Types](#data-types)
- [Sample Data](#sample-data)
- [Deployment](#deployment)

---

## Endpoints

### User Router

| Route          | Method | Description                        | Request Body                  |
| -------------- | ------ | ---------------------------------- | ----------------------------- |
| `/user/signup` | POST   | Create a new user account          | `{ name, email, password }`     |
| `/user/login`  | POST   | Log in to the application          | `{ email, password }`     |

### Task Router (Authentication Required)

| Route            | Method | Description                          | Request Body                                            |
| --------------   | ------ | ------------------------------------ | ------------------------------------------------------- |
| `task/tasks`         | GET    | Get all tasks                         |                                                         |
| `task/tasks/:id`     | GET    | Get a specific task by ID            |                                                         |
| `task/tasks`         | POST   | Create a new task                    | `{ title, description, creation_date, status }`         |
| `task/tasks/:id`     | PUT    | Update a task by ID                  | `{ title, description, creation_date, status }`         |
| `task/tasks/:id`     | DELETE | Delete a task by ID                  |                                                         |

---

## Data Types

- `title`: String
- `description`: String
- `creation_date`: Date
- `status`: Enum ["pending", "completed"]

Use these data types when sending requests to the respective endpoints to ensure data consistency and proper functionality.

---

## Base API URL

The base API URL for this backend is:

`http://localhost:8080`

When making requests to the above endpoints, prepend this base URL to construct the complete API URLs.

---
## Sample Data

To add a new task, send a POST request to the `/tasks` endpoint with the following sample data:

```
{
  "title": "Learn Node",
  "description": "For make good projects.",
  "creation_date": "2023-10-07",
  "status": "pending"
}
```
---
## Deployment

This backend application is deployed and available for use. You can access it using the following link:

[Task Management Backend](https://tacnique.onrender.com/)


