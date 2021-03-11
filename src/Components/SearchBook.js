import React, {Component} from 'react'
import * as BooksAPI from '../BooksAPI'
import BooksList from "./BooksList"
import NoBooks from "./NoBooks"
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'


class SearchBook extends Component{
    static propTypes = {
		currentShelfBooks: PropTypes.array.isRequired,
        onActionClick: PropTypes.func.isRequired
	}

    state = {
        books: []
    }

    onSearchChanged = (searchText) => {
        if(searchText){
            BooksAPI.search(searchText).then(books => {
                books.map(book => {
                    var shelfBook = this.props.currentShelfBooks.filter(b=>b.id === book.id);
                    book.shelf = shelfBook && shelfBook.length === 1 ? shelfBook[0].shelf : 'none';
                    return book;
                });
                this.setState(()=> {return { books: books }});
            });
        }
        else{
            this.setState({ books: [] });
        }
    }

    render() {
        const { onActionClick } = this.props;
        const { books } = this.state;
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" onChange={(event) => { this.onSearchChanged(event.target.value); }}/>
                    </div>
                </div>
                <div className="search-books-results">
					{books.length > 0 ? <BooksList books={books} onActionClick={onActionClick} /> : <NoBooks />}
                </div>
            </div>
        )
    }
}

export default SearchBook;