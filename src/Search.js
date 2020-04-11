import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import PropTypes from "prop-types";
import Book from "./Book";
import {withRouter} from 'react-router-dom';

class Search extends Component {

    state = {
        searchResult: [],
        query: ''
    };

    onInputQuery = (value) => {
        if (!value || value === '') {
            this.emptyResult('');
        }

        BooksAPI.search(value.trim()).then(apiSearchResults => {
            if (!Array.isArray(apiSearchResults)) {
                this.emptyResult(value);
            } else {
                this.setState(prev => (
                    {
                        searchResult: apiSearchResults,
                        query: value,
                    }
                ));
            }
        }).catch(error => {
            this.emptyResult(value);
        })
    };

    emptyResult(value) {
        this.setState(prev => (
            {
                searchResult: [],
                query: value,
            }
        ));
    }

    render() {

        const idToShelfMap = this.props.books
            .reduce((map, book) => {
                map[book.id] = book.shelf;
                return map;
            }, {});

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <button className="close-search" onClick={() => this.props.history.push('/')}>Close</button>
                    <div className="search-books-input-wrapper">
                        {/*
                      NOTES: The search from BooksAPI is limited to a particular set of search terms.
                      You can find these search terms here:
                      https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                      However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                      you don't find a specific author or title. Every search is limited by search terms.
                    */}
                        <input type="text" placeholder="Search by title or author" value={this.state.query}
                               onChange={(event) => this.onInputQuery(event.target.value)}/>

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.searchResult.map(book => (<Book book={book}
                                                                    key={book.id}
                                                                    onChangeShelf={this.props.onChangeShelf}
                                                                    idToShelfMap={idToShelfMap}/>))}
                    </ol>
                </div>
            </div>
        )
    }

}

Search.propTypes = {
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired,
};

export default withRouter(Search);