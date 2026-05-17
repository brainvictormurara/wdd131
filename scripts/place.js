// --- Meta Initialization: Dynamic Footer Elements ---
document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

// --- Context Isolation: Fetch Core Conditions from Layout Elements ---
const currentTemp = parseFloat(document.getElementById('temp-value').textContent);
const currentWind = parseFloat(document.getElementById('wind-value').textContent);

/**
 * Functional Requirement: One-line algorithmic formula for Metric Wind Chill index values.
 * Uses Math.pow execution for calculating exponential exponents.
 */
const calculateWindChill = (t, v) => (13.12 + (0.6215 * t) - (11.37 * Math.pow(v, 0.16)) + (0.3965 * t * Math.pow(v, 0.16))).toFixed(1);

// --- Processing Execution Boundary Guard ---
const displayWindChill = () => {
    const windChillOutputElement = document.getElementById('wind-chill');
    
    // Guard Constraint Evaluation: Metric limits (Temp <= 10 °C AND Wind Speed > 4.8 km/h)
    if (currentTemp <= 10 && currentWind > 4.8) {
        const structuralChillIndex = calculateWindChill(currentTemp, currentWind);
        windChillOutputElement.textContent = `${structuralChillIndex} °C`;
    } else {
        windChillOutputElement.textContent = "N/A";
    }
};

// Dispatch Calculation Module during Document Processing Loop execution
displayWindChill();