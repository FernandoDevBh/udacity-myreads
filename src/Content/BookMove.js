import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {Collection,CollectionItem} from 'react-materialize';

class BookMove extends Component{

    componentDidMount(){
        document.addEventListener('click', this.onClick)
    }

    componentWillUnmount(){
        document.removeEventListener('click', this.onClick)
    }    
    
    onClick = (e) =>{        
        const { status } = e.target.dataset;
        if (status !== 'none' && this.node.contains(e.target)) {
            this.props.changeLocationBook(e);
            this.props.shelfOptions(e);            
          } else {            
            this.props.shelfOptions(e);
          }
        return;
    }

    static propTypes = {        
        shelfOptions: PropTypes.func,
        changeLocationBook: PropTypes.func,
        bookId: PropTypes.string.isRequired,
        currentShelf: PropTypes.string.isRequired,
    }    

    render(){  
        const {currentShelf = '', changeLocationBook, bookId} = this.props;
        const collectionItemStyle = {cursor:'pointer'};        
        const options = [
            {title: 'Lendo Atualmente', style: collectionItemStyle, id:'currentlyReading'},
            {title: 'Quer Ler', style: collectionItemStyle, id:'wantToRead'},
            {title: 'Já Leu', style: collectionItemStyle, id:'read'},
            {title: 'Nenhum', style: collectionItemStyle, id:'none'},
        ];
        return(            
            <div className={`book-move-show`} ref={node => this.node = node}>
                <span className='book-move-label'>Mover para...</span>
                <Collection>
                    {options.map((o, i) =>{
                        return (
                            <CollectionItem 
                                key={i}
                                active={currentShelf === o.id}                  
                                style={o.style}                                
                                data-id={bookId}
                                data-shelf-change={o.id}
                                data-current-shelf={currentShelf}                                                                 
                                onClick={(e) =>{
                                    e.preventDefault();
                                    changeLocationBook(e.target);
                                }}
                            >                                    
                                  {o.title}
                            </CollectionItem>
                        );
                    })}                 
                </Collection>                
            </div>
        );
    }
}

export default BookMove;