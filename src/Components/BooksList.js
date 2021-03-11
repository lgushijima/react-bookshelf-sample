import React, { Component } from "react";
import Book from "./Book"
import PropTypes from 'prop-types'

class BooksList extends Component {
    static propTypes = {
		books: PropTypes.array.isRequired,
        onActionClick: PropTypes.func.isRequired
	}
    
    render() {
        const {books, onActionClick} = this.props;

        return (
            <ol className="books-grid">
				{books.map((book) => 
					<li key={book.id}>
						<Book book={book} onActionClick={onActionClick} />
					</li>
				)}
			</ol>
        );
    }
}

export default BooksList;