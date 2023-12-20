const placeNames = ["Paris", "New York", "Tokyo", "Sydney", "London"];
let index = 0;
const placeNameElement = document.getElementById("placeName");

function changePlaceName() {
    placeNameElement.textContent = `Visit ${placeNames[index]}`;
    index = (index + 1) % placeNames.length;
}

setInterval(changePlaceName, 200);

document.getElementById("bookNowBtn").addEventListener("click", () => {
    // Handle the "Book Now" button click event
});

document.getElementById("loginBtn").addEventListener("click", () => {
    // Handle the "Login" button click event
});

document.getElementById("registerBtn").addEventListener("click", () => {
    // Handle the "Register" button click event
});

// second checkpoint

// Set the minimum date for the start date input to today
document.getElementById('startDate').min = new Date().toISOString().split('T')[0];

// Set the minimum date for the end date input to the selected start date
document.getElementById('startDate').addEventListener('change', function () {
    document.getElementById('endDate').min = this.value;
});

function bookNow() {
    // Get all input elements in the form
    var inputs = document.getElementById('bookingForm').getElementsByTagName('input');
    var selects = document.getElementById('bookingForm').getElementsByTagName('select');
    var textareas = document.getElementById('bookingForm').getElementsByTagName('textarea');

    // Check if all inputs are filled
    var isValid = true;

    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].type !== 'button' && inputs[i].value === '') {
            isValid = false;
            break;
        }
    }

    // Check if all selects are filled
    for (var i = 0; i < selects.length; i++) {
        if (selects[i].value === '') {
            isValid = false;
            break;
        }
    }

    // Check if all textareas are filled
    for (var i = 0; i < textareas.length; i++) {
        if (textareas[i].value === '') {
            isValid = false;
            break;
        }
    }

    // Display alert based on validation result
    if (isValid) {
        alert('Booking successful');
    } else {
        alert('Please fill in all fields');
    }

}


// Sample data for packages
var packages = [
    { image: "./assets/img/tokyo.jpg", name: "Tokyo", attractions: "Tokyo is the administrative, cultural, financial, commercial, and educational centre of Japan and the focus of an extensive urban complex that includes Kawasaki and Yokohama.", price: "$600", rating: "4.5" },
    { image: "./assets/img/india.jpg", name: "India", attractions: "India is part of the continent of Asia. Most of India forms a peninsula, which means it is surrounded by water on three sides. ", price: "$500", rating: "5.0" },
    { image: "./assets/img/paris.jpg", name: "Paris", attractions: "Paris has been one of the world's major centres of finance, diplomacy, commerce, culture, fashion, gastronomy and many areas.", price: "$700", rating: "4.5" },
    { image: "./assets/img/dubai.jpg", name: "Dubai", attractions: "Known as the “capital of UAE's economy,” Dubai is a key financial and trading hub, and one of the fastest growing cities in the world.", price: "$1200", rating: "8.0" },
    { image: "./assets/img/indonesia.jpg", name: "Indonesia", attractions: "Indonesia is the largest country in Southeast Asia, with a maximum dimension from east to west of about 3,200 miles (5,100 km) and an extent from north to south of 1,100 miles (1,800 km)", price: "$300", rating: "4.3" },
    { image: "./assets/img/germany.jpg", name: "Germany", attractions: "Germany's central and southern regions have forested hills and mountains cut through by the Danube, Main, and Rhine river valleys.", price: "$500", rating: "4.5" },
    { image: "./assets/img/zimbabwe.jpg", name: "Africa", attractions: "Africa, the second-largest continent, is bounded by the Mediterranean Sea, the Red Sea, the Indian Ocean, and the Atlantic Ocean.", price: "$200", rating: "3.5" },
    { image: "./assets/img/russia.jpg", name: "Russia", attractions: "Russia, the largest country in the world, occupies one-tenth of all the land on Earth. It spans 11 time zones across two continents (Europe and Asia) and has coasts on three oceans (the Atlantic, Pacific, and Arctic).", price: "$3440", rating: "7.5" },
    { image: "./assets/img/spain.jpg", name: "Spain", attractions: "Although there is a national parliament, Spain is one of the most decentralized democracies in Europe. Each of its 17 regions manages its own schools, hospitals, and other public services.", price: "$500", rating: "4.5" },
];

