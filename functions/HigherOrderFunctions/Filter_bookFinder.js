let books = [
    { title: 'book1', author:"author1", genre:"history",year: 2000},
    { title: 'book2', author:"author2", genre:"fiction",year: 2001},
    { title: 'book3', author:"author3", genre:"non-fiction",year: 2013},
    { title: 'book4', author:"author4", genre:"history",year: 2003},
    { title: 'book5', author:"author5", genre:"science",year: 2020},
    { title: 'book6', author:"author6", genre:"comics",year: 2010}
]

let selectedGenre = "science";
let selectedYear = 2013;
let selection = books.filter((e)=>{
    return e.genre === selectedGenre && e.year >= selectedYear;
})

console.log(selection);
