/***********TITLE*********************/

function myFunction() {
    document.getElementById("title1").innerHTML = "Welcome!";
    document.getElementById("title1").style.color = "yellow";
    setTimeout(myFunction2, 2000);
}

function myFunction1() {
    document.getElementById("title1").innerHTML = "Jason Lovell Digital";
    document.getElementById("title2").innerHTML = "Digital Projects - 2019!";
    document.getElementById("title1").style.color = "#fff";
    document.getElementById("title2").style.color = "cadetblue";
}

function myFunction2() {
    document.getElementById("title2").innerHTML = "This is my first coded project";
    document.getElementById("title2").style.color = "#66ccff";
    setTimeout(myFunction1, 1000);
}

/***********COORDS*********************/

$('#btn2').click(function (e) {
    $(document).on('mousemove', function (e) {
        $('#coords').html('Coords: Y: ' + e.clientY + " X: " + e.clientX);
    });
});

/***********BMI*********************/

'use strict';
// Define variables for range sliders
// Weight variables
var weightSlider = document.getElementById("myWeight");
var weightOutput = document.getElementById("inputWeight");
// Height variables
var heightSlider = document.getElementById("myHeight");
var heightOutput = document.getElementById("inputHeight");
// Display slider value
weightOutput.innerHTML = weightSlider.value;
heightOutput.innerHTML = heightSlider.value;
// Update sliders in real time while dragging it
weightSlider.oninput = function () {
    weightOutput.innerHTML = this.value;
}
heightSlider.oninput = function () {
    heightOutput.innerHTML = this.value;
}
// Change weight-slider value on weight-number input
function showValWeight(newVal) {
    weightSlider.value = newVal;
};
// Change height-slider value on height-number input
function showValHeight(newVal) {
    heightSlider.value = newVal;
};
// *** Change number input when dragging slider ***
// Add 2 eventListeners for weight and input sliders
weightSlider.addEventListener("input", updateValueWeight);
heightSlider.addEventListener("input", updateValueHeight);

function updateValueWeight(e) {
    weightOutput.value = e.srcElement.value;
}

function updateValueHeight(e) {
    heightOutput.value = e.srcElement.value;
}
// Calculate BMI
function calculateBmi() {
    var weight = document.bmiForm.realweight.value;
    var height = (document.bmiForm.realheight.value) / 100;
    var realbmi = (weight) / Math.pow(height, 2);
    var realbmiOutput = document.getElementById("yourbmi");
    var messageOutput = document.getElementById("evaluationMessage");
    var roundedBmi = realbmi.toFixed(1);
    messageOutput.innerHTML = ""; // Clear message before calculating new BMI
    realbmiOutput.innerHTML = " " + roundedBmi; // Print BMI
    // Appropriate message for your BMI rating
    if (roundedBmi > 26) {
        messageOutput.innerHTML = "YOU'RE FAT!!!";
    } else {

    }
    // Console loggings
    console.log('Teža: ' + weight + " kg");
    console.log('Višina: ' + height + " m");
    console.log('BMI: ' + realbmi);
}

/***********CLOCK*********************/

var inc = 1000;

clock();

function clock() {
    const date = new Date();

    const hours = ((date.getHours() + 11) % 12 + 1);
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const hour = hours * 30;
    const minute = minutes * 6;
    const second = seconds * 6;

    document.querySelector('.hour').style.transform = `rotate(${hour}deg)`
    document.querySelector('.minute').style.transform = `rotate(${minute}deg)`
    document.querySelector('.second').style.transform = `rotate(${second}deg)`
}

setInterval(clock, inc);


/*********WEIGHT CONVERTOR*******/

document.getElementById('output').style.visibility = 'hidden';

document.getElementById('lbsInput').addEventListener('input', function (e) {
    document.getElementById('output').style.visibility = 'visible';
    let lbs = e.target.value;
    document.getElementById('gramsOutput').innerHTML = lbs / 0.0022046;
    document.getElementById('kgOutput').innerHTML = lbs / 2.2046;
    document.getElementById('stnOutput').innerHTML = lbs * 0.071429;
});

/*********HEIGHT CONVERTOR*******/

document.getElementById('output2').style.visibility = 'hidden';

document.getElementById('inchInput').addEventListener('input', function (e) {
    document.getElementById('output2').style.visibility = 'visible';
    let inch = e.target.value;
    document.getElementById('feetOutput2').innerHTML = inch * 0.083333;
    document.getElementById('meterOutput2').innerHTML = inch / 39.370;
    document.getElementById('cmOutput2').innerHTML = inch / 0.39370;
});

/***********DATES*********************/

var d = new Date();
document.getElementById("date").innerHTML = d.toDateString();

document.getElementById("year").innerHTML = (new Date().getFullYear());
