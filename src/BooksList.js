import React, {Component} from 'react'
import PropTypes from "prop-types";
import BookShelf from "./BookShelf";
import { withRouter } from 'react-router-dom';

class BooksList extends Component {

    render() {

        const idToShelfMap = this.props.books
            .reduce( (map, book) => {
                map[book.id] = book.shelf
                return map
            }, {})

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf title="Currently Reading"
                                   shelfBooks={this.props.books.filter( book => book.shelf === 'currentlyReading')}
                                   onChangeShelf={this.props.onChangeShelf}
                                   idToShelfMap={idToShelfMap}
                        />
                        <BookShelf title="Want to Read"
                                   shelfBooks={this.props.books.filter( book => book.shelf === 'wantToRead')}
                                   onChangeShelf={this.props.onChangeShelf}
                                   idToShelfMap={idToShelfMap}
                        />
                        <BookShelf title="Read"
                                   shelfBooks={this.props.books.filter( book => book.shelf === 'read')}
                                   onChangeShelf={this.props.onChangeShelf}
                                   idToShelfMap={idToShelfMap}
                        />
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
}

export default withRouter(BooksList)








