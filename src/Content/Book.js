import React, {Component} from 'react';
import {Button} from 'react-materialize';
import BookMove from './BookMove';
import PropTypes from 'prop-types';

class Book extends Component{
    constructor(props){
        super(props);
        this.state = {            
            showContext:false
        }
    }

    static propTypes = {
        changeLocationBook:PropTypes.func.isRequired
    }

    joinAuthor = (authors =[]) => authors.map((a, i)=>(<label key={i} className='book-authors'>{a}</label>))

    shelfOptions = (e) =>{
        this.setState((state, props) =>{
            return {showContext:!state.showContext}
        });
    }

    render(){
        const { book = null, changeLocationBook } = this.props;
        if(!book){
            return null;
        }
        const bookMove = {            
            shelfOptions:this.shelfOptions,
            changeLocationBook,
            bookId: book.id,
            currentShelf:book.shelf
        };
        return (
            <div className='book'>
                {!this.state.showContext ? null : <BookMove {...bookMove} /> }
                <img style={{height:'200px', width:'140px'}} src={book.imageLinks.smallThumbnail} alt={book.title}/>
                <Button onClick={this.shelfOptions} floating className='green' waves='light' icon='arrow_drop_down' style={{bottom: '25px', left: '120px'}}>                                    
                </Button>                                    
                <p className='book-title'>{book.title}</p>
                {this.joinAuthor(book.authors)}                
            </div>
        )        
    }
}

export default Book;