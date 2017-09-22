import React from 'react';
function BooksTitle(props){
    return (
        <div className='list-books-title'>
            <h1>{props.title}</h1>
        </div>
    );
}

export default BooksTitle;