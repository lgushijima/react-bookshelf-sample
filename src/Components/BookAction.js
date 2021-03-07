import React, { Component } from "react";
import PropTypes from 'prop-types'

class BookAction extends Component {
    static propTypes = {
		book: PropTypes.object.isRequired,
        onActionClick: PropTypes.func.isRequired
	}

    render() {
        const {book, onActionClick} = this.props;

        return (
            <div className="book-shelf-changer">
                <select value={book.shelf} onChange={(event)=>{ onActionClick(event.target.value, book) }}>
                    <option value="move" disabled>
                        Move to...
                    </option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        );
    }
}

export default BookAction;