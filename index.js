
function showOneFilm(film){
    let one=document.querySelector('#first-movie')//add html for the first movies
    one.innerHTML=`
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
    <button id='PurchaseTicket'> Buy Ticket</button>
    </div>
    </div>
    `//here we can update the site when we buy a ticket to indicate if sold out
    const purchaseButton = one.querySelector('#PurchaseTicket');
    purchaseButton.addEventListener('click', () => {
        if (film.tickets_sold < film.capacity) {
            film.tickets_sold += 1;
            one.querySelector('.tickets-Sold').textContent = film.tickets_sold;
            one.querySelector('#remainingtickets').textContent = `Available tickets = ${film.capacity - film.tickets_sold}`;
            updateTicketPurchase();
        } else {
            alert('Sorry, all tickets are sold out.');
        }
    });
}
  //displays all the movies to the webapp from the db.json
function showAllFilm(film){
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
<p id='remainingTickets'>Available tickets = ${film.capacity-film.tickets_sold}</P>
<p>Theatre capacity = ${film.capacity}</p>
<p>Show runtime = ${film.runtime}</p>
<p>Showtime = ${film.showtime}</p>
<p>Movie story line:${film.description}</p>

<div> 
<button id='Purchaseticket'> Buy Ticket</button>
</div>
</div>
`//here we uodate the purchases
const purchasebutton = poster.querySelector('#Purchaseticket');
    purchasebutton.addEventListener('click', () => {
        if (film.tickets_sold < film.capacity) {
            film.tickets_sold += 1;
            poster.querySelector('.tickets-Sold').textContent = film.tickets_sold;
            poster.querySelector('#remainingTickets').textContent = `Available tickets = ${film.capacity - film.tickets_sold}`;
            updateTicketPurchase();
        } else {
            alert('Sorry, all tickets are sold out.');
        }
    });
document.querySelector('#films').appendChild(poster)
}

// fetch requests
// get fetch for the first and all films
function getOneFilm() {
    fetch('http://localhost:3000/films')
            .then(res => res.json())
            .then(films => {
                // Display the first movie
                showOneFilm(films[0]);
})
}
function getAllFilms() {
    fetch('http://localhost:3000/films')
    .then(res=>res.json())
    .then(films=> films.forEach(film => showAllFilm(film)))
}
function updateTicketPurchase(filmsobj) {
    const filmId = filmsobj.id; 

    fetch(`http://localhost:3000/films/${filmId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(filmId)
    })
    .then(res => res.json())
    .then(films=> {
        console.log('Film updated:', films);
        // Handle any additional logic after updating the film
    })
    .catch(error => {
        console.error('Error updating film:', error);
        // Handle errors (e.g., network issues, invalid data, etc.)
    });
}
//function to call the fuctions that get details from db.json
function initializeFilms() {
    getOneFilm()
    return getAllFilms()
   
}
initializeFilms()
