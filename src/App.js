import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from "react-router-dom";
import Search from "./Search";
import BooksList from "./BooksList";

class App extends React.Component {
  state = {
    read : [],
    wantToRead : [],
    currentlyReading : [],
  }

  render() {
    return (
        <div className="app">
          <Route exact path="/" component={() => <BooksList />} />
          <Route exact path="/search" component={() => <Search />} />
        </div>
    )
  }
}

export default App
