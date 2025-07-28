import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BookCard from './components/BookCard';
import BookModal from './components/BookModal';
import SearchAndFilter from './components/SearchAndFilter';

const API_BASE_URL = 'http://localhost:5000';

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingBook, setEditingBook] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    author: '',
    genre: '',
    year: ''
  });

  useEffect(() => {
    fetchBooks();
  }, [filters]);

  const fetchBooks = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      
      if (filters.author) params.append('author', filters.author);
      if (filters.genre) params.append('genre', filters.genre);
      if (filters.year) params.append('year', filters.year);
      
      const response = await axios.get(`${API_BASE_URL}/books?${params}`);
      setBooks(response.data);
    } catch (error) {
      toast.error('Failed to fetch books');
      console.error('Error fetching books:', error);
    } finally {
      setLoading(false);
    }
  };

  const searchBooks = async (query) => {
    if (!query.trim()) {
      fetchBooks();
      return;
    }
    
    try {
      setLoading(true);
      const response = await axios.get(`${API_BASE_URL}/books/search?q=${encodeURIComponent(query)}`);
      setBooks(response.data);
    } catch (error) {
      toast.error('Failed to search books');
      console.error('Error searching books:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddBook = () => {
    setEditingBook(null);
    setShowModal(true);
  };

  const handleEditBook = (book) => {
    setEditingBook(book);
    setShowModal(true);
  };

  const handleDeleteBook = async (bookId) => {
    if (!window.confirm('Are you sure you want to delete this book?')) {
      return;
    }

    try {
      await axios.delete(`${API_BASE_URL}/books/${bookId}`);
      toast.success('Book deleted successfully');
      fetchBooks();
    } catch (error) {
      toast.error('Failed to delete book');
      console.error('Error deleting book:', error);
    }
  };

  const handleSaveBook = async (bookData) => {
    try {
      if (editingBook) {
        await axios.put(`${API_BASE_URL}/books/${editingBook.id}`, bookData);
        toast.success('Book updated successfully');
      } else {
        await axios.post(`${API_BASE_URL}/books`, bookData);
        toast.success('Book added successfully');
      }
      setShowModal(false);
      fetchBooks();
    } catch (error) {
      const errorMessage = error.response?.data?.errors 
        ? Object.values(error.response.data.errors).flat().join(', ')
        : 'Failed to save book';
      toast.error(errorMessage);
      console.error('Error saving book:', error);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    searchBooks(query);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setSearchQuery(''); // Clear search when filtering
  };

  const clearFilters = () => {
    setFilters({ author: '', genre: '', year: '' });
    setSearchQuery('');
  };

  return (
    <div className="container">
      <div className="header">
        <h1>📚 Book Collection</h1>
        <p>Manage your personal library with ease</p>
      </div>

      <SearchAndFilter
        searchQuery={searchQuery}
        filters={filters}
        onSearch={handleSearch}
        onFilterChange={handleFilterChange}
        onClearFilters={clearFilters}
        onAddBook={handleAddBook}
      />

      {loading ? (
        <div className="loading">Loading books...</div>
      ) : books.length === 0 ? (
        <div className="no-books">
          <h3>No books found</h3>
          <p>Start building your collection by adding your first book!</p>
        </div>
      ) : (
        <div className="books-grid">
          {books.map(book => (
            <BookCard
              key={book.id}
              book={book}
              onEdit={handleEditBook}
              onDelete={handleDeleteBook}
            />
          ))}
        </div>
      )}

      {showModal && (
        <BookModal
          book={editingBook}
          onSave={handleSaveBook}
          onClose={() => setShowModal(false)}
        />
      )}

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;