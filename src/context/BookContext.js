const { useState, useEffect } = require("react")

import React, { useState, useEffect, createContext } from 'react'
import { v1 as uuidv1 } from 'uuid'

export const BookContext = createContext()

const BookContextProvider = (props) => {
   const [ books, setBooks ] = useState([
        {title: 'Misery', author: 'Stephen King', id:1},
        {title: 'World War Z', author: 'MAx Brooks', id:2}

    ]);
    //Add Book Function
    const addBook = (title, author) => {
        setBooks([...books, {title, author: uuidv1()}]);
    };
    //Use id to find the book we dont want to use,
    //We use filter to cycle through the books in the array, if it matches,
    //a condition it will keep that item in the array and if it does not it will remove it
    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id))
    };
    return (
        <BookContext.Provider value={{books, addBook, removeBook }} >
        { props.children }
        </BookContext.Provider>
    )
}

export default BookContextProvider