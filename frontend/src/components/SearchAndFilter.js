import React, { useState } from 'react';

const SearchAndFilter = ({ 
  searchQuery, 
  filters, 
  onSearch, 
  onFilterChange, 
  onClearFilters, 
  onAddBook 
}) => {
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(localSearchQuery);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    onFilterChange({
      ...filters,
      [name]: value
    });
  };

  const hasActiveFilters = filters.author || filters.genre || filters.year || searchQuery;

  return (
    <div className="controls">
      <form className="search-box" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search books by title, author, or genre..."
          value={localSearchQuery}
          onChange={(e) => setLocalSearchQuery(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>

      <div className="filter-box">
        <select
          name="author"
          value={filters.author}
          onChange={handleFilterChange}
        >
          <option value="">All Authors</option>
          <option value="tolkien">Tolkien</option>
          <option value="orwell">Orwell</option>
          <option value="fitzgerald">Fitzgerald</option>
          <option value="austen">Austen</option>
        </select>

        <select
          name="genre"
          value={filters.genre}
          onChange={handleFilterChange}
        >
          <option value="">All Genres</option>
          <option value="fiction">Fiction</option>
          <option value="fantasy">Fantasy</option>
          <option value="mystery">Mystery</option>
          <option value="romance">Romance</option>
          <option value="science fiction">Science Fiction</option>
          <option value="dystopian">Dystopian</option>
        </select>

        <select
          name="year"
          value={filters.year}
          onChange={handleFilterChange}
        >
          <option value="">All Years</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="1949">1949</option>
          <option value="1925">1925</option>
        </select>
      </div>

      {hasActiveFilters && (
        <button className="btn btn-secondary" onClick={onClearFilters}>
          Clear Filters
        </button>
      )}

      <button className="btn btn-primary" onClick={onAddBook}>
        + Add Book
      </button>
    </div>
  );
};

export default SearchAndFilter;