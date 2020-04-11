import React, {Component} from 'react'
import PropTypes from 'prop-types';

class Book extends Component {

    handleChange = (event) => {
        const {onChangeShelf, book} = this.props;
        onChangeShelf(book, event.target.value);
    };

    render() {
        const {id, shelf, title, authors, imageLinks} = this.props.book;
        const imageUrl = imageLinks ? (imageLinks.thumbnail ? imageLinks.thumbnail : '') : '';
        const bookAuthors = authors ? authors : [];
        let assignedShelf = shelf;

        if (!shelf) {
            assignedShelf = this.props.idToShelfMap[id] ? this.props.idToShelfMap[id] : 'none';
        }

        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover"
                             style={{width: 128, height: 193, backgroundImage: `url(${imageUrl})`}}/>
                        <div className="book-shelf-changer">
                            <select value={assignedShelf} onChange={this.handleChange}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{title}</div>
                    <div className="book-authors">{bookAuthors.join(", ")}</div>
                </div>
            </li>
        );
    }
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    onChangeShelf: PropTypes.func.isRequired,
    idToShelfMap: PropTypes.object.isRequired,
};

export default Book;