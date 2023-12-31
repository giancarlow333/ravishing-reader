const {bookQuery} = require('../utils/query-GoogleAPI.js')
const router = require("express").Router()
const fs = require('fs')

//router.get('/', (req, res) => {
  //res.redirect('/search/Wind-up20%Girl')
//})

//alt route for loading JSON to avoid over-using API 
router.get('/', (req, res) => {
     const JSONresults = JSON.parse(fs.readFileSync("./utils/response.JSON", "utf8"))
     const results = JSONresults
     console.log(results)
     res.render('results', { results })
    // res.render('results', { layout: "main", view: "results", title: "Find a Book", test: "Test" });
    // localStorage.setitem('searchinfo', JSON.stringify(results))
     return 
 });

 //displaying search results
router.get(`/:searchTerm`, async (req, res) => {
 try { const searchTerm = req.params.searchTerm  || "Windup Girl"
  console.log(searchTerm)
    const results = await bookQuery(searchTerm) 
    console.log(results[0])
   // res.json(results)
    res.render('results', { results });
  } catch (err) {
    console.log(err);
   res.status(500).json(err);
}});

//returning search results as json to be stored 
router.get(`/:searchTerm/json`, async (req, res) => {
  try { const searchTerm = req.params.searchTerm  || "Windup Girl"
   console.log(searchTerm)
     const results = await bookQuery(searchTerm) 
     console.log(results[0])
     res.json(results)
   } catch (err) {
     console.log(err);
    res.status(500).json(err);
 }});

module.exports = router

