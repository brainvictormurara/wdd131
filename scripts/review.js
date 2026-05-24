document.addEventListener("DOMContentLoaded", () => {
    // 1. Read key tracking details from localStorage
    let reviewCount = localStorage.getItem("reviewCount");
    
    // 2. Safely parse and increment metric calculations
    if (!reviewCount) {
        reviewCount = 1;
    } else {
        reviewCount = parseInt(reviewCount) + 1;
    }
    
    // 3. Write value back to data container
    localStorage.setItem("reviewCount", reviewCount);
    
    // 4. Safely apply information details directly into DOM views
    const counterDisplay = document.getElementById("review-counter");
    if (counterDisplay) {
        counterDisplay.textContent = reviewCount;
    }
    
    const currentYearSpan = document.getElementById("current-year");
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});