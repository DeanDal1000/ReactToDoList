import React, { useContext } from 'react'
import { BookContext } from './BookContext'
import { ThemeContext } from './ThemeContext';

const BookDetails = ({ book }) => {
    const { removeBook } = useContext(BookContext)
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return ( 
        <li style={{ color: theme.text, background: theme.bg }} onClick={() => removeBook(book.id)}>
            <div className="title" style={{ background: theme.ui }}> { book.title }  </div>
            <div className="author" style={{ background: theme.ui }}> { book.author } </div>
        </li>
     );
}
 
export default BookDetails;