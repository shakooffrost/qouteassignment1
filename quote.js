var quotes = ["I'm with you 'till the end of the line. - Captain America", "the price of freedom is high; it always has been. And it's a price I'm willing to pay. And if I'm the only one, then so be it. But I'm willing to bet I'm not. - Captain America", "I am Ironman - Tony Stark", "So I take the tank, fly it right up to the general's palace, drop it at his feet, I'm like 'Boom, you looking for this?'- War Machine", "Fun isn't something one considers when balancing the universe. - Thanos", "This does put a smile on my face - Thanos", "I know what it's like to lose, to feel so desperate that you're right then fail all the same - Thanos", "You should have gone for the head. - Thanos to Thor", "Dread it. Run from it. Destiny still arrives. - Thanos", "HULK SMASH!! - Hulk", "With Great Power, comes Great Responsibility - Uncle Ben to Spiderman", "We don't want to kill you, but we will. - Black Widow", "I've got Red on my Ledger - Black Widow", "Wakanda Forever! - Black Panther", "Hey, hey! We know each other! He's a friend from work! - Thor ", "Asgard's not a place, it's the people. - Thor", "Tick-tick boom - Hawkeye", "I've done the whole mind  control thing. Not a fan. - Hawkeye", " 'Whosoever, be he worthy, shall haveth the power' whatever man! It's a trick!", "My only curse is you. - Ironman", "I dont feel so good - Spiderman", "You step outside that door, you're an Avenger - Hawkeye", "Isn't it why we fight so we could end the fight and go home? - Ironman", "I see a suit of armor around the world - Ironman", "Puny god - Hulk"]

var myVar = setInterval(newQuote, 20000);

var randomNumber;


function displayCurrentQoutes(qoute) {
    document.getElementById('quoteDisplay').innerHTML = qoute;
}

function newQuote() {
    randomNumber = Math.floor(Math.random() * (quotes.length));
    displayCurrentQoutes(quotes[randomNumber])
}

function prev() {
    randomNumber = randomNumber + 1;
    randomNumber = randomNumber % quotes.length;
    displayCurrentQoutes(quotes[randomNumber])
}
function next() {
    if (randomNumber === 0) {
        randomNumber = quotes.length;
    }
    randomNumber = randomNumber - 1;
    displayCurrentQoutes(quotes[randomNumber])
}


