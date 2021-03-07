import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'

import { Route } from 'react-router-dom'
import SearchBook from './Components/SearchBook'
import Bookshelves from './Components/Bookshelves'

const sections = [
    {id: "currentlyReading", title: "Currently Reading"},
    {id: "wantToRead", title: "Want to Read"},
    {id: "read", title: "Read"}
];

class BooksApp extends React.Component {
    state = {
        books: [],
        searchResults: [],
        showSearchPage: false
    }

    componentDidMount(){
        BooksAPI.getAll().then(books => {
            this.setState(()=> {return { books: books }});
        });
    }

    onActionClick = (shelfSection, book) => {
        console.log(shelfSection, book);
        var selectedBook = this.state.books.filter(b => b.id === book.id);
        
        if(selectedBook.length){
            //-- update book
            selectedBook[0].shelf = shelfSection;
            this.setState(prevState => { 
                return {
                    books: [...prevState.books]
                }
            });
        }
        else{
            //-- add new book
            book.shelf = shelfSection;
            this.setState(prevState => {
                return {
                    books: [book, ...prevState.books]
                }
            });
        }
        BooksAPI.update(book, shelfSection);
    }

    render() {
        return (
            <div className="app">
                <Route exact path="/" render={() => (
                    <Bookshelves 
                        sections={sections}
                        books={this.state.books}
                        onActionClick={this.onActionClick}
                    />
                )}/>
                <Route exact path="/search" render={() => (
                    <SearchBook 
                        currentShelfBooks={this.state.books}
                        onActionClick={this.onActionClick}
                    />
                )}/>
            </div>
        )
    }
}

export default BooksApp
