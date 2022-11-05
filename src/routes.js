const addBook = require('./handler/add-book-handler');
const deleteOneBookById = require('./handler/delete-one-book-by-id-handler');
const getBooks = require('./handler/get-books-handler');
const getOneBookById = require('./handler/get-one-book-by-id-handler');
const updateOneBookById = require('./handler/update-one-book-by-id-handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBook,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getBooks,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getOneBookById,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: updateOneBookById,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteOneBookById,
  },
];

module.exports = routes;
