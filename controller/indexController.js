var path = require("path");
var bodyParser = require("body-parser");
var fs = require("fs");
var localStorage = require("localStorage");
// var mydata = require('/assets/results.json')
let array = [];

// get data
exports.index = (req, res) => {
  fs.readFile("./public/assets/results.json", (err, data) => {
    data = JSON.parse(data.toString());
    slicedData = filter2(data.data);
    //render file + data
    res.render("index.ejs", {
      mydata: slicedData
    });
  });
};

exports.offline = (req, res) => {
  res.render("offline");
};

exports.about = (req, res) => {
  res.render("about");
};

exports.notFound = (req, res) => {
  console.log("error from notfound:   " + res.err);
  res.render("404");
};
exports.detail = (req, res) => {
  getBookById(req.params.id, res);
};

function getBookById(id, res) {
  fs.readFile("./public/assets/results.json", (err, data) => {
    data = JSON.parse(data.toString());
    data.data.forEach(book => {
      if (book.isbn === "=" + id) {
        console.log("Entered DetailSite: " + book.title);
        res.render("detail", {
          mydata: book
        });
      }
    });
  });
}

const features = {
  counter: function(isbn) {
    const btn = document.querySelector(`#likeBtn${isbn}`);
    const totalLikes = document.querySelector(`#totalLikes${isbn}`);
    btn.addEventListener("click", e => {
      // listen for btn click
      e.preventDefault();
      const count = totalLikes.innerText;
      count = parseInt(count); // parse tot integer
      count++; // increment by 1
      totalLikes.innerText(count); // render to user
      features.saveLike(isbn, count);
    });
  },
  saveLike: function(isbn, count) {
    // updates the totalLike value of a specific book
    fs.readFile("./public/assets/results.json", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        data = JSON.parse(data.toString());
        const book = data.filter({ isbn: isbn });
        console.log(book);
        book.totalLikes = count;

        fs.writeFile("./public/assets/results.json", data, function(err) {
          if (err) throw err;
          console.log("saveing succeeded");
        });
      }
    });
  }
};

function filter2(data) {
  // console.log(data)
  var filterData = data.slice(0, 9);
  return filterData;
}
