import React from 'react';
import Book from './Book';

const BookGrid = ({ books = [], changeLocationBook }) => (
    books ? (
        <div className="bookshelf-books">
            <ol className='books-grid'>
                {books.map((book, idx) => (
                    <li key={idx}>
                        <Book changeLocationBook={changeLocationBook} book={book}/>
                    </li>
                ))}
            </ol>
        </div>
    ) : null)

export default BookGrid;