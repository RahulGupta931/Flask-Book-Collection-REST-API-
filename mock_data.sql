-- Mock Data for Book Collection API
-- Insert sample books into the database

INSERT INTO book (title, author, genre, year, created_at, updated_at) VALUES
-- Classic Literature
('To Kill a Mockingbird', 'Harper Lee', 'Fiction', 1960, datetime('now'), datetime('now')),
('1984', 'George Orwell', 'Dystopian', 1949, datetime('now'), datetime('now')),
('Pride and Prejudice', 'Jane Austen', 'Romance', 1813, datetime('now'), datetime('now')),
('The Great Gatsby', 'F. Scott Fitzgerald', 'Fiction', 1925, datetime('now'), datetime('now')),
('The Catcher in the Rye', 'J.D. Salinger', 'Fiction', 1951, datetime('now'), datetime('now')),

-- Fantasy & Science Fiction
('The Lord of the Rings', 'J.R.R. Tolkien', 'Fantasy', 1954, datetime('now'), datetime('now')),
('The Hobbit', 'J.R.R. Tolkien', 'Fantasy', 1937, datetime('now'), datetime('now')),
('Dune', 'Frank Herbert', 'Science Fiction', 1965, datetime('now'), datetime('now')),
('The Hitchhiker''s Guide to the Galaxy', 'Douglas Adams', 'Science Fiction', 1979, datetime('now'), datetime('now')),
('Harry Potter and the Philosopher''s Stone', 'J.K. Rowling', 'Fantasy', 1997, datetime('now'), datetime('now')),

-- Mystery & Thriller
('The Girl with the Dragon Tattoo', 'Stieg Larsson', 'Mystery', 2005, datetime('now'), datetime('now')),
('Gone Girl', 'Gillian Flynn', 'Thriller', 2012, datetime('now'), datetime('now')),
('The Da Vinci Code', 'Dan Brown', 'Thriller', 2003, datetime('now'), datetime('now')),
('And Then There Were None', 'Agatha Christie', 'Mystery', 1939, datetime('now'), datetime('now')),
('The Silent Patient', 'Alex Michaelides', 'Thriller', 2019, datetime('now'), datetime('now')),

-- Contemporary Fiction
('The Kite Runner', 'Khaled Hosseini', 'Fiction', 2003, datetime('now'), datetime('now')),
('Life of Pi', 'Yann Martel', 'Fiction', 2001, datetime('now'), datetime('now')),
('The Book Thief', 'Markus Zusak', 'Historical Fiction', 2005, datetime('now'), datetime('now')),
('Where the Crawdads Sing', 'Delia Owens', 'Fiction', 2018, datetime('now'), datetime('now')),
('The Seven Husbands of Evelyn Hugo', 'Taylor Jenkins Reid', 'Fiction', 2017, datetime('now'), datetime('now')),

-- Non-Fiction & Biography
('Sapiens', 'Yuval Noah Harari', 'Non-Fiction', 2011, datetime('now'), datetime('now')),
('Educated', 'Tara Westover', 'Biography', 2018, datetime('now'), datetime('now')),
('Becoming', 'Michelle Obama', 'Biography', 2018, datetime('now'), datetime('now')),
('The Subtle Art of Not Giving a F*ck', 'Mark Manson', 'Self-Help', 2016, datetime('now'), datetime('now')),
('Atomic Habits', 'James Clear', 'Self-Help', 2018, datetime('now'), datetime('now')),

-- Horror & Dark Fiction
('The Shining', 'Stephen King', 'Horror', 1977, datetime('now'), datetime('now')),
('Dracula', 'Bram Stoker', 'Horror', 1897, datetime('now'), datetime('now')),
('Frankenstein', 'Mary Shelley', 'Horror', 1818, datetime('now'), datetime('now')),
('The Handmaid''s Tale', 'Margaret Atwood', 'Dystopian', 1985, datetime('now'), datetime('now')),
('Brave New World', 'Aldous Huxley', 'Dystopian', 1932, datetime('now'), datetime('now')),

-- Recent Bestsellers
('Project Hail Mary', 'Andy Weir', 'Science Fiction', 2021, datetime('now'), datetime('now')),
('The Midnight Library', 'Matt Haig', 'Fiction', 2020, datetime('now'), datetime('now')),
('Klara and the Sun', 'Kazuo Ishiguro', 'Science Fiction', 2021, datetime('now'), datetime('now')),
('The Thursday Murder Club', 'Richard Osman', 'Mystery', 2020, datetime('now'), datetime('now')),
('The Invisible Life of Addie LaRue', 'V.E. Schwab', 'Fantasy', 2020, datetime('now'), datetime('now'));