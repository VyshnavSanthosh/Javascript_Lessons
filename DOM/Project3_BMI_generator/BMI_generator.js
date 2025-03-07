let ageinput = document.querySelector("#ageInput");
let maleselect = document.querySelector("#male");
let femaleselect = document.querySelector("#female");
let heightinput = document.querySelector("#heightInput");
let weightinput = document.querySelector("#weightInput");
let calculateButton = document.querySelector("#calculateButton");
let neckinput = document.querySelector("#neckInput");
let waistinput = document.querySelector("#waistInput");
let bmiStatusShower = document.querySelector(".bmiDescriptionContainer");
let calculatefatButton = document.querySelector("#calculatefatButton");
let bmivalue;
let bmiStatus;
let agevalue;
let selectedGender;
let neckvalue;
let waistvalue;
let heightvalue;
let weightvalue;
let fatvalue;

function calculatebmi(){
    console.log('clicked');
    agevalue = ageinput.value;
    heightvalue = heightinput.value;
    weightvalue = weightinput.value;
    selectedGender = maleselect.checked ? 'Male' : femaleselect.checked ? 'Female' : 'Not selected';
    console.log(agevalue, heightvalue, weightvalue, selectedGender);

    let height = heightvalue / 100; // Convert height to meters
    console.log(height);

    bmivalue = weightvalue / (height * height);
    bmivalue = bmivalue.toFixed(2); // Round to two decimal places
    console.log(bmivalue);

    checkbmi(); // Determine BMI status

    let resultshower = `
        <div class="resultScreen">
            <div class="bmiLabel">Your BMI is :</div>
            <div id="bmiResult">${bmivalue}</div>
            <div class="bmiDescription" style="background-color: ${bmiStatusColor}; color: black;">${bmiStatus}</div>
        </div>`;

    document.querySelector(".resultSection").innerHTML = resultshower;
};

function calculatefat(){
    console.log('clicked');
    agevalue = ageinput.value;
    heightvalue = heightinput.value;
    weightvalue = weightinput.value;
    neckvalue = neckinput.value;
    waistvalue = waistinput.value;
    selectedGender = maleselect.checked ? 'Male' : femaleselect.checked ? 'Female' : 'Not selected';
    console.log(agevalue, heightvalue, weightvalue, selectedGender);
    if (selectedGender === 'Male'){
        console.log("male");
        fatvalue = men_body_fat();
    }
    else if (selectedGender === 'Female'){
        console.log("female");
        fatvalue = women_body_fat();
    }
    let bodyfatshower = `        <div class="resultScreenbodyfat">
            <div class="fatLabel">Your Body Fat Percentage is :</div>
            <div id="fatResult">${fatvalue}</div>
        </div>`
    document.querySelector(".resultSectionbodyFat").innerHTML = bodyfatshower;
}


// Function to check BMI status and set background color
function checkbmi() {
    if (bmivalue < 18.5) {
        bmiStatus = "Underweight";
        bmiStatusColor = "#8bdef8"; // Light red for underweight
    } else if (bmivalue >= 18.59 && bmivalue < 24.99) {
        bmiStatus = "Normal";
        bmiStatusColor = "#5de755"; // Light green for normal weight
    } else if (bmivalue >= 25 && bmivalue < 29.99) {
        bmiStatus = "Overweight";
        bmiStatusColor = "#ffa332"; // Yellow for overweight
    } else {
        bmiStatus = "Obease";
        bmiStatusColor = "#f44336"; // Red for obesity
    }
}
function men_body_fat() {
    const bodyfatmen  = (495/(1.0324 - 0.19077* Math.log10(waistvalue - neckvalue) + 0.15456 * Math.log10(heightvalue))) - 450;
    return bodyfatmen.toFixed(2);
}
function women_body_fat() {
    const bodyfatwomen = (495/(1.29579 - 0.35004 * Math.log10(waistvalue - neckvalue) + 0.22100 * Math.log10(heightvalue))) - 450;
    return bodyfatwomen.toFixed(2);
}

function updateWaistInput() {
    selectedGender = maleselect.checked ? "Male" : femaleselect.checked ? "Female" : "Not selected";

    let waistsectionviewer;
    if (selectedGender === "Female") {
        waistsectionviewer = `
            <div class="waistLabel">Waist+Hip(cm)</div>
            <input type="number" id="waistInput">`;
    } else {
        waistsectionviewer = `
            <div class="waistLabel">Waist size(cm)</div>
            <input type="number" id="waistInput">`;
    }
    document.querySelector(".waistscreen").innerHTML = waistsectionviewer;
    waistinput = document.querySelector("#waistInput"); // Update reference to the new input
}

// Add event listeners to the gender radio buttons
maleselect.addEventListener("change", updateWaistInput);
femaleselect.addEventListener("change", updateWaistInput);

// Initial call to set the waist input based on default selection
