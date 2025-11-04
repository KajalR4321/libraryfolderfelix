import books from "./book.js"
import libraray from "./library.js";
 
 let libraray1= new libraray("Akshatlibrary");
//  libraray1.addbook(book)
 console.log(libraray1);
 //acces full form by this document element it target all html 
const form=document.getElementById("form-section")
//add event listener add it traget event 
form.addEventListener("submit", addbook);

function addbook(event){
    //page reload or data loose ho rha ta usko stop kar diya eventdefault ne
    event.preventDefault()
    console.log(event)
    let author=event.target[0].value;
    let publishedby=event.target[1].value;
    let publishedyear=event.target[2].value;
    let title=event.target[3].value;
    let quantity=event.target[4].value;
    let ISBN =event.target[5].value;
 
let book1 = new books(
    author,
     publishedby,
     publishedyear,
     title,
     quantity,
     ISBN
    );
    Mylib.addbook(book1);




}
