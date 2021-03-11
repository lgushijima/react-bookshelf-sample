# MyReads Project

This is the my "MyReads" project application using Udacity's React Fundamentals course. 

## TL;DR

To run the project:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## What You're Getting
```bash
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms used on this app.
├── package.json # npm package manager file.
├── public
│   ├── favicon.ico # React Icon.
│   └── index.html # Basic root html file
└── src
    ├── Components # Components folder.
    │   ├── Book.js # Component to render a single book.
    │   ├── BookAction.js # Component to render the book's action dropdown.
    │   ├── BookList.js # Component to render all books in a shelf.
    │   ├── Bookshelf.js # Component to render a Bookshelf (Shelf name and total books on it).
    │   ├── Bookshelves.js # Component to render a list of Bookshelf (Reading, Want to Read and Read).
    │   ├── NoBooks.js # Component to render a message when there are no books found.
    │   ├── SearchBook.js # Component to search for books.
    ├── App.css # Styles for the app.
    ├── App.js # This is the root app.
    ├── App.test.js # Used for testing. 
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for the app.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. 
    └── index.js # Basic root file for the app.
```

## Backend Server

The file [`BooksAPI.js`](src/BooksAPI.js) contains all api methods used on this project:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query, maxResults)
```

* query: `<String>`
* maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
