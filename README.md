# Curso_Node

This project is a simple Express.js API that demonstrates CRUD (Create, Read, Update, Delete) operations for managing a list of books.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository_url>
   ```

2. Navigate to the project directory:

   ```bash
   cd express-crud-api
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Usage

1. Start the server:

   ```bash
   npm start
   ```

   The server will start and listen on a specified port (default is 3000).

2. Access the API using tools like [Postman](https://www.postman.com/) or `curl` commands. Here are the available endpoints:

   - `GET /` : Get a welcome message.
   - `GET /livros` : Get the list of books.
   - `POST /livros` : Add a new book.
   - `PUT /livros/:id` : Update a book's title.
   - `DELETE /livros/:id` : Delete a book.

3. Make requests to the API to test the CRUD operations.

## API Endpoints

### Get Welcome Message

- **Endpoint:** `/`
- **Method:** `GET`
- **Response:**

  ```json
  "Welcome to the Express.js CRUD API!"
  ```

### Get List of Books

- **Endpoint:** `/livros`
- **Method:** `GET`
- **Response:**
