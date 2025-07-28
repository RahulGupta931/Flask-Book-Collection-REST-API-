from flask import Blueprint, request, jsonify
from marshmallow import ValidationError
from app import db
from app.models import Book
from app.schemas import book_schema, books_schema

api = Blueprint('api', __name__)

@api.route('/books', methods=['GET'])
def get_books():
    """Get all books with optional filtering"""
    # Get query parameters for filtering
    author = request.args.get('author')
    genre = request.args.get('genre')
    year = request.args.get('year')
    
    # Build query with filters
    query = Book.query
    
    if author:
        query = query.filter(Book.author.ilike(f'%{author}%'))
    if genre:
        query = query.filter(Book.genre.ilike(f'%{genre}%'))
    if year:
        try:
            year_int = int(year)
            query = query.filter(Book.year == year_int)
        except ValueError:
            return jsonify({'error': 'Year must be a valid integer'}), 400
    
    books = query.all()
    return books_schema.jsonify(books)

@api.route('/books', methods=['POST'])
def create_book():
    """Add a new book to the collection"""
    try:
        # Validate and deserialize input
        book = book_schema.load(request.json)
        
        # Save to database
        db.session.add(book)
        db.session.commit()
        
        return book_schema.jsonify(book), 201
        
    except ValidationError as err:
        return jsonify({'errors': err.messages}), 400
    except Exception as e:
        return jsonify({'error': 'Failed to create book'}), 500

@api.route('/books/<int:book_id>', methods=['GET'])
def get_book(book_id):
    """Get a single book by ID"""
    book = Book.query.get_or_404(book_id)
    return book_schema.jsonify(book)

@api.route('/books/<int:book_id>', methods=['PUT'])
def update_book(book_id):
    """Update an existing book"""
    book = Book.query.get_or_404(book_id)
    
    try:
        # Validate and update book
        updated_book = book_schema.load(request.json, instance=book, partial=True)
        
        db.session.commit()
        return book_schema.jsonify(updated_book)
        
    except ValidationError as err:
        return jsonify({'errors': err.messages}), 400
    except Exception as e:
        return jsonify({'error': 'Failed to update book'}), 500

@api.route('/books/<int:book_id>', methods=['DELETE'])
def delete_book(book_id):
    """Delete a book from the collection"""
    book = Book.query.get_or_404(book_id)
    
    try:
        db.session.delete(book)
        db.session.commit()
        return '', 204
        
    except Exception as e:
        return jsonify({'error': 'Failed to delete book'}), 500

@api.route('/books/search', methods=['GET'])
def search_books():
    """Search books by title, author, or genre"""
    query_param = request.args.get('q', '').strip()
    
    if not query_param:
        return jsonify({'error': 'Search query parameter "q" is required'}), 400
    
    # Search across title, author, and genre
    books = Book.query.filter(
        db.or_(
            Book.title.ilike(f'%{query_param}%'),
            Book.author.ilike(f'%{query_param}%'),
            Book.genre.ilike(f'%{query_param}%')
        )
    ).all()
    
    return books_schema.jsonify(books)

@api.errorhandler(404)
def not_found(error):
    return jsonify({'error': 'Book not found'}), 404

@api.errorhandler(500)
def internal_error(error):
    return jsonify({'error': 'Internal server error'}), 500