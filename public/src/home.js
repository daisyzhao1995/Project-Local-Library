function getTotalBooksCount(books) {
    return books.length;
    }
    
    function getTotalAccountsCount(accounts) {
    return accounts.length;
    }
    
    function getBooksBorrowedCount(books) {
    let total = books.filter(book=>book.borrows.filter(
          (transaction)=>transaction.returned===false).length);
      return total.length;
    }
    
    function getMostCommonGenres(books) {
    let results = [];
    let genres = books.map((book)=>book.genre);
     genres.forEach((genre)=>{
       let obj = {name: genre, count: 1};
      let exist = results.some(x=>x.name==genre);
      if(exist===true){
    let item = results.find(a=>a.name==genre);
     let itemCount = item.count+1;
         results.find(a=>a.name==genre).count=itemCount;
      }
       else {results.push(obj)};
     });
    let answer = results.sort((a,b)=>b.count-a.count).slice(0,5);
      return answer;
    }
    
    function getMostPopularBooks(books) {
    const result = books.map((book)=>{
      return { name: book.title, count: book.borrows.length};
    });
    const finalAnswer = result.sort((a,b)=>b.count - a.count).slice(0,5);
      return finalAnswer;
    }
    
    function getMostPopularAuthors(books, authors) {
    const result = authors.map((author)=>{
      const fullName = `${author.name.first} ${author.name.last}`;
      const booksByAuthor = books.filter((book)=>book.authorId===author.id);
            const totalBorrows = booksByAuthor.reduce((total, book)=>total + book.borrows.length, 0
                         );
      const newAuthor = {name: fullName, count: totalBorrows};
      return newAuthor;
    });
    let final = result.sort((a,b)=>b.count-a.count).slice(0,5);
      return final;
    
    }
    
    module.exports = {
      getTotalBooksCount,
      getTotalAccountsCount,
      getBooksBorrowedCount,
      getMostCommonGenres,
      getMostPopularBooks,
      getMostPopularAuthors,
    };
    