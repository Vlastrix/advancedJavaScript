// Totally accurate who is buying calculator XD

function whoIsBuying(names) {
    if (names.includes("Vladi")) names.splice(names.indexOf('Vladi'), 1);
    if (names.includes("Vladislav")) names.splice(names.indexOf('Vladislav'), 1);
    var randomNumber = Math.round(Math.random() * (names.length - 1));
    console.log(`The random number is ${randomNumber + 1}.`);
    var totallyRandomPerson = names[randomNumber];
    return totallyRandomPerson + " is going to buy lunch today!";
}

console.log(whoIsBuying(["Andrea", "Paula", "Erick", "Andres", "Vladi"]));

