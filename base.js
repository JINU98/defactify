// Function to load reusable components
function loadComponent(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        });
}

// Load header and footer components
loadComponent('header', '/extendable_htmls/header.html');
loadComponent('footer', '/extendable_htmls/footer.html');
loadComponent('organizers', '/extendable_htmls/co-organizers.html');
loadComponent('organizing_committee_chairs', '/extendable_htmls/organizing_committee_chairs.html');
// loadComponent('sidebar', '/extendable_htmls/sidebar.html');
loadComponent('web_chair', '/extendable_htmls/web_chairs.html');
loadComponent('contacts', '/extendable_htmls/contacts.html');

// Scroll to the anchor section actor loading the page 
document.addEventListener("DOMContentLoaded", () => {
const hash = window.location.hash;
if (hash) {
    const target = document.querySelector(hash);
    if (target) {
    target.scrollIntoView({ behavior: "smooth" });
    }
}
});
