import React, { useContext, useState } from 'react';
import { BookContext} from './BookContext'
import { ThemeContext } from './ThemeContext'


const NewBookForm = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    const { addBook } = useContext(BookContext)
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        addBook(title, author)
        setTitle('')
        setAuthor('')
    }
    return ( 
        <form onSubmit={handleSubmit} style={{ background: theme.bg }}>
            <input type="text" placeholder="Book Title" value={title} 
                onChange={(e) => setTitle(e.target.value)} required style={{ background: theme.ui }} />
            <input type="text" placeholder="Author" value={author} 
                onChange={(e) => setAuthor(e.target.value)} required style={{ background: theme.ui }} />
            <input type="submit" value="Add Book" style={{ background: theme.ui }} />
        </form>
     );
}
 
export default NewBookForm;
