import React from 'react'
import './App.css';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import BookContextProvider from './components/BookContext';
import NewBookForm from './components/BookFom';
import ThemeContextProvider from './components/ThemeContext';
import ThemeButton from './components/ThemeButton';

function App() {
  return (
 
    <div className="App">
    <ThemeContextProvider>
     <BookContextProvider >
     <Navbar />
     <BookList />
     <NewBookForm />
     </BookContextProvider >
     <ThemeButton />
     </ThemeContextProvider>

    </div>
  );
}


export default App;