// Sample data for services
var services = [
    { name: "Affordable Hotel", description: "Comfortable stays at budget-friendly prices" },
    { name: "Food & Drinks", description: "Delicious local and international cuisines" },
    { name: "Safety Guide", description: "Expert guides ensuring a safe and enjoyable experience" },
    { name: "Transport", description: "We will arrange all transport for your travel where ever you want" },
    { name: "Travek insurance", description: "No need to worry about your travel problems" },
    { name: "No cancellation charges", description: "Cancel anytime and we refund you" },
];

// Dynamically populate packages and services
document.addEventListener("DOMContentLoaded", function () {
    var packageSection = document.querySelector(".package-section");
    packages.forEach(function (package) {
        var card = createPackageCard(package);
        packageSection.appendChild(card);
    });

    var servicesSection = document.querySelector(".services-section");
    services.forEach(function (service) {
        var card = createServiceCard(service);
        servicesSection.appendChild(card);
    });
});


// function to map the packages card to dom element
function createPackageCard(package) {
    var card = document.createElement("div");
    card.classList.add("package-card");

    var image = document.createElement("img");
    image.src = package.image;
    image.alt = package.name;

    var heading = document.createElement("h3");
    heading.textContent = package.name;

    var paragraph = document.createElement("p");
    paragraph.textContent = package.attractions;

    var price = document.createElement("p");
    price.textContent = "Price: " + package.price;

    var rating = document.createElement("p");
    rating.textContent = "Rating: " + package.rating;

    var bookNowBtn = document.createElement("button");
    bookNowBtn.textContent = "Book Now";

    card.appendChild(image);
    card.appendChild(heading);
    card.appendChild(paragraph);
    card.appendChild(price);
    card.appendChild(rating);
    card.appendChild(bookNowBtn);

    return card;
}

// function to map service card to dom element
function createServiceCard(service) {
    var card = document.createElement("div");
    card.classList.add("service-card");

    var heading = document.createElement("h3");
    heading.textContent = service.name;

    var paragraph = document.createElement("p");
    paragraph.textContent = service.description;

    card.appendChild(heading);
    card.appendChild(paragraph);

    return card;
}

// checkpoint 3 js starts here

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add the 'show' class when the image is in the viewport
function showImage() {
    const galleryImages = document.querySelectorAll('.gallery-image');
    galleryImages.forEach((image, index) => {
        if (isInViewport(image)) {
            setTimeout(() => {
                image.style.transition = `opacity 0.5s ease-in-out`;
                image.style.opacity = 1;
            }, index * 200); // Adjust the delay timing as needed
        }
    });
}
function showAboutUsImage() {
    const images = document.getElementById('about-us');
    if (isInViewport(images)) {
        setTimeout(() => {
            const image = images.querySelector('img');
            image.style.width = '50%'; // Set width to 100% to scale up gradually
        }, index * 200);

    }

}

// Event listener for scrolling
window.addEventListener('scroll', showImage);
window.addEventListener('scroll', showAboutUsImage);

// Initial check on page load
showImage();
showAboutUsImage();

function navigateToNextPage(pageName) {
    let destinationPage;

    // Determine the destination page based on the parameter
    if (pageName === 'register') {
        destinationPage = 'register.html';
    } else if (pageName === 'login') {
        destinationPage = 'login.html';
    } else if (pageName === 'home') {
        destinationPage = 'home.html';
    } else {
        // Default to a specific page when an unknown parameter is passed
        destinationPage = 'default.html';
    }

    // Navigate to the determined page
    window.location.href = destinationPage;
}

