import React, { useState, useEffect } from 'react';

const BookModal = ({ book, onSave, onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: '',
    year: new Date().getFullYear()
  });

  useEffect(() => {
    if (book) {
      setFormData({
        title: book.title || '',
        author: book.author || '',
        genre: book.genre || '',
        year: book.year || new Date().getFullYear()
      });
    }
  }, [book]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'year' ? parseInt(value) || '' : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal">
        <h2>{book ? 'Edit Book' : 'Add New Book'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title *</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              maxLength="200"
              placeholder="Enter book title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="author">Author *</label>
            <input
              type="text"
              id="author"
              name="author"
              value={formData.author}
              onChange={handleChange}
              required
              maxLength="100"
              placeholder="Enter author name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="genre">Genre *</label>
            <input
              type="text"
              id="genre"
              name="genre"
              value={formData.genre}
              onChange={handleChange}
              required
              maxLength="50"
              placeholder="e.g., Fiction, Mystery, Romance"
            />
          </div>

          <div className="form-group">
            <label htmlFor="year">Publication Year *</label>
            <input
              type="number"
              id="year"
              name="year"
              value={formData.year}
              onChange={handleChange}
              required
              min="1000"
              max="2030"
              placeholder="e.g., 2023"
            />
          </div>

          <div className="form-actions">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-success">
              {book ? 'Update Book' : 'Add Book'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookModal;