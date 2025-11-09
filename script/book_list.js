//it acces root html for index.html
const container = document.getElementById("root");
const booklist = JSON.parse(localStorage.getItem("booklist"))||[];
console.log(booklist);
//take render book only work to insert html make function
const renderBook = () => {
  //check the lengt
  if (booklist.length <= 0) {
    container.innerHTML = `<div>
  <p>
  No books avilable! Add some book
  </p>
  </div>`;
  return;
  }
  //start from empty
  container.innerHTML=""
  //it take callback function  so add element
  booklist.forEach((bk) => {
    //dought hai
    let div=document.createElement("div")
    div.classList="book_car_container"
    //$ sign is take for assign variable and(` `) sign take for string when itake $ so use (``)
    div.innerHTML=`<div class="Book_card">
    
      <h2>${bk.title}</h2>
      <h3>${bk.author}</h3>
    </div>`
    //append insert item in last()
    container.appendChild(div);
    
  });
};
renderBook();
//want tag like p ,h use inner htmltag this content is also take from google
// container.innerHTML = `
// <a  
//   class="book-container"
//   href=""
//   target="_blank"
//   rel="noreferrer noopener"
// >
//   <div class="book">
//   <h2>Harry potter</h2>
//     <img
//       alt=""
// src=""      />
//   </div>
// </a>`;
