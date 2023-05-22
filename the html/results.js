// Get the search results from session storage
const searchResults = JSON.parse(sessionStorage.getItem("searchResults"));

// Get the element for displaying search results
const searchResultsContainer = document.getElementById("searchResults");

// Generate HTML content for the search results
let html = "";
searchResults.forEach(function (loc) {
  html += `<div class="result">
             <h3>${loc.name}</h3>
             <p>Date: ${loc.date}</p>
             <p>Price: $${loc.price}</p>
           </div>`;
});

// Display the search results
searchResultsContainer.innerHTML = html;
