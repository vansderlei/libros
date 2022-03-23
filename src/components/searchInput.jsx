import React from 'react';

function searchInput(props) {
    return (
        <div className='search-input'>
            <input type="search" value={props.children} />
        </div>
    );
}

export default searchInput;