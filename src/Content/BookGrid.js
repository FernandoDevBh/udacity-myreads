import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class BookGrid extends Component {

    static propTypes = {
        books: PropTypes.array,
        changeLocationBook:PropTypes.func.isRequired
    }

    render() {
        const {books =[], changeLocationBook} = this.props;        
        return books ? (
            <div className="bookshelf-books">
                <ol className='books-grid'>
                    {books.map((book, idx) =>(
                        <li key={idx}>
                            <Book 
                                changeLocationBook={changeLocationBook} 
                                book={book}
                            />
                        </li>
                    ))}
                </ol>
            </div>
        ) : null;
    }
}

export default BookGrid;