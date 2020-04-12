import React, {Component} from 'react'
import PropTypes from "prop-types";

class ShelfChanger extends Component {

    render() {
        return (
            <div className="book-shelf-changer">
                <select value={this.props.assignedShelf} onChange={this.props.handleChangeSelection}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        );
    }

}

ShelfChanger.propTypes = {
    assignedShelf: PropTypes.string.isRequired,
    handleChangeSelection: PropTypes.func.isRequired,
};

export default ShelfChanger;
