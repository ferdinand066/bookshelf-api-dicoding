const books = require("../books");
const sendResponse = require("../helper");

const getOneBookById = (request, h) => {
  const { bookId } = request.params;
  const index = books.findIndex((book) => book.id === bookId);

  if (index === -1){
      return sendResponse(h, "fail", "Buku tidak ditemukan", null, 404);
  }

  return sendResponse(h, "success", null, { book: books[index] }, 200);
};

module.exports = getOneBookById;
