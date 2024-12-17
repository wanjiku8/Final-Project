document.addEventListener("DOMContentLoaded", () => {
    const animalGrid = document.getElementById("animal-grid");
    const searchInput = document.getElementById("search-input");

    // Store all animals data
    let animals = [];

    // Fetch the data from db.json
    fetch("http://localhost:3000/animals") // Adjust the path if running JSON server
        .then(response => response.json())
        .then(data => {
            animals = data; // Save the fetched animals data
            generateAnimalCards(animals); // Generate animal cards initially
        })
        .catch(error => console.error("Error loading animal data:", error));

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


