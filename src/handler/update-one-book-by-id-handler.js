const books = require('../books');
const sendResponse = require('../helper');

const updateOneBookById = (request, h) => {
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
    return sendResponse(
      h,
      'fail',
      'Gagal memperbarui buku. Mohon isi nama buku',
      null,
      400,
    );
  }

  if (readPage > pageCount) {
    return sendResponse(
      h,
      'fail',
      'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
      null,
      400,
    );
  }

  const { bookId } = request.params;
  const index = books.findIndex((book) => book.id === bookId);

  if (index === -1) {
    return sendResponse(
      h,
      'fail',
      'Gagal memperbarui buku. Id tidak ditemukan',
      null,
      404,
    );
  }

  books[index] = {
    ...books[index],
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
    finished: pageCount === readPage,
    updatedAt: new Date().toISOString(),
  };

  return sendResponse(h, 'success', 'Buku berhasil diperbarui', null, 200);
};

module.exports = updateOneBookById;
