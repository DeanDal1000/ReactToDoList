import React, { useContext } from 'react';
import { BookContext } from './BookContext'
import BookDetails from './BookDetails'
import { ThemeContext } from './ThemeContext';

const BookList = () => {
    const { books } = useContext(BookContext)
    const {isLightTheme, light, dark} = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark;

    return books.length ? ( 
        <div className="book-list" style={{ color: theme.text, background: theme.bg }}>
            <ul>
                { books.map(book =>{ 
                    return ( <BookDetails book={book} key={book.id} /> );
                })}
            </ul>
        </div>
     ) : (
         <div className="empty" style={{ background: theme.ui }}> No books to Read </div>
     )
}
 
export default BookList;


