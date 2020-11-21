import React, { useContext } from 'react'
import { BookContext } from './BookContext'

const Navbar  = () => {
   const { books } = useContext(BookContext);
    return ( 
        <div className="navbar">
            <h1>Dean's Reading List</h1>
            <p>Currently you have { books.length } books to get through...</p>
        </div>
     );
}
 
export default Navbar;