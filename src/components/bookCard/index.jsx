import React from 'react';
import "./styles.css"
function bookCard(props) {
    return (
        <div className='book-card'>
            <img className='book-card-img' src={props.imgSrc} alt={props.title} />
        </div>
    );
}

export default bookCard;