import React, {Component} from 'react'
import PropTypes from 'prop-types';

class Book extends Component {

    handleChange(event) {
        const { onChangeShelfAssignmentsetState, bookId } = this.props
        onChangeShelfAssignmentsetState(bookId, event.target.value);
    }

    render() {
        const { assignedShelf, title, authors, imageUrl } = this.props
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageUrl})` }} />
                        <div className="book-shelf-changer">
                            <select value={assignedShelf} onChange={this.handleChange}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                { assignedShelf === 'none' && (<option value="none">None</option>) }
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{title}</div>
                    <div className="book-authors">{authors.join(", ")}</div>
                </div>
            </li>
        )
    }
}

Book.propTypes = {
    bookId: PropTypes.string.isRequired,
    assignedShelf: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    authors: PropTypes.array.isRequired,
    imageUrl: PropTypes.string.isRequired,
    onChangeShelfAssignment: PropTypes.func.isRequired,
};

export default Book