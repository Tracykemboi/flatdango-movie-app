
function showOneFilm(film){
let poster=document.createElement('li')
poster.className='filmitem'
poster.innerHTML=`
<img src="${film.poster}">
<div class="filmcontent">
<h4>
${film.title}
</h4>
<p>
<span class="tickets-Sold">${film.tickets_sold}</span> Tickets sold
</p>
<p id='remainingtickets'>Available tickets = ${film.capacity-film.tickets_sold}</P>
<p>Theatre capacity = ${film.capacity}</p>
<p>Show runtime = ${film.runtime}</p>
<p>Showtime = ${film.showtime}</p>
<p>Movie story line:${film.description}</p>

<div> 
<button id='Purchaseticket'> Buy Ticket</button>
</div>
</div>
`
poster.querySelector('#Purchaseticket').addEventListener('click',()=>{
  film.tickets_sold+= 1 
    poster.querySelector('span').textContent=film.tickets_sold
})
document.querySelector('#films').appendChild(poster)
}

// fetch requests
// get fetch for all films
function getAllFilms() {
    fetch('http://localhost:3000/films')
    .then(res=>res.json())
    .then(films=> films.forEach(film => showOneFilm(film)))
}
function updateTicketPurchase(filmObj) {
    fetch(`http://localhost:3000/films/${film.id}`,{
        method:'PATCH',
        headers:{
            'Content-Type':'application/json-patch+json'
        },
        body:JSON.stringify(filmObj)
    })
    .then(res=>res.json())
    .then(films=>console.log(films))

}


function initializeFilms() {
    return getAllFilms()
    // films.forEach(film => showOneFilm(film))
}
initializeFilms()
