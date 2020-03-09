// Store SVGS
var cpt = [
    "https://raw.githubusercontent.com/btanguturu/googledoodlev2/master/images/Georgiou.png",
    "https://raw.githubusercontent.com/btanguturu/googledoodlev2/master/images/Kirk.png",
    "https://raw.githubusercontent.com/btanguturu/googledoodlev2/master/images/Picard.png",
    "https://raw.githubusercontent.com/btanguturu/googledoodlev2/master/images/Janeway.png"
];

// Random Number Generator
let max = 4;
let randNum = Math.floor(Math.random() * max);
console.log(randNum);

// Change Captain Image
$('#capt').attr("src", cpt[randNum]);