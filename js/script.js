const placeNames = ["Japan", "South Korea", "Canada", "Belgium", "Zimbabwe"];
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


// second checkpoint scripts below

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
  { image: "./assets/img/newzeland.jpg", name: "New Zealand", attractions: "Pristine nature, breathtaking scenery, and adventure opportunities make New Zealand a haven for outdoor enthusiasts.", price: "$600", rating: "4" },
  { image: "./assets/img/india.jpg", name: "India", attractions: "Vibrant culture, diverse landscapes, and rich heritage make India a captivating destination for travelers worldwide.", price: "$500", rating: "5" },
  { image: "./assets/img/south_korea.jpg", name: "South Korea", attractions: "Blend of modernity and tradition, South Korea offers dynamic cities, ancient temples, and delectable cuisine.", price: "$700", rating: "4" },
  { image: "./assets/img/argentina.jpg", name: "Argentina", attractions: " Tango rhythms, stunning landscapes, and a passion for football encapsulate Argentina's vibrant essence.", price: "$1200", rating: "3" },
  { image: "./assets/img/england.jpg", name: "England", attractions: "Historical landmarks, royal traditions, and cultural diversity define England's timeless appeal.", price: "$300", rating: "4" },
  { image: "./assets/img/germany.jpg", name: "Germany", attractions: "Known for efficiency, picturesque landscapes, and a rich history, Germany boasts a unique blend of old-world charm and innovation.", price: "$500", rating: "4" },
  { image: "./assets/img/kenya.jpg", name: "Kenya", attractions: " Home to diverse wildlife, stunning savannas, and vibrant culture, Kenya offers unforgettable safari experiences.", price: "$200", rating: "3" },
  { image: "./assets/img/france.jpg", name: "France", attractions: " Iconic landmarks, exquisite cuisine, and artistic allure define France's charm and cultural magnificence.", price: "$3440", rating: "4" },
  { image: "./assets/img/turkey.jpg", name: "Turkey", attractions: " Bridging East and West, Turkey entices with ancient ruins, vibrant bazaars, and scenic coastlines.", price: "$500", rating: "4" },
];


// Dynamically populate packages and services
document.addEventListener("DOMContentLoaded", function () {
  var packageSection = document.querySelector(".package-section");
  packages.forEach(function (package) {
    var card = createPackageCard(package);
    packageSection.appendChild(card);
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

  var rating = document.createElement("div");
  rating.classList.add("rating");
  rating.innerHTML = generateStarRating(package.rating);

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

// Function to generate star icons based on the rating
function generateStarRating(rating) {
  var stars = '';
  for (var i = 0; i < 5; i++) {
    if (i < rating) {
      stars += '<span class="filled-star">★</span>'; // filled star
    } else {
      stars += '<span class="empty-star">☆</span>'; // Empty star
    }
  }
  return stars;
}
// Getting services data
var services = [
  { name: "Affordable Hotel", description: "Comfortable stays at budget-friendly prices" },
  { name: "Food & Drinks", description: "Delicious local and international cuisines" },
  { name: "Safety Guide", description: "Expert guides ensuring a safe and enjoyable experience" },
  { name: "Transport", description: "We will arrange all transport for your travel wherever you want" },
  { name: "Travel insurance", description: "No need to worry about your travel problems" },
  { name: "No cancellation charges", description: "Cancel anytime and we refund you" },
];

// Function to create service slides
function createServiceSlide(service) {
  const slide = document.createElement("div");
  slide.classList.add("slide");

  const serviceImage = document.createElement("img");
  serviceImage.alt = "service image";
  serviceImage.src = "./assets/img/service_img.svg"
  serviceImage.classList.add("serviceImage");

  const serviceName = document.createElement("h3");
  serviceName.textContent = service.name;

  const serviceDescription = document.createElement("p");
  serviceDescription.textContent = service.description;

  slide.appendChild(serviceImage);
  slide.appendChild(serviceName);
  slide.appendChild(serviceDescription);

  return slide;
}

// Display services in the slider
document.addEventListener("DOMContentLoaded", function () {
  const slidesContainer = document.querySelector(".slides");

  services.forEach(function (service) {
    const slide = createServiceSlide(service);
    slidesContainer.appendChild(slide);
  });

  const slides = document.querySelectorAll(".slide");
  let slideIndex = 0;
  const totalSlides = slides.length;

  function showSlides() {
    slides.forEach((slide) => {
      slide.style.display = "none";
    });
    slides[slideIndex].style.display = "block";
  }

  function slideInterval() {
    slideIndex++;
    if (slideIndex >= totalSlides) {
      slideIndex = 0;
    }
    showSlides();
  }

  showSlides();
  setInterval(slideInterval, 3000); // Change slide every 3 seconds
});


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
        image.classList.add('show');
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
