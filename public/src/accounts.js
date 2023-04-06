function findAccountById(accounts, id) {
    let found = accounts.find((account)=>account.id === id);
    return found
  }
  
  function sortAccountsByLastName(accounts) {
    let sorted = accounts.sort((firstAccount,secondAccount) => (firstAccount.name.last > secondAccount.name.last) ? 1 : ((secondAccount.name.last> firstAccount.name.last) ? -1 : 0));
    return sorted;
  }
  
  function getTotalNumberOfBorrows(account, books) {
   const borrowed = books.filter((book)=>book.borrows.some(borrow=> borrow.id===account.id));
  return borrowed.length
  }
  
  function getBooksPossessedByAccount(account, books, authors) {
  const borrowed = books.filter(
          (book) => book.borrows[0].id === account.id && !book.borrows[0].returned);
  const authInfo = books.map((book) => {
          book["author"] = authors.find((author) => author.id === book.authorId);
          return book;
        });
    return borrowed;
    return authInfo;
  }
  
  
  module.exports = {
    findAccountById,
    sortAccountsByLastName,
    getTotalNumberOfBorrows,
    getBooksPossessedByAccount,
  };
  