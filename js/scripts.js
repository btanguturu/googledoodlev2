// Store SVGS
var cpt = [
    'images/Georgiou.svg',
    'images/Kirk.svg',
    'images/Picard.svg',
];

// Random Number Generator
let max = 5;
let randNum = Math.floor(Math.random() * max);
console.log(randNum);

// Change Captain SVG
$('.capt').attr("src", "(capt [randNum])");