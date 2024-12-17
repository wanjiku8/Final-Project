# 🐾 Animal Soundboard 🐾

🎉 **Project Overview**  
The Animal Soundboard is an interactive and engaging web application designed to entertain kids and animal enthusiasts alike. It dynamically displays a grid of animal cards, each featuring:

- A high-quality image of the animal.
- An interesting fact about the animal.
- A button to play the sound of the animal, immersing users in a fun and educational experience.

This project combines creativity, user interactivity, and responsive design to ensure accessibility and usability across devices.

🌟 **Key Features**

- **Dynamic Animal Cards**  
  Animal cards are dynamically generated from a local `db.json` file. Each card includes:
  - Animal name.
  - Image of the animal.
  - A fun fact displayed on hover.

- **Animal Sounds**  
  Click the "Play Sound" button on each card to hear the corresponding animal's sound. Audio playback is smooth and responsive.

- **Search Functionality**  
  Users can search for animals in real-time using the search bar. As users type, the animal grid updates to display only matching animals.

- **Responsive Design**  
  The grid adjusts seamlessly on various screen sizes:
  - Desktop: 5-column layout.
  - Tablet: 2-column layout.
  - Mobile: Single-column layout.

- **Sticky Title Bar**  
  The main title "Animal Soundboard" remains visible at the top of the page as users scroll, ensuring a polished and user-friendly experience.

🖥️ **Technologies Used**
- **HTML5**: Structure of the application.
- **CSS3**: Styling, responsiveness, and hover effects.
- **JavaScript**: Dynamic rendering, search functionality, and sound playback.

🚀 **How to Run the Project**
1. **Install JSON Server** (if not already installed):
   ```bash
   npm install -g json-server



Start the JSON Server:
json-server --watch db.json
This runs the server at http://localhost:3000.

Open the Project in a Browser:

Simply open the index.html file in your browser.
Enjoy the Soundboard!

Explore the animal cards.
Play the animal sounds.
Search for your favorite animals.



🔧 Customization

Add New Animals:
Update the db.json file to include new animals:

{
  "name": "Parrot",
  "image": "images/parrot.jpg",
  "fact": "Parrots are highly intelligent birds.",
  "sound": "sounds/parrot.mp3"
}

Change Styles:
Edit the style.css file to customize the layout, colors, or fonts.

Improve Features:
Enhance app.js to add new interactive features, such as animations or sound effects.

👨‍💻 Author
Name: Faith
Project: Final Submission
Purpose: Interactive web application for kids.


