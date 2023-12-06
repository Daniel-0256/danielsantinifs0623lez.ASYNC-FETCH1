const booksApiUrl = "https://striveschool-api.herokuapp.com/books"
const libreria = document.querySelector(".row")
let cardHtml = ""

fetch(booksApiUrl)
   .then((response) => response.json())
   .then((data) => {
       data.foreach(book => {
        cardHtml +=
        `<div class="col-lg-3">
        <div class="card">
            <img src=${book.img} class="card-img-top" alt="img">
            <div class="card-body">
              <h5 class="card-title">${book.title}</h5>
              <p class="card-text">${book.price}</p>
              <p class="card-text">${book.category}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
      </div>`
       })
   })

libreria.innerHTML = cardHtml