import React, { useEffect } from 'react'
import "./styles.css"
import { useHistory } from "react-router-dom";


function SelectedBook() {
    const currentBook = JSON.parse(localStorage.getItem("selectedBook"))
    const { push: routerPush } = useHistory();  

    //criar gerBooks

    useEffect(() => {
        document.title = `Libros - ${currentBook.title}`
    }, [currentBook.title]);
    return (
        <div className="container">
            <div className="back-option" onClick={() => routerPush("/")} >voltar</div>
            <div className="selected-book">
                <img className='cover' src={currentBook.image} alt="" />
                <div className="details">
                    <h2 className='title'>{currentBook.title}</h2>
                    <span className='author'>por: {currentBook.author}</span>
                    <hr />
                    <div className="price">{currentBook.price.currency} - {currentBook.price.displayValue}</div>
                    <div className="summary">
                        <p>{currentBook.summary}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectedBook