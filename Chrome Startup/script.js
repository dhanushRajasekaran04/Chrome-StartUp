// Function to view the cart
function viewCart() {
    var cartBox = document.getElementById('menu_box');
    cartBox.style.display = 'block';
}
function hideCart() {
    var cartBox = document.getElementById('menu_box');
    cartBox.style.display = 'none';
}

//hide photo
document.getElementById('toggle-link').addEventListener('click', function() {
    // Toggle the visibility of the welcome photo
    var welcomePhoto = document.getElementById('welcome-photo');
    welcomePhoto.style.display = (welcomePhoto.style.display === 'none' || welcomePhoto.style.display === '') ? 'block' : 'none';

    // Toggle the visibility of the search form
    var searchForm = document.getElementById('search-form');
    searchForm.style.display = (searchForm.style.display === 'none' || searchForm.style.display === '') ? 'block' : 'none';
});

//hide search text
function hideText() {
    var toggleLink = document.getElementById('toggle-link');
    toggleLink.style.display = 'none';
}

//refresh page
function refreshPage() {
    location.reload(true);
}


// search bar

function performSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.trim().toLowerCase();
    const appLinks = document.querySelectorAll('.all-apps a');

    appLinks.forEach(link => {
        const altText = link.querySelector('img').alt.toLowerCase();
        if (altText.includes(searchTerm)) {
            link.style.display = 'block';
        } else {
            link.style.display = 'none';
        }
    });
}

//enter search bar
function handleKeyDown(event) {
    if (event.key === "Enter") {
        performSearch();
    }
}


