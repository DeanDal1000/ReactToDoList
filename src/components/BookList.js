import React, { useContext } from 'react';
import BookDetails from './components/BookDetails'

const BookList = () => {
    const { books } = { useContext }
    return books.length ? ( 
        <div className="book-list">
            <ul>
                { books.map(book =>{ 
                    return ( <BookDetails book={book} key={book.id} />)
                })}
            </ul>

        </div>
     ) : (
         <div className="empty"> No books to Read </div>
     )
}
 
export default BookList;