// Store SVGS
var cpt = [
    'images/Georgiou.png',
    'images/Kirk.png',
    'images/Picard.png',
    'images/Janeway.png'
];

// Random Number Generator
let max = 5;
let randNum = Math.floor(Math.random() * max);
console.log(randNum);

// Change Captain SVG
$('.capt').attr("src", "(capt [randNum])");