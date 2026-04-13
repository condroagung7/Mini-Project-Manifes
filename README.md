# My App

React + TypeScript + Tailwind CSS app integrating with [reqres.in](https://reqres.in) API.

## Features

- Register & Login (with error handling for unsuccessful cases)
- Protected Routes — redirects to /login if unauthenticated
- Users List with Pagination
- Single User Detail view
- Responsive design (mobile + desktop)

## API Endpoints Used

| Endpoint              | Method | Route              |
|-----------------------|--------|--------------------|
| Register Successful   | POST   | /api/register      |
| Register Unsuccessful | POST   | /api/register      |
| Login Successful      | POST   | /api/login         |
| Login Unsuccessful    | POST   | /api/login         |
| List Users            | GET    | /api/users?page=N  |
| Single User           | GET    | /api/users/:id     |



## Tech Stack

- React 18 + TypeScript
- Tailwind CSS v3
- React Router v6
- reqres.in REST API
