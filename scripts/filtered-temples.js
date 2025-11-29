document.getElementById("currentyear").textContent = new Date().getFullYear();
const lastModifiedRaw = new Date(document.lastModified);
const options = {year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById("lastModified").textContent = lastModifiedRaw.toLocaleDateString(undefined, options);

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");

    // Toggle hamburger symbol between ☰ and X
    if (navMenu.classList.contains("show")) {
        hamburger.textContent = "✖"; // X symbol
    } else {
        hamburger.textContent = "☰"; // hamburger symbol
    }
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Johannesburg South Africa",
    location: "Johannesburg, South Africa",
    dedicated: "1985, August 25",
    area: 19184,
    imageUrl: "https://www.churchofjesuschrist.org/temples/photo-gallery/johannesburg-south-africa-temple?lang=eng"
  },
  {
    templeName: "Bern Switzerland",
    location: "Zollikofen, Bern, Switzerland",
    dedicated: "1955, September 11",
    area: 35546,
    imageUrl: "https://www.churchofjesuschrist.org/temples/photo-gallery/bern-switzerland-temple?lang=eng"
  },
  {
    templeName: "Bogota Columbia",
    location: "Bogota, Distrito Capital, Columbia",
    dedicated: "1999, April 24",
    area: 53500,
    imageUrl: "https://www.churchofjesuschrist.org/temples/photo-gallery/bogota-colombia-temple?lang=eng"
  }
  // Add more temple objects here...
];

const container = document.getElementById("temple-container");
temples.forEach(temple => {
    const card = document.createElement("div");
    card.classList.add("temple-card");

    const name = document.createElement("h2");
    name.textContent = temple.name;

    const location = document.createElement("p");
    location.textContent = `Location: ${temple.location}`;

    const dedicated = document.createElement("p");
    dedicated.textContent = `Dedicated: ${temple.dedicated}`;

    const area = document.createElement("p");
    area.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;

    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.name;
    img.loading = "lazy";

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
    card.appendChild(img);

    container.appendChild(card);

const container = document.getElementById("temple-container");


function displayTemples(filteredTemples) {
  container.innerHTML = ""; 

  filteredTemples.forEach(temple => {
    const card = document.createElement("div");
    card.classList.add("temple-card");

    card.innerHTML = `
      <h2>${temple.name}</h2>
      <p>Location: ${temple.location}</p>
      <p>Dedicated: ${temple.dedicated}</p>
      <p>Area: ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.name}" loading="lazy">
    `;

    container.appendChild(card);
  });
}

document.getElementById("home").addEventListener("click", () => {
  displayTemples(temples);
});

document.getElementById("old").addEventListener("click", () => {
  displayTemples(
    temples.filter(t => new Date(t.dedicated).getFullYear() < 1900)
  );
});

document.getElementById("new").addEventListener("click", () => {
  displayTemples(
    temples.filter(t => new Date(t.dedicated).getFullYear() > 2000)
  );
});

document.getElementById("large").addEventListener("click", () => {
  displayTemples(
    temples.filter(t => t.area > 90000)
  );
});

document.getElementById("small").addEventListener("click", () => {
  displayTemples(
    temples.filter(t => t.area < 10000)
  );
});

displayTemples(temples);    
});