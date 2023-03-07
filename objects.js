
// Objects in JS

var bellBoy = {
    name: "Timmy",
    age: 18,
    hasWorkPermit: "yes",
    languages: ["Spanish", "English"],
    help: function() {
        alert("May I help you?")
    }
}

// Factory for objects in JS

function HouseKeeperFactory(name, age, yearsOfExprerience, likesToClean) {
    this.name = name;
    this.age = age;
    this.yearsOfExprerience = yearsOfExprerience;
    this.likesToClean = likesToClean;
    this.clean = function() {
        alert("Cleaning in process...")
    }
}

var houseKeeper1 = new HouseKeeperFactory("Jenny", 20, 4, ["bathroom", "bedroom"]);

houseKeeper1.clean()
bellBoy.help()


