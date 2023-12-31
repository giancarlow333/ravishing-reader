var books = require("google-books-search");

const options = {
  // key: "YOUR API KEY",
  // field: 'title',
  //  offset: 0,
  limit: 2,
  type: "books",
  //  order: 'relevance',
  //  lang: 'en'
};

function bookQuery(searchTerm) {
  return new Promise((resolve, reject) => {
    books.search(searchTerm, function (error, results) {
      if (!error) {
        // console.log(results[0]);
        // console.log(results[1].title)
        const cleanResults = results.map((result) => {
          //console.log(result);
          if (result.subtitle) {
            result.title = result.title + ": " + result.subtitle;
          }
          console.log(result.industryIdentifiers)
          if (result.industryIdentifiers){
           /*result.industryIdentifiers = result.industryIdentifiers.find(
            function () {
              return (type === "ISBN_13");
            }
          ) 
          console.log(result.industryIdentifiers)*/
          result.industryIdentifiers = result.industryIdentifiers[0].identifier}
        
          if (!result.publishedDate) {
            result.publishedDate = "not listed";
          }
          result.publishedDate = result.publishedDate.substring(0, 4);
          if (!result.description) {
            result.description = "not listed"; // Some results do not have descriptions, so we force one on it.
          }
          result.buylink = result.link
          result.fulldescription = result.description;
          result.description = result.description.substring(0, 265) + "...";
          //trying to iterate over potential array of author names to include all listed
         //if (authorslist.length > 1) {
         // function concat () {
          //  for (i=0, i<authorslist.length, i++){
          //  author = author + ", " + authorslist[i];
          //  return author
         // }
        //  }
         // let authorslist = result.authors;
         // console.log(authorslist.length)
        //  console.log (authorslist)
        //  let [author] = authorslist[1]
        //  console.log (author)
         // authorslist.foreach(author => {
          //  var authorsConcat = authorsConcat + ", " + author;
         // });
        //  result.authors = result.authors[0]

          return result;
        })

        resolve(cleanResults)
        console.log(cleanResults[0]);
      } else {
        reject(error);
      }
    });
  });
}

//bookQuery();

module.exports = { bookQuery };

//books.lookup('9KJJYFIss_wC', function(error, results) {
// if ( ! error ) {
//   console.log(results);
//  } else {
//    console.log(error);
//   }
//});

//code codee
//var options = {
// key: "YOUR API KEY",
// field: 'title',
//  offset: 0,
//  limit: 10,
//  type: 'books',
//  order: 'relevance',
//  lang: 'en'
//};

//let ISBNobject = results[0].industryIdentifiers.find(function(){return type='ISBN_13'})
// let ISBN = ISBNobject.identifier

// let bookreturn = [
//  title,
// console.log(Btitle)
//  author = results[0].authors,
// pubdate = results[0].publishedDate.slice(0,4),
//  publisher = results[0].publisher,
//  ISBN,
//  pages = results[0].pageCount,
//  link = results[0].link,
//  thumbnail = results[0].thumbnail, ]
// console.log(bookreturn)
// return bookreturn;

//var searchpage = require('.../views/results.handlebars')

//const router = require('express').Router();
//const User = require('../../../models/user');
//const bcrypt = require('bcryptjs');
//const { Op } = require('sequelize');

//app.use(express.static('views'));

//const searhkey = document.querySelector('input[name="search"]');

//console.log(searchkey)
