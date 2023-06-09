function findAuthorById(authors, id) {
    let found = authors.find((author)=>author.id === id);
  return found;
}

function findBookById(books, id) {
  let found = books.find((book)=>book.id===id);
  return found;
}

function partitionBooksByBorrowedStatus(books) {
let borrowed = books.filter((book) =>
  book.borrows.some((borrow) => borrow.returned === false)
 );
let returned = books.filter((book) =>
  book.borrows.every((borrow) => borrow.returned === true)
 );
 return [[...borrowed], [...returned]];
}

function getBorrowersForBook(book, accounts) {
let borrowers = book.borrows.map((borrow)=>{
  let account = accounts.find((account)=>account.id===borrow.id);
  return {...borrow,...account};
});
  return borrowers.slice(0,10);
}


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
