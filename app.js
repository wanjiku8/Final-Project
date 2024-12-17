document.addEventListener("DOMContentLoaded", () => {
    const animalGrid = document.getElementById("animal-grid");
    const searchInput = document.getElementById("search-input");

    // Hardcoded animals data
    const animals = [
        {
            "name": "Cow",
            "image": "images/cow.jpg",
            "fact": "Cows have four stomach chambers.",
            "sound": "sounds/cow-mooing-loudly-223546.mp3"
        },
        {
            "name": "Dog",
            "image": "images/dog.jpg",
            "fact": "Dogs are loyal companions.",
            "sound": "sounds/small-dog-barking-84707.mp3"
        },
        {
            "name": "Duck",
            "image": "images/duck.jpg",
            "fact": "Ducks have waterproof feathers.",
            "sound": "sounds/duck-quacking-37392.mp3"
        },
        {
            "name": "Elephant",
            "image": "images/elephant.jpg",
            "fact": "Elephants are the largest land animals.",
            "sound": "sounds/elephant-225994.mp3"
        },
        {
            "name": "Frog",
            "image": "images/frog.jpg",
            "fact": "Frogs absorb water through their skin.",
            "sound": "sounds/frog-croaks-22312.mp3"
        },
        {
            "name": "Horse",
            "image": "images/horse.jpg",
            "fact": "Horses can sleep standing up.",
            "sound": "sounds/horse-neigh-261131.mp3"
        },
        {
            "name": "Lion",
            "image": "images/lion.jpg",
            "fact": "Lions are known as the king of the jungle.",
            "sound": "sounds/lion-roars-with-growls-and-inhales-195839.mp3"
        },
        {
            "name": "Snake",
            "image": "images/snake.jpg",
            "fact": "Snakes smell with their tongues.",
            "sound": "sounds/snake-hissing-6092.mp3"
        },
        {
            "name": "Cat",
            "image": "images/cat.jpg",
            "fact": "Cats have five toes on their front paws and four on their back paws.",
            "sound": "sounds/kittens-meowing-90204.mp3"
        },
        {
            "name": "Monkey",
            "image": "images/monkey.jpg",
            "fact": "Monkeys are highly intelligent and use tools.",
            "sound": "sounds/monkey-128368.mp3"
        },
        {
            "name": "Tiger",
            "image": "images/tiger.jpg",
            "fact": "Tigers are the largest wild cats in the world.",
            "sound": "sounds/tiger-attack-195840.mp3"
        },
        {
            "name": "Wolf",
            "image": "images/wolf.jpg",
            "fact": "Wolves travel in packs and are highly social animals.",
            "sound": "sounds/wolf-howl-268619.mp3"
        },
        {
            "name": "Bear",
            "image": "images/bear.jpg",
            "fact": "Bears can run up to 30 miles per hour.",
            "sound": "sounds/sound-of-growling-bear-hd-263159.mp3"
        },
        {
            "name": "Penguin",
            "image": "images/penguin.jpg",
            "fact": "Penguins are flightless birds that swim exceptionally well.",
            "sound": "sounds/pinguin-220042.mp3"
        },
        {
            "name": "Parrot",
            "image": "images/parrot.jpg",
            "fact": "Parrots can mimic human speech.",
            "sound": "sounds/parrots-88486.mp3"
        }
    ];

    // Generate animal cards initially
    generateAnimalCards(animals);

    // Function to generate animal cards
    function generateAnimalCards(filteredAnimals) {
        // Clear the existing cards before rendering new ones
        animalGrid.innerHTML = "";

        // Generate Animal Cards Dynamically
        filteredAnimals.forEach(animal => {
            // Create card container
            const card = document.createElement("div");
            card.className = "animal-card";

            // Animal name
            const name = document.createElement("h4");
            name.textContent = animal.name;

            // Animal image
            const img = document.createElement("img");
            img.src = animal.image;
            img.alt = animal.name;

            // Fact box
            const factBox = document.createElement("div");
            factBox.className = "animal-fact-box";
            factBox.innerHTML = `
                <p>${animal.fact}</p>
            `;

            // Create button to play sound
            const soundButton = document.createElement("button");
            soundButton.textContent = "Click to hear sound";
            soundButton.className = "sound-button";

            // Add event listener to play sound when clicked
            soundButton.addEventListener("click", () => {
                const audio = new Audio(animal.sound); // Assuming each animal object has a sound property
                audio.play();

                // Set a timeout to stop the sound after 5 seconds (5000 milliseconds)
                const timeoutDuration = 5000; // Adjust this duration based on your needs

                setTimeout(() => {
                    audio.pause();
                    audio.currentTime = 0; // Reset to the beginning
                }, timeoutDuration);
            });

            // Append name, image, fact box, and sound button to card
            card.appendChild(name);    // Append animal name
            card.appendChild(img);     // Append animal image
            card.appendChild(factBox); // Append animal fact box
            card.appendChild(soundButton); // Add the sound button to the card

            // Add card to the grid
            animalGrid.appendChild(card);
        });
    }

    // Event listener for search input
    searchInput.addEventListener("input", () => {
        const searchTerm = searchInput.value.toLowerCase();
        // Filter animals based on the search term
        const filteredAnimals = animals.filter(animal => {
            return animal.name.toLowerCase().includes(searchTerm);
        });
        // Regenerate the cards with the filtered animals
        generateAnimalCards(filteredAnimals);
    });
});
