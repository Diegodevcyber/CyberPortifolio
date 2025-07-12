// components/SmoothScroll.jsx
export function scrollToSection(event) {
    // Check if 'window' (and thus 'document') is defined, meaning we are in a browser environment
    if (typeof window !== 'undefined') {
        event.preventDefault(); // Prevent default anchor link behavior
        try {
            var section = document.querySelector(event.target.parentElement.getAttribute('href'));
            if (section == null) { // For Lottie Animations or if parent is not the anchor
                section = document.querySelector(event.target.getAttribute('href'));
            }
            if (section) { // Ensure the section element was found
                section.scrollIntoView({ behavior: "smooth" });
            } else {
                console.warn("Section not found for smooth scroll. Target href:", 
                    event.target.parentElement.getAttribute('href') || event.target.getAttribute('href'));
            }
        } catch (error) {
            console.error("Error during smooth scroll:", error);
            console.error("Event target:", event.target);
        }
    } else {
        // Optional: Log a message if this function is called on the server during build
        console.warn("scrollToSection was called on the server; DOM operations skipped.");
    }
}