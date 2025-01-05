// Function to load reusable components
// Just a function to get to your id section properly
// Example: https://defactify.com/#web_chair

function loadComponent(id, file) {
    const element = document.getElementById(id);
    if (!element) {
        console.error(`Element with id "${id}" not found.`);
        return;
    }

    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch ${file}: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            element.innerHTML = data;
        })
        .catch(error => console.error(`Error loading component "${id}":`, error));
}

// Load header and footer components
loadComponent('header', '/extendable_htmls/header.html');
// loadComponent('footer', '/extendable_htmls/footer.html');
loadComponent('organizers', '/extendable_htmls/co-organizers.html');
loadComponent('organizing_committee_chairs', '/extendable_htmls/organizing_committee_chairs.html');
// loadComponent('sidebar', '/extendable_htmls/sidebar.html');
loadComponent('web_chair', '/extendable_htmls/web_chairs.html');
loadComponent('contacts', '/extendable_htmls/contacts.html');

// // Scroll to the anchor section actor loading the page 
// document.addEventListener("DOMContentLoaded", () => {
// const hash = window.location.hash;
// if (hash) {
//     const target = document.querySelector(hash);
//     if (target) {
//     target.scrollIntoView({ behavior: "smooth" });
//     }
// }
// });

// Scroll to the anchor section after fully loading the page
window.addEventListener("load", () => {
    const hash = window.location.hash;
    if (hash) {
        const target = document.getElementById(hash.substring(1)); // Use getElementById for ids
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    }
});

