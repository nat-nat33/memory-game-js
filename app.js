//adds card images for flipped cards into array
var cardImage = [];
cardImage[0] = '/assets/zombie.png';
cardImage[1] = '/assets/vampire.jpg';
cardImage[2] = '/assets/ghost.jpg';
cardImage[3] = '/assets/zombie.png';
cardImage[4] = '/assets/vampire.jpg'
cardImage[5] = '/assets/ghost.jpg';

var clicks = 0; //counter for how many selections have been made in each turn
var firstSelect; //stores index of the first selection
var secondSelect; //stores index of the second selection

var matches = 0; //counter for matches made
var cardBack = "/assets/question.jpg"; //displays back of the card when flipped back over

