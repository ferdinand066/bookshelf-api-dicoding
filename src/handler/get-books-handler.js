const books = require("../books");
const sendResponse = require("../helper");

const getBooks = (request, h) => {
  const { name, reading, finished } = request.query;
  let currentBooks = books;

  if (name !== undefined) {
    currentBooks = currentBooks.filter((book) =>
      book.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  if (reading !== undefined) {
    currentBooks = currentBooks.filter((book) =>
      reading == 1 ? book.reading == true : book.reading == false
    );
  }

  if (finished !== undefined) {
    currentBooks = currentBooks.filter((book) =>
      finished == 1 ? book.finished == true : book.finished == false
    );
  }

  console.log(currentBooks);

  const responseBooks = currentBooks.map((book) => {
    return {
      id: book.id,
      name: book.name,
      publisher: book.publisher,
    };
  });
  return sendResponse(
    h,
    "success",
    null,
    {
      books: responseBooks,
    },
    200
  );
};

module.exports = getBooks;
