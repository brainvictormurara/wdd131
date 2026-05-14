// temples.js

const temples = [
  {
    templeName: "Apia Samoa Temple",
    location: "Apia, Samoa",
    dedicated: "1983, August, 5",
    area: 18691,
    imageUrl: "images/apia-samoa-temple.jpg"
  },
  {
    templeName: "Arequipa Peru Temple",
    location: "Arequipa, Peru",
    dedicated: "2019, December, 15",
    area: 26969,
    imageUrl: "images/arequipa-peru-temple.jpg"
  },
  {
    templeName: "Barcelona Spain Temple",
    location: "Barcelona, Spain",
    dedicated: "In Announcement",
    area: 0,
    imageUrl: "images/barcelona-spain-temple.jpg"
  },
  {
    templeName: "Birmingham Alabama Temple",
    location: "Birmingham, Alabama, USA",
    dedicated: "2000, September, 3",
    area: 19200,
    imageUrl: "images/birmingham-alabama-temple.jpg"
  },
  {
    templeName: "Bountiful Utah Temple",
    location: "Bountiful, Utah, USA",
    dedicated: "1995, January, 8",
    area: 104000,
    imageUrl: "images/bountiful-temple.jpg"
  },
  {
    templeName: "Dallas Texas Temple",
    location: "Dallas, Texas, USA",
    dedicated: "1984, October, 19",
    area: 44207,
    imageUrl: "images/dallas-texas-temple.jpg"
  },
  {
    templeName: "Hungary Temple",
    location: "Budapest, Hungary",
    dedicated: "In Announcement",
    area: 0,
    imageUrl: "images/hungary-temple.jpg"
  },
  {
    templeName: "Panama City Temple",
    location: "Panama City, Panama",
    dedicated: "2008, August, 10",
    area: 19000,
    imageUrl: "images/panama-city-temple.jpg"
  },
  {
    templeName: "Philippines Temple",
    location: "Manila, Philippines",
    dedicated: "1984, September, 25",
    area: 26683,
    imageUrl: "images/philipines-temple.jpg"
  }
];

createTempleCard(temples);

function createTempleCard(filteredTemples) {

    document.querySelector(".res-grid").innerHTML = "";

    filteredTemples.forEach(temple => {

        let card = document.createElement("section");

        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedicated = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;

        location.innerHTML =
            `<span class="label">Location:</span> ${temple.location}`;

        dedicated.innerHTML =
            `<span class="label">Dedicated:</span> ${temple.dedicated}`;

        area.innerHTML =
            `<span class="label">Size:</span> ${temple.area} sq ft`;

        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", temple.templeName);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", "400");
        img.setAttribute("height", "250");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".res-grid").appendChild(card);
    });
}

document.getElementById("currentyear").textContent =
    new Date().getFullYear();

document.getElementById("lastModified").textContent =
    `Last Modified: ${document.lastModified}`;