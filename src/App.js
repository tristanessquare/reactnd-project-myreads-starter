import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from "react-router-dom";
import Search from "./Search";
import BooksList from "./BooksList";

class App extends React.Component {

    state = {
        books: []
    };

    componentDidMount() {
        BooksAPI.getAll().then((apiBooks) => {
            this.setState({books: apiBooks});
        }).catch((error) => {
            this.setState({books: []});
        })
    }

    onChangeShelf = (book, newShelf) => {
        BooksAPI.update(book, newShelf).then((result) => {
            this.setState(prev => {
                book.shelf = newShelf;

                // I need to filter the books and then add the current 'book' in order to handle adding of new books to the shelfs
                // Alternatively I could check if the book is in the 'prev.books' and only add it if this is false
                const otherBooks = prev.books.filter(bk => bk.id !== book.id);

                return {
                    books: [...otherBooks, book]
                };
            });
        })
    };

    render() {
        return (
            <div className="app">
                <Route exact path="/"
                       render={() => <BooksList books={this.state.books} onChangeShelf={this.onChangeShelf}/>}/>
                <Route exact path="/search"
                       render={() => <Search books={this.state.books} onChangeShelf={this.onChangeShelf}/>}/>
            </div>
        );
    }
}

export default App;
