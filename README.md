# Introduction to API Development with TypeScript Workshop

Welcome to the "Introduction to API Development with TypeScript" workshop! This workshop is designed to introduce you to the fundamentals of building and consuming APIs using TypeScript.

## Host Information

**Name:** Lance Tan

**Contact Information:** [https://www.linkedin.com/in/lancetan02/](https://www.linkedin.com/in/lancetan02/)

## Learning Outcomes

By the end of this workshop, you will:

- Understand what APIs are and how they work.
- Implement endpoints in Express using Typescript.
- Learn how to consume API endpoints in your frontend.

## Prerequisites

Before you start, make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)
- [Git](https://git-scm.com/)

## Tech Stack

This workshop involves building a full-stack application using the following technologies:

- **Frontend:**
  - **React & Vite:** A JavaScript library for building user interfaces.
  - **TypeScript:** A superset of JavaScript that adds static types.

- **Backend:**
  - **Express:** A minimal and flexible Node.js web application framework.
  - **TypeScript:** Used for writing backend logic with type safety.

- **Database:**
  - **SQLite:** A C-language library that implements a small, fast, self-contained, high-reliability, full-featured, SQL database engine.

- **Tools:**
  - **Node.js:** JavaScript runtime built on Chrome's V8 JavaScript engine.
  - **npm:** A package manager for JavaScript.

## Installation

First, clone the repository:

```bash
git clone https://github.com/ltan02/intro-to-api-workshop.git
cd intro-to-api-workshop
```

### Setting up the Backend

Navigate to the backend directory:

```bash
cd backend
```

Install the necessary dependencies:

```bash
npm install
```

Set up the SQLite Database:

```bash
npm run setup-db
```

Start the Express server:

```bash
npm run start
```

The server will run on http://localhost:8000

### Setting up the Frontend

Navigate to the frontend directory:

```bash
cd frontend
```

Install the necessary dependencies:

```bash
npm install
```

Start the React application:

```bash
npm run dev
```

The application will run on http://localhost:3000