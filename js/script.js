
// dynamic greeting
const greeting = document.getElementById("greeting");
const current_hour = new Date().getHours();

if (current_hour < 12){
    greeting.textContent = 'Good Morning! Welcome to my Website';
}
else if (current_hour < 18){
    greeting.textContent = 'Good Afternoon! Welcome to my Website';
}
else{
    greeting.textContent = 'Good Evening! Welcome to my Website';
}


// form verification
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function(event){
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const contactMethod = document.querySelector(
        'input[name="contact"]:checked'
    );

    if (name === ""){
        alert("please enter your name");
        return;
    }
    if (email === ""){
        alert("please enter your email");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)){
        alert("please enter valid email")
        return;
    }

    if (message === ""){
        alert("please enter your message");
        return;
    }
    if (!contactMethod){
        alert("please select a preferred contact method")
        return;
    }

    alert("Thank You! Your message has been submitted.")
});


//adding array object functions
const projects = [
    {
        title: "Online Course Registration System",
        description: "A system for students to view and register for courses."
    },
    {
        title: "Personal Website",
        description: "A personal portfolio website created using HTML and CSS."
    }
];

const showProjects = () => {
    projects.forEach(project => {
        console.log(`${project.title}: ${project.description}`);
    });
};

showProjects();
const projectCount = document.getElementById("projectCount");

projectCount.textContent = `I have completed ${projects.length} projects.`;



// adding interactive cards for my projects section
const projectCards = document.querySelectorAll(".project");
const projectDisplay = document.getElementById("projectDisplay");

projectCards.forEach(function(card) {
    card.addEventListener("click", function() {

        const projectType = card.getAttribute("data-project");

        if (projectType === "course") {
            projectDisplay.innerHTML = `
                <h3>Online Course Registration System</h3>
                <p>
                    This project allows students to view available courses
                    and register for them using an Oracle database.
                </p>
            `;
        }
        else if (projectType === "website") {
            projectDisplay.innerHTML = `
                <h3>Personal Website</h3>
                <p>
                    This is my personal portfolio website created using
                    HTML5, CSS3 and JavaScript.
                </p>
            `;
        }
    });
});


//adding jquery animations
$(".project").hover(
    function() {
        $(this).stop().animate({
            opacity: 0.3
        }, 200);
    },
    function() {
        $(this).stop().animate({
            opacity: 1
        }, 200);
    }
);


// Fetching articles from DEV.to API

const articlesContainer = document.getElementById("articles-container");
const fetchArticles = async () => {

    try {
        const response = await fetch(
            "https://dev.to/api/articles/latest?per_page=5"
        );
        if (!response.ok) {
            throw new Error("Unable to fetch articles");
        }

        const articles = await response.json();
        articlesContainer.innerHTML = "";
        articles.forEach(article => {
            const articleElement = document.createElement("article");

            articleElement.innerHTML = `
                <h3>
                    <a href="${article.url}" target="_blank">
                        ${article.title}
                    </a>
                </h3>
            `;
            articlesContainer.appendChild(articleElement);
        });

    } catch (error) {
        articlesContainer.innerHTML =
            "<p>Unable to load articles. Please try again later.</p>";
        console.error("Article API Error:", error);
    }
};

fetchArticles();




// Live Weather

const cityInput = document.getElementById("city-input");
const weatherButton = document.getElementById("weather-button");
const weatherResult = document.getElementById("weather-result");

const API_KEY = "99e2b761fbf9f4ed46f4826f5e7ef916";

const getWeather = async () => {
    const city = cityInput.value.trim();

    if (city === "") {
        weatherResult.innerHTML = "<p>Please enter a city name.</p>";
        return;
    }

    weatherResult.innerHTML = "<p>Loading weather...</p>";

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`
        );

        if (!response.ok) {
            const errorData = await response.json();
            console.error("OpenWeather API Error:", errorData);

            throw new Error(errorData.message || "Weather request failed");
        }

        const weatherData = await response.json();

        const temperature = Math.round(weatherData.main.temp);
        const description = weatherData.weather[0].description;
        const icon = weatherData.weather[0].icon;

        weatherResult.innerHTML = `
            <h3>${weatherData.name}</h3>
            <img
                src="https://openweathermap.org/img/wn/${icon}@2x.png"
                alt="${description}"
            >
            <p>${temperature}°C</p>
            <p>${description}</p>
        `;

    } catch (error) {
        weatherResult.innerHTML =
            "<p>Unable to load weather. Please try again later.</p>";

        console.error("Weather API Error:", error);
    }
};

weatherButton.addEventListener("click", getWeather);

