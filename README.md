# 📚 Book Collection REST API

A RESTful API built with Flask to manage a personal or public collection of books. Features full CRUD operations, data validation, filtering, and search capabilities.

## 🔧 Features

✅ Add a new book to the collection  
📖 Retrieve all books or a specific book by ID  
📝 Update book details (title, author, genre, or year)  
❌ Delete a book from the collection  
🔍 Filter books by author, genre, or year  
🔎 Search books across title, author, and genre  
🛠️ Clean separation of models, routes, schemas, and configuration  
✨ Data validation using Marshmallow  
🚀 Error handling and proper HTTP status codes  

## 🧱 Tech Stack

- **Backend**: Flask, Flask-RESTful
- **ORM**: SQLAlchemy
- **Validation**: Marshmallow
- **Database**: SQLite (easily switchable to PostgreSQL/MySQL)
- **CORS**: Flask-CORS

## 🚀 Setup

1. **Install dependencies:**
```bash
pip install -r requirements.txt
```

2. **Run the application:**
```bash
python run.py
```

The API will be available at `http://localhost:5000`

## 🔗 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/books` | Get all books (with optional filtering) |
| GET | `/books/<id>` | Get a single book by ID |
| POST | `/books` | Add a new book |
| PUT | `/books/<id>` | Update an existing book |
| DELETE | `/books/<id>` | Delete a book |
| GET | `/books/search?q=query` | Search books by title, author, or genre |

## 📝 Example Usage

### Create a new book:
```bash
curl -X POST http://localhost:5000/books \
  -H "Content-Type: application/json" \
  -d '{
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "genre": "Fiction",
    "year": 1925
  }'
```

### Get all books:
```bash
curl http://localhost:5000/books
```

### Filter books by author:
```bash
curl "http://localhost:5000/books?author=Fitzgerald"
```

### Filter books by genre:
```bash
curl "http://localhost:5000/books?genre=Fiction"
```

### Search books:
```bash
curl "http://localhost:5000/books/search?q=Gatsby"
```

### Update a book:
```bash
curl -X PUT http://localhost:5000/books/1 \
  -H "Content-Type: application/json" \
  -d '{
    "title": "The Great Gatsby - Updated",
    "year": 1926
  }'
```

### Delete a book:
```bash
curl -X DELETE http://localhost:5000/books/1
```

## 📊 Book Model

Each book has the following fields:
- `id` (integer, auto-generated)
- `title` (string, required, max 200 chars)
- `author` (string, required, max 100 chars)
- `genre` (string, required, max 50 chars)
- `year` (integer, required, 1000-2030)
- `created_at` (datetime, auto-generated)
- `updated_at` (datetime, auto-updated)

## 🔍 Filtering & Search

### Filtering:
- Filter by author: `/books?author=tolkien`
- Filter by genre: `/books?genre=fantasy`
- Filter by year: `/books?year=2020`
- Combine filters: `/books?author=tolkien&genre=fantasy`

### Search:
- Search across title, author, and genre: `/books/search?q=lord`

## 🧪 Future Extensions

- User authentication and authorization
- Pagination for large collections
- Unit tests and integration tests
- Book cover image uploads
- Reading status tracking
- Book ratings and reviews