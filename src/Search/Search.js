import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Input } from 'react-materialize';
import BookGrid from '../Content/BookGrid';

class Search extends Component{
    constructor(props){
        super(props);
        this.timeout = null;
        this.state = { value : ''}
    }

    static propTypes ={
        isFetching:PropTypes.bool.isRequired,
        searchResults:PropTypes.array.isRequired,        
        searchBooks:PropTypes.func.isRequired,
        changeLocationBook:PropTypes.func.isRequired,
    }

    onChange = (e) => this.setState({value: e.target.value})

    render(){
        const { isFetching } = this.props;
        const props = {};
        if(isFetching){
            props.disabled='disabled'
        }
        return (
            <div>
                <div className='search-books-bar'>
                    <Link className='close-search' to="/" />
                    <Input 
                        {...props}                        
                        value={this.state.value}  
                        onChange={this.onChange}
                        onKeyUp={(e) =>{                            
                            clearTimeout(this.timeout);
                            this.timeout = setTimeout(() => {
                                this.props.searchBooks(this.state.value);
                            }, 500);
                        }}                  
                        label='Pesquisar Livros'
                    ></Input>
                </div>
                <BookGrid 
                    books={this.props.searchResults} 
                    changeLocationBook={this.props.changeLocationBook}/>                
            </div>
        );
    }
}

export default Search;