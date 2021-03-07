import React, { Component } from "react";
import Bookshelf from "./Bookshelf";

import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class Bookshelves extends Component {
    static propTypes = {
		books: PropTypes.array.isRequired,
        sections: PropTypes.array.isRequired,
        onActionClick: PropTypes.func.isRequired
	}

    render() {
		const { books, sections, onActionClick } = this.props;
        const shelves = [];

        sections.map(section =>
            shelves.push({
                id: section.id,
                title: section.title,
                books: books.filter(book => book.shelf === section.id)
            })
        );

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>My Reads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {shelves.map((shelf) => 
                            <Bookshelf key={shelf.id} title={shelf.title} books={shelf.books} onActionClick={onActionClick} />
                        )}
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        );
    }
}

export default Bookshelves;