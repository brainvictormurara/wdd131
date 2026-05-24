// 1. Updated Array containing the assignment's required temples + online URLs
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Added 3 extra temples to meet the minimum requirement of 10 total items
 {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 382207,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x250/slctemple5.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41010,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/5-Rome-Temple-2160345.jpg"
  },
  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 27",
    area: 53997,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tokyo-japan/400x250/tokyo_japan_temple-main.jpeg"
  }
];

// 2. Your Original Card Building Function (Preserved exactly)
function createTempleCard(filteredTemples) {
    const gridContainer = document.querySelector(".res-grid");
    if (!gridContainer) return; // Guard clause to prevent errors if the HTML element isn't found
    
    gridContainer.innerHTML = "";

    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        card.className = "temple-card";

        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedicated = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;

        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area.toLocaleString()} sq ft`;

        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", "400");
        img.setAttribute("height", "250");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(img);

        gridContainer.appendChild(card);
    });
}

// Helper utility: Extracts the year from the dedication string ("2005, August, 7" -> 2005)
function getYear(dateString) {
    return parseInt(dateString.split(",")[0].trim());
}

// 3. New Requirement: Set Up Navigation Event Filters
// Assumes your menu links have text matching the filters (or you can select them by ID)
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const filter = link.textContent.trim().toLowerCase();
        
        // Optional: Update an H2 heading to show what filter is active
        const mainHeading = document.querySelector("main h2");

        if (filter === "home") {
            if (mainHeading) mainHeading.textContent = "Home";
            createTempleCard(temples);
        } 
        else if (filter === "old") {
            if (mainHeading) mainHeading.textContent = "Old Temples (Built before 1900)";
            const oldTemples = temples.filter(t => getYear(t.dedicated) < 1900);
            createTempleCard(oldTemples);
        } 
        else if (filter === "new") {
            if (mainHeading) mainHeading.textContent = "New Temples (Built after 2000)";
            const newTemples = temples.filter(t => getYear(t.dedicated) > 2000);
            createTempleCard(newTemples);
        } 
        else if (filter === "large") {
            if (mainHeading) mainHeading.textContent = "Large Temples (Over 90,000 sq ft)";
            const largeTemples = temples.filter(t => t.area > 90000);
            createTempleCard(largeTemples);
        } 
        else if (filter === "small") {
            if (mainHeading) mainHeading.textContent = "Small Temples (Under 10,000 sq ft)";
            const smallTemples = temples.filter(t => t.area < 10000);
            createTempleCard(smallTemples);
        }
    });
});

// 4. Initial Run on Page Load
createTempleCard(temples);

// 5. Your Original Footer Automation Script
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;