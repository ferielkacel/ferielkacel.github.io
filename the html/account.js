const loginbutton = document.querySelector("#loginbtn");
const signupbutton = document.querySelector("#signupbtn");

// Function to handle user registration
signupbutton.addEventListener("click", function (event) {
  // Get input values
  const username = document.querySelector(".signupusername").value;
  const email = document.querySelector(".signupemail").value;
  const password = document.querySelector(".signuppassword").value;
  const agreedTerms = document.querySelector(".terms").checked;

  // Check if all fields are filled and terms are agreed
  if (username && email && password && agreedTerms) {
    // Create user object
    const user = {
      password: password,
      email: email,
    };

    // Store user object in localStorage with username as the key
    localStorage.setItem(username, JSON.stringify(user));

    // Show success message or perform other actions
    alert("User registered successfully!");
    console.log("bef");
    location.reload();
    console.log("end");
  } else {
    // Show error message or perform other actions
    alert("Please fill in all fields and agree to the terms.");
  }
});

// Function to handle user login
loginbutton.addEventListener("click", function (event) {
  // Get input values
  const username = document.querySelector(".loginemail").value;
  const password = document.querySelector(".loginpassword").value;
  const rememberMe = document.querySelector(".remember").checked;

  // Check if username and password are provided
  if (username && password) {
    let found = false;
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const item = JSON.parse(localStorage.getItem(key));

      if (item.email === username) {
        found = true;
        // Check if the user exists and the password matches
        if (item.password === password) {
          // Create cookie with the logged-in username
          document.cookie = `logged=${username};${
            rememberMe ? "expires=Fri, 20 May 2023 00:00:00 UTC" : "expires=0"
          }`;

          // Redirect or perform other actions
          alert("User logged in successfully!");
        } else {
          // Show error message or perform other actions
          alert("Invalid password.");
        }
      }
    }
    if (!found) {
      // Show error message or perform other actions
      alert("Please provide an correct email");
    }
  } else {
    // Show error message or perform other actions
    alert("Please provide a username and password.");
  }
});

// Retrieve the data from local storage
const userData = localStorage.getItem("user");

// Check if the data exists
if (userData !== null) {
  // Data exists in local storage
  console.log("Data exists:", user);
} else {
  // Data does not exist in local storage
  console.log("Data does not exist");
}
