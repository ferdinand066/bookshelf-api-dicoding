const { nanoid } = require('nanoid');
const books = require('../books');
const sendResponse = require('../helper');

const addBook = (request, h) => {
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = request.payload;

  if (name === undefined) {
    return sendResponse(h, 'fail', 'Gagal menambahkan buku. Mohon isi nama buku', null, 400);
  }

  if (readPage > pageCount) {
    return sendResponse(h, 'fail', 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount', null, 400);
  }

  const timestamp = new Date().toISOString();
  const bookId = nanoid(16);

  const book = {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
    id: bookId,
    finished: pageCount === readPage,
    insertedAt: timestamp,
    updatedAt: timestamp,
  };

  books.push(book);

  const isSuccess = books.filter((b) => b.id === bookId).length > 0;

  if (isSuccess) {
    return sendResponse(h, 'success', 'Buku berhasil ditambahkan', {
      bookId,
    });
  }

  return sendResponse(h, 'error', 'Buku gagal ditambahkan', null, 500);
};

module.exports = addBook;
