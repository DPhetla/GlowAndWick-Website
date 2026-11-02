/**
 * WEDE5020 - Glow & Wick Client-Side Interaction Engine
 */

document.addEventListener("DOMContentLoaded", () => {
    
    const dispatchForm = document.getElementById("emergencyCalloutForm");
    const feedbackBlock = document.getElementById("validation-feedback");

    if (dispatchForm) {
        dispatchForm.addEventListener("submit", (event) => {
            // Stop page refreshing to allow smooth user interaction
            event.preventDefault(); 
            
            // Clear prior message strings
            feedbackBlock.textContent = "";
            feedbackBlock.style.display = "none";

            // Extract typed content parameters from the inputs
            const name = document.getElementById("clientName").value.trim();
            const phone = document.getElementById("clientPhone").value.trim();

            // Check Step 1: Missing Required Data Entries Check
            if (name === "" || phone === "") {
                feedbackBlock.style.display = "block";
                feedbackBlock.style.backgroundColor = "#FCE8E6"; // Blush pink error box
                feedbackBlock.style.color = "#A51D24"; // Rose red text
                feedbackBlock.style.border = "1px solid #A51D24";
                feedbackBlock.textContent = "⚠️ Error: Please input both your Name and Contact Phone details.";
                return;
            }

            // Check Step 2: South African Cell Format Constraints Check
            const phonePattern = /^(0)[0-9]{9}$/;
            if (!phonePattern.test(phone.replace(/\s+/g, ""))) {
                feedbackBlock.style.display = "block";
                feedbackBlock.style.backgroundColor = "#FCE8E6";
                feedbackBlock.style.color = "#A51D24";
                feedbackBlock.style.border = "1px solid #A51D24";
                feedbackBlock.textContent = "⚠️ Error: Please enter a valid 10-digit South African cell configuration (e.g. 0821234567).";
                return;
            }

            // Transaction Complete Success Route
            feedbackBlock.style.display = "block";
            feedbackBlock.style.backgroundColor = "#E6F4EA"; // Elegant pastel green box
            feedbackBlock.style.color = "#137333"; // Forest green text
            feedbackBlock.style.border = "1px solid #137333";
            feedbackBlock.textContent = "✅ Success! Your bespoke fragrance custom request code has been logged securely by Glow & Wick concierge.";
            
            // Reset input form parameters upon tracking completion
            dispatchForm.reset();
        });
    }
});