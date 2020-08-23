var vehicle = {
  "year" : 2018,
  "make"  : "Toyota",
  "model" : "Sienna"
};
gs.info(vehicle.hasOwnProperty("year"));  // <== true
gs.info(vehicle.hasOwnProperty("price")); // <== false 

/////////////////////////////////////////////////////
var vehicle = {
  "year" : 2018,
  "make"  : "Toyota",
  "model" : "Sienna"
};
for (var key in vehicle) {
  gs.info('key=' + key + ' value=' + vehicle[key]);
} 

/*
*** Script: key=year value=2018
*** Script: key=make value=Toyota
*** Script: key=model value=Sienna */

/////////////////////////////////////////////////////

var bookList = [
  {"title" : "Harry Potter and the Chamber of Secrets", "author" : "J.K. Rowling"},
  {"title" : "Moby Dick", "author" : "Herman Melville"},
  {"title" : "A Tale of Two Cities", "author" : "Charles Dickens"}
];
gs.info(bookList); // That's not very helpful!

var bookListStr = JSON.stringify(bookList);
gs.info(bookListStr);  // I can read it - sort of

var bookListStrFormat = JSON.stringify(bookList, null, 4);
gs.info(bookListStrFormat); // Ah - that's better! 

/*
*** Script: [object Object],[object Object],[object Object]
*** Script: [{"title":"Harry Potter and the Chamber of Secrets","author":"J.K. Rowling"},{"title":"Moby Dick","author":"Herman Melville"},{"title":"A Tale of Two Cities","author":"Charles Dickens"}]
*** Script: [
    {
        "title": "Harry Potter and the Chamber of Secrets",
        "author": "J.K. Rowling"
    },
    {
        "title": "Moby Dick",
        "author": "Herman Melville"
    },
    {
        "title": "A Tale of Two Cities",
        "author": "Charles Dickens"
    }
] */

/////////////////////////////////////////////////////
var libraryStr = '[{"title":"Harry Potter and the Chamber of Secrets","author":"J.K. Rowling"},{"title":"Moby Dick","author":"Herman Melville"},{"title":"A Tale of Two Cities","author":"Charles Dickens"}]';
gs.info('length=' + libraryStr.length);
var libraryObj = JSON.parse(libraryStr);
gs.info('length=' + libraryObj.length);
gs.info(JSON.stringify(libraryObj, null, 4));

/*
*** Script: length=186
*** Script: length=3
*** Script: [
    {
        "title": "Harry Potter and the Chamber of Secrets",
        "author": "J.K. Rowling"
    },
    {
        "title": "Moby Dick",
        "author": "Herman Melville"
    },
    {
        "title": "A Tale of Two Cities",
        "author": "Charles Dickens"
    }
]*/
