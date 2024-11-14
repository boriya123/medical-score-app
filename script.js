// Function to switch between tabs
function showTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.tab-button');
    
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    buttons.forEach(button => {
        button.classList.remove('active');
    });

    document.getElementById(tabName).classList.add('active');
    const activeButton = Array.from(buttons).find(button => button.textContent.toLowerCase() === tabName);
    activeButton.classList.add('active');
}

// DVT Score Calculation
function calculateDVTScore() {
    const age = parseInt(document.getElementById("dvtAge").value);
    const history = document.getElementById("dvtHistory").value;
    const symptoms = document.getElementById("dvtSymptoms").value;

    let riskScore = 0;

    if (age >= 60) riskScore += 1;
    if (history === "yes") riskScore += 2;
    if (symptoms === "yes") riskScore += 2;

    let riskLevel = "";
    if (riskScore <= 2) {
        riskLevel = "Low Risk";
    } else if (riskScore <= 4) {
        riskLevel = "Moderate Risk";
    } else {
        riskLevel = "High Risk";
    }

    document.getElementById("dvtResult").textContent = `Risk Assessment: ${riskLevel}`;
}

// Early Warning Score (EWS) Calculation
function calculateEWS() {
    const respiratory = parseInt(document.getElementById("ewsRespiratory").value);
    const oxygen = parseInt(document.getElementById("ewsOxygen").value);
    const systolicBP = parseInt(document.getElementById("ewsSystolicBP").value);
    const heartRate = parseInt(document.getElementById("ewsHeartRate").value);
    const consciousness = document.getElementById("ewsConsciousness").value;

    let riskScore = 0;

    if (respiratory > 20 || respiratory < 12) riskScore += 1;
    if (oxygen < 90) riskScore += 1;
    if (systolicBP < 90) riskScore += 1;
    if (heartRate < 40 || heartRate > 120) riskScore += 1;
    if (consciousness === "unconscious") riskScore += 2;

    let riskLevel = "";
    if (riskScore <= 2) {
        riskLevel = "Low Risk";
    } else if (riskScore <= 4) {
        riskLevel = "Moderate Risk";
    } else {
        riskLevel = "High Risk";
    }

    document.getElementById("ewsResult").textContent = `Risk Assessment: ${riskLevel}`;
}

// APGAR Score Calculation
function calculateAPGAR() {
    const heartRate = parseInt(document.getElementById("apgarHeartRate").value);
    const respiration = parseInt(document.getElementById("apgarRespiration").value);
    const muscleTone = parseInt(document.getElementById("apgarMuscleTone").value);
    const reflex = parseInt(document.getElementById("apgarReflex").value);
    const skinColor = parseInt(document.getElementById("apgarSkinColor").value);

    let apgarScore = heartRate + respiration + muscleTone + reflex + skinColor;

    let apgarRisk = "";
    if (apgarScore <= 3) {
        apgarRisk = "Critical";
    } else if (apgarScore <= 6) {
        apgarRisk = "Fair";
    } else if (apgarScore <= 7) {
        apgarRisk = "Good";
    } else {
        apgarRisk = "Excellent";
    }

    document.getElementById("apgarResult").textContent = `APGAR Score: ${apgarRisk}`;
}
