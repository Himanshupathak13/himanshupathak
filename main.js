import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js';
import { getFirestore, collection, addDoc, serverTimestamp } from 'https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js';

const firebaseConfig = {
    apiKey: "AIzaSyBarJdpPc2xUpPYOmnWgX9h3rDsNx_S5E8",
    authDomain: "portfolio-hp-a4aed.firebaseapp.com",
    projectId: "portfolio-hp-a4aed",
    storageBucket: "portfolio-hp-a4aed.firebasestorage.app",
    messagingSenderId: "736174960699",
    appId: "1:736174960699:web:a8bb5613eec204b61fac1e",
    measurementId: "G-C57KWGJQST"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get the form element
const contactForm = document.getElementById('contactForm');

// Add event listener to handle form submission
contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Validate form data
    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
    }
    
    // Save form data to Firestore
    try {
        await addDoc(collection(db, 'Info'), {
            name: name,
            email: email,
            message: message,
            timestamp: serverTimestamp()
        });
        
        // Clear form after successful submission
        contactForm.reset();
        alert("Message sent successfully!");
    } catch (error) {
        console.error("Error saving message:", error);
        alert("There was an error sending your message. Please try again.");
    }
});
// </script>