import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BookGrid from './BookGrid';

class BookShelf extends Component{    

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.books || false;    
    }
    
    static propTypes = {
        title:PropTypes.string.isRequired,        
        books:PropTypes.array,
        changeLocationBook:PropTypes.func.isRequired
    }

    render(){
        const {title, books =[], changeLocationBook} = this.props;
        return (
            <div className='bookshelf'>
                <p className='bookshelf-title'>{title}</p>
                <BookGrid books={books} changeLocationBook={changeLocationBook}/>
            </div>
        );
    }
}

export default BookShelf;