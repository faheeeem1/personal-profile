# Personal Profile Website

A personal portfolio website developed as part of the Web Programming three-phase personal website assignment at Rajagiri School of Engineering & Technology.

The website is progressively developed through three phases:

- Phase 1 – HTML5 and CSS3
- Phase 2 – JavaScript, DOM, jQuery and External Data
- Phase 3 – React

## About the Website

This website is a personal portfolio containing information about my profile, education, technical skills, projects, activities and contact information.

The website is being progressively enhanced across the three assignment phases while maintaining the same personal portfolio.

## Phase 2 Features

Phase 2 extends the Phase 1 website by adding JavaScript interactivity, DOM manipulation, jQuery and external API integration.

### JavaScript and DOM

The website uses an external JavaScript file to implement:

- Dynamic greeting based on the current time
- Contact form validation
- DOM access and manipulation
- Event handling using `addEventListener()`
- Arrays and objects
- Conditions and loops
- Functions
- Arrow functions
- Template literals

### Interactive Project Gallery

jQuery is used to add interactivity to the project/activity gallery.

Users can interact with project elements to dynamically update the displayed project information without reloading the page.

### My Articles

The website uses JavaScript `fetch()` to retrieve recent articles from the public DEV Community API.

The API response is received as JSON and processed dynamically using JavaScript.

At least five article titles are displayed as clickable links to the corresponding articles.

### Live Weather

The website integrates the OpenWeatherMap Current Weather API.

Users can enter a city name and retrieve:

- City name
- Current temperature in Celsius
- Weather description
- Weather icon

The weather information is updated dynamically without reloading the webpage.

### Error Handling

The website includes error handling for:

- Empty city input
- Invalid city names
- API request failures
- Network/API errors

User-friendly error messages are displayed when a request cannot be completed.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- DOM API
- jQuery
- Fetch API
- REST APIs
- DEV Community API
- OpenWeatherMap Current Weather API
- GitHub
- GitHub Pages

## Project Structure

```text
personal-profile/
│
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── images/
│   └── ...
└── README.md