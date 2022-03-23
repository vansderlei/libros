import React from 'react';

function subtitle(props) {
    return (
        <div className='subtitle'>
            <p>{props.children}</p>
        </div>
    );
}

export default subtitle;