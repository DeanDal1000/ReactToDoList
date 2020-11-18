import React from 'react'
import './App.css';
import BookContextProvider from './context/BookContext';

function App() {
  return (
    <div className="App">
     <BookContextProvider />
    </div>
  );
}

export default App;
