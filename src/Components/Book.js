import React, { Component } from "react";
import BookAction from "./BookAction";
import PropTypes from 'prop-types'

class Book extends Component {
    static propTypes = {
		book: PropTypes.object.isRequired,
        onActionClick: PropTypes.func.isRequired
	}
    
    render() {
        const {book, onActionClick} = this.props;
        
        const bookInfo = {
            thumb: book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : "",
            authors: book.authors && book.authors.length>0 ? book.authors : []
        }

        return (
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url("${bookInfo.thumb}")`,
                        }}
                    />
                    <BookAction book={book} onActionClick={onActionClick} />
                </div>
                <div className="book-title">{book.title}</div>
                {bookInfo.authors.map(author => 
                    <div key={author} className="book-authors">{author}</div>
                )}
            </div>   
        );
    }
}

export default Book;