import React from 'react'
import './App.css';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import BookContextProvider from './components/BookContext';
import NewBookForm from './components/BookFom';

function App() {
  return (
    <div className="App">
     <BookContextProvider >
     <Navbar />
     <BookList />
     <NewBookForm />
     </BookContextProvider >
    </div>
  );
}

export default App;
