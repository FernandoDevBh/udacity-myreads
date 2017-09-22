import React from 'react';

function Content(props){
    return (
        <div className="list-books-content">
            {props.children || null}
        </div>        
    );
}

export default Content;