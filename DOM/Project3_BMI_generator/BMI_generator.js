let ageinput = document.querySelector("#ageInput");
let maleselect = document.querySelector("#male");
let femaleselect = document.querySelector("#female");
let heightinput = document.querySelector("#heightInput");
let weightinput = document.querySelector("#weightInput");
let calculateButton = document.querySelector("#calculateButton");
let bmiStatusShower = document.querySelector(".bmiDescriptionContainer");

let bmivalue;
let bmiStatus;

calculateButton.addEventListener("click", () => {
    console.log('clicked');

    let agevalue = ageinput.value;
    let heightvalue = heightinput.value;
    let weightvalue = weightinput.value;
    let selectedGender = maleselect.checked ? 'Male' : femaleselect.checked ? 'Female' : 'Not selected';
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
            <div class="bmiDescription" style="background-color: ${bmiStatusColor};">${bmiStatus}</div>
        </div>`;

    document.querySelector(".resultSection").innerHTML = resultshower;
});

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
