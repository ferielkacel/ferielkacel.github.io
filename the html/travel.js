document.addEventListener("DOMContentLoaded", function () {
  var travelForm = document.getElementById("travelForm");

  travelForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve form values
    var location = document.getElementById("locationinput").value;
    var date = document.getElementById("dateinput").value;
    var price = document.getElementById("priceinput").value;

    // Check if the entered location is valid
    var validLocations = [
      { name: "thailand", price: "$1000" },
      { name: "switzerland", price: "$2000" },
      { name: "australia", price: "$1500" },
      { name: "germany", price: "$1200" },
      { name: "maldives", price: "$2500" },
    ];

    var selectedLocation = validLocations.find(function (validLocation) {
      return validLocation.name.toLowerCase() === location.toLowerCase();
    });

    if (selectedLocation) {
      var locationName = selectedLocation.name;
      var locationPrice = selectedLocation.price;

      // Construct the URL of the result page
      var resultPageUrl = "result.html";

      // Append query parameters to the result page URL with proper encoding
      resultPageUrl += "?location=" + encodeURIComponent(locationinput);
      resultPageUrl += "&date=" + encodeURIComponent(dateinput);
      resultPageUrl += "&price=" + encodeURIComponent(priceinput);

      // Open a new tab and navigate to the result page
      var newTab = window.open(resultPageUrl, "_blank");

      // Display a congratulatory notification
      alert(
        "Congratulations! You have selected " +
          locationName +
          " with a price of " +
          locationPrice
      );

      // Reset the form
      travelForm.reset();
    } else {
      alert("Invalid location. Please enter a valid destination.");
    }
  });
});
