const books = require('../books');
const sendResponse = require('../helper');

const deleteOneBookById = (request, h) => {
  const { bookId } = request.params;
  const index = books.findIndex((book) => book.id === bookId);

  if (index === -1) {
    return sendResponse(
      h,
      'fail',
      'Buku gagal dihapus. Id tidak ditemukan',
      null,
      404,
    );
  }

  books.splice(index, 1);

  return sendResponse(h, 'success', 'Buku berhasil dihapus', null, 200);
};

module.exports = deleteOneBookById;
