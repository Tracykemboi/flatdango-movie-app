# flatdango-movie-app
Flatdango Movie Theater
Welcome to Flatdango Movie Theater! This project showcases a fictional movie theater website where users can explore available films, check showtimes, and even purchase tickets. Below, I’ll provide a comprehensive README to guide you through the project setup, structure, and usage.

Overview
The Flatdango Movie Theater website allows users to view a list of available films, along with their details such as showtimes, ticket availability, and descriptions. The project consists of an HTML file, a CSS file, and an index.js file that fetches film data from a JSON server.

Web app hosting;https://flatdango-movie-app.vercel.app/
json server https://localhost:3000/films

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
Browse the list of available movies.
Click the “Buy Ticket” button to purchase a ticket.
The available ticket count will update dynamically.
If all tickets are sold out, an alert will notify the user.
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
