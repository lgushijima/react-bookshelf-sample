import React, { Component } from "react";
import BooksList from "./BooksList";
import PropTypes from 'prop-types'

class Bookshelf extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
		books: PropTypes.array.isRequired,
        onActionClick: PropTypes.func.isRequired
	}

    render() {
        var { title, books, onActionClick } = this.props;

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title} - {books.length} {books.length <= 1 ? "book" : "books"}</h2>
                <div className="bookshelf-books">
                    <BooksList books={books} onActionClick={onActionClick} />
                </div>
            </div>
        );
    }
}

export default Bookshelf;