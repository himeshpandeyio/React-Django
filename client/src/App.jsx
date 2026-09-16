import React from 'react'
import "./App.css"

const App = () => {

  return (
    <div>
      <h1>Book Website</h1>
      <div>
        <input type="text" placeholder="Book Title..."/>
        <input type="number" placeholder="Release Date..."/>
        <button>Add Book</button>
      </div>
    </div>
  )
}

export default App