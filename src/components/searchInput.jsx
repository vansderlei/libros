import React from 'react';

function searchInput(props) {
    return (
        <div className='search-input'>
            <input type="search" value={props.children} onChange={props.handleChange} />
        </div>
    );
}

export default searchInput;