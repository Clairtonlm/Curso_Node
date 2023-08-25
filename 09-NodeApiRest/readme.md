
# Express.js CRUD API Livraria

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

  ```json
  [
    {"id": 1, "titulo": "Java"},
    {"id": 2, "titulo": "Node"},
    {"id": 3, "titulo": "JavaScript"}
  ]
  ```

### Add a New Book

- **Endpoint:** `/livros`
- **Method:** `POST`
- **Request Body:**

  ```json
  {"id": 4, "titulo": "Python"}
  ```

- **Response:**

  ```
  Livro cadastrado com sucesso!!!
  ```

### Update a Book's Title

- **Endpoint:** `/livros/:id`
- **Method:** `PUT`
- **Request Body:**

  ```json
  {"titulo": "Node.js"}
  ```

- **Response:**

  ```json
  [
    {"id": 1, "titulo": "Java"},
    {"id": 2, "titulo": "Node.js"},
    {"id": 3, "titulo": "JavaScript"}
  ]
  ```

### Delete a Book

- **Endpoint:** `/livros/:id`
- **Method:** `DELETE`
- **Response:**

  ```
  Livro {id} removido com sucesso!!
  ```

## Contributing

Contributions are welcome! Feel free to fork and submit pull requests.

## License

This project is licensed under the [MIT License](LICENSE).

```

Make sure to replace `<repository_url>` with the actual URL of your project's repository. Also, update the instructions, descriptions, and other details as necessary to match your project.