# flatdango-movie-app
Flatdango Movie Theater
Welcome to Flatdango Movie Theater! This project showcases a fictional movie theater website where users can explore available films, check showtimes, and even purchase tickets. Below, I’ll provide a comprehensive README to guide you through the project setup, structure, and usage.

Overview
The Flatdango Movie Theater website allows users to view a list of available films, along with their details such as showtimes, ticket availability, and descriptions. The project consists of an HTML file, a CSS file, and an index.js file that fetches film data from a JSON server.

Web app hosting;

Features
HTML Structure (index.html):
The index.html file provides the basic structure of our movie theater website.
Key components include:
A header displaying the title “Flatdango Movie Theater.”
An empty movie list that will be populated dynamically.
CSS Styling (style.css):
The style.css file contains styling rules for various elements.
Notable styles include:
Setting a minimum height for the body (min-height: 100vh) to ensure proper layout.
Styling the header with a pale violet-red background color and centered text.
Defining styles for the movie content container (#filmcontent).
JavaScript (index.js):
The heart of the project lies in the JavaScript file.
Let’s break down the key functions:
showOneFilm(film):
Creates a movie poster element with relevant information.
Dynamically displays movie details, including title, tickets sold, remaining tickets, runtime, showtime, and description.
Provides a “Buy Ticket” button that increments the ticket count when clicked.
Appends the movie poster to the list of films.
getAllFilms():
Fetches movie data from the http://localhost:3000/films endpoint (assuming you have a local JSON server running).
Calls showOneFilm(film) for each movie in the response.
updateTicketPurchase(filmObj):
Updates the ticket count for a specific movie.
Sends a PATCH request to the server with the modified data.
initializeFilms():
Calls getAllFilms() to populate the movie list when the page loads.
 

Installation
Clone this repository to your local machine.
Make sure you have Node.js installed.
Install the project dependencies by running:
npm install

Usage
Start the JSON server:
npm run json-server
This will serve the film data from the db.json file.
Open the index.html file in your browser to explore the movie listings.
Click the “Buy Ticket” button to simulate purchasing a ticket (the ticket count will increase).
API Data
The film data is stored in the db.json file. Each film object has the following properties:

id: Unique identifier for the film.
title: Film title.
runtime: Duration of the film.
capacity: Maximum theater capacity.
showtime: Scheduled showtime.
tickets_sold: Number of tickets sold.
description: Brief description of the film.
poster: URL to the film poster image.
