import React, { useContext } from 'react'
import { BookContext } from './BookContext'
import { ThemeContext } from './ThemeContext';

const Navbar  = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
   const { books } = useContext(BookContext);
    return ( 
        <nav style={{ background: theme.ui, color: theme.text }}>
        <div className="navbar">
            <h1>Dean's Reading List</h1>
            <p>Currently you have { books.length } books to get through...</p>
        </div>
        </nav>
     );
}
 
export default Navbar;