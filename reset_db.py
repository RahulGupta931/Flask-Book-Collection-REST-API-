#!/usr/bin/env python3
"""
Script to reset the database and load fresh mock data
"""

import os
import shutil
from app import create_app, db
from app.models import Book

def reset_database():
    app = create_app()
    
    with app.app_context():
        # Drop all tables and recreate
        db.drop_all()
        db.create_all()
        
        print("✅ Database reset successfully!")
        
        # Load mock data
        books_data = [
            # Classic Literature
            {'title': 'To Kill a Mockingbird', 'author': 'Harper Lee', 'genre': 'Fiction', 'year': 1960},
            {'title': '1984', 'author': 'George Orwell', 'genre': 'Dystopian', 'year': 1949},
            {'title': 'Pride and Prejudice', 'author': 'Jane Austen', 'genre': 'Romance', 'year': 1813},
            {'title': 'The Great Gatsby', 'author': 'F. Scott Fitzgerald', 'genre': 'Fiction', 'year': 1925},
            {'title': 'The Catcher in the Rye', 'author': 'J.D. Salinger', 'genre': 'Fiction', 'year': 1951},
            
            # Fantasy & Science Fiction
            {'title': 'The Lord of the Rings', 'author': 'J.R.R. Tolkien', 'genre': 'Fantasy', 'year': 1954},
            {'title': 'The Hobbit', 'author': 'J.R.R. Tolkien', 'genre': 'Fantasy', 'year': 1937},
            {'title': 'Dune', 'author': 'Frank Herbert', 'genre': 'Science Fiction', 'year': 1965},
            {'title': "The Hitchhiker's Guide to the Galaxy", 'author': 'Douglas Adams', 'genre': 'Science Fiction', 'year': 1979},
            {'title': "Harry Potter and the Philosopher's Stone", 'author': 'J.K. Rowling', 'genre': 'Fantasy', 'year': 1997},
            
            # Mystery & Thriller
            {'title': 'The Girl with the Dragon Tattoo', 'author': 'Stieg Larsson', 'genre': 'Mystery', 'year': 2005},
            {'title': 'Gone Girl', 'author': 'Gillian Flynn', 'genre': 'Thriller', 'year': 2012},
            {'title': 'The Da Vinci Code', 'author': 'Dan Brown', 'genre': 'Thriller', 'year': 2003},
            {'title': 'And Then There Were None', 'author': 'Agatha Christie', 'genre': 'Mystery', 'year': 1939},
            {'title': 'The Silent Patient', 'author': 'Alex Michaelides', 'genre': 'Thriller', 'year': 2019},
            
            # Recent Bestsellers
            {'title': 'Project Hail Mary', 'author': 'Andy Weir', 'genre': 'Science Fiction', 'year': 2021},
            {'title': 'The Midnight Library', 'author': 'Matt Haig', 'genre': 'Fiction', 'year': 2020},
            {'title': 'Where the Crawdads Sing', 'author': 'Delia Owens', 'genre': 'Fiction', 'year': 2018},
            {'title': 'The Seven Husbands of Evelyn Hugo', 'author': 'Taylor Jenkins Reid', 'genre': 'Fiction', 'year': 2017},
            {'title': 'Educated', 'author': 'Tara Westover', 'genre': 'Biography', 'year': 2018}
        ]
        
        # Add books to database
        for book_data in books_data:
            book = Book(**book_data)
            db.session.add(book)
        
        db.session.commit()
        
        total_books = Book.query.count()
        print(f"📚 Loaded {total_books} sample books successfully!")
        print("\n🚀 Your Book Collection API is ready!")
        print("   Run: python run.py")

if __name__ == '__main__':
    reset_database()