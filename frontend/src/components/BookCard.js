import React from 'react';

const BookCard = ({ book, onEdit, onDelete }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <div className="book-card">
      <div className="book-title">{book.title}</div>
      <div className="book-author">by {book.author}</div>
      <div className="book-details">
        <span className="book-genre">{book.genre}</span>
        <span className="book-year">{book.year}</span>
      </div>
      <div className="book-details">
        <small>Added: {formatDate(book.created_at)}</small>
        {book.updated_at !== book.created_at && (
          <small>Updated: {formatDate(book.updated_at)}</small>
        )}
      </div>
      <div className="book-actions">
        <button 
          className="btn btn-secondary"
          onClick={() => onEdit(book)}
        >
          Edit
        </button>
        <button 
          className="btn btn-danger"
          onClick={() => onDelete(book.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookCard;