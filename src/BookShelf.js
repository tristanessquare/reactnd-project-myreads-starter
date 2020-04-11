import React, {Component} from 'react'
import PropTypes from "prop-types";
import Book from "./Book";

class BookShelf extends Component {

    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.shelfBooks.map(book => <Book
                            key={book.id}
                            book={book}
                                                                 onChangeShelf={this.props.onChangeShelf}
                                                                 idToShelfMap={this.props.idToShelfMap}/>)}
                    </ol>
                </div>
            </div>
        )
    }

}

BookShelf.propTypes = {
    shelfBooks: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired,
    idToShelfMap: PropTypes.object.isRequired,
}

export default BookShelf