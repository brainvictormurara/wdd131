// Smart Farming Client Processing Core
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Dynamic Footer Last Modified Date Generator (BYU-I Requirement)
    const modifiedElement = document.getElementById("lastModified");
    if (modifiedElement) {
        modifiedElement.textContent = document.lastModified;
    }

    // 2. Form Processing Logic
    const inquiryForm = document.querySelector(".agro-form");
    if (inquiryForm) {
        inquiryForm.addEventListener("submit", (event) => {
            const farmerName = document.getElementById("farmer-name").value;
            const region = document.getElementById("region-select").value;
            
            const trackingPayload = {
                user: farmerName,
                location: region,
                timestamp: new Date().toISOString()
            };
            
            localStorage.setItem("latestInquiry", JSON.stringify(trackingPayload));
        });
    }
    
});