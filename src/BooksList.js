import React, {Component} from 'react'
import PropTypes from "prop-types";
import BookShelf from "./BookShelf";
import {withRouter} from 'react-router-dom';

class BooksList extends Component {

    render() {

        const idToShelfMap = this.props.books
            .reduce((map, book) => {
                map[book.id] = book.shelf;
                return map;
            }, {});

        const shelfs = [
            {
                title: "Currently Reading",
                value: "currentlyReading"
            },
            {
                title: "Want to Read",
                value: "wantToRead"
            },
            {
                title: "Read",
                value: "read"
            }
        ];

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {shelfs.map(shelf => (
                            <BookShelf
                                key={shelf.value}
                                title={shelf.title}
                                shelfBooks={this.props.books.filter(book => book.shelf === shelf.value)}
                                onChangeShelf={this.props.onChangeShelf}
                                idToShelfMap={idToShelfMap}/>
                        ))}
                    </div>
                </div>

                <div className="open-search">
                    <button onClick={() => this.props.history.push('/search')}>Add a book</button>
                </div>
            </div>
        )
    }

}

BooksList.propTypes = {
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired,
};

export default withRouter(BooksList);
