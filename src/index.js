const uniqueRandomArray = require('unique-random-array');
const starWarsNames = require('./starwars-names.json');
const getRandomItem = uniqueRandomArray(starWarsNames);

module.exports = {
    all: starWarsNames,
    random: random,
};

function random(number) {
    if (number === undefined) {
        return getRandomItem();
    } else {
        const randomItems = [];
        for (let index = 0; index < number; index++) {
            randomItems.push(getRandomItem());
        }
        return randomItems;
    }
}