// Allowed credentials
const users = {
  "ramjadhav": "Ram123",
  "ravikirangadhe": "Ravi123",
  "sagarchavan": "Sagar123",
  "sanjayasodekar": "Sanjay123",
  "tusharsonwane": "Tushar123",
  "bhagwatdighule": "Bhagwat123",
  "rupeshpatil": "Rupesh123",
  "mahadeokhirsagar": "Mahadeo123",
  "prakashmorale": "Prakash123",
  "surendragarbade": "Surendra123",
  "dhanumisal": "Dhanu123",
  "shubhambhise": "Shubham123",
  "devidasrathod": "Devidas123"
};

function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorDiv = document.getElementById("error");

  if (users[username] && users[username] === password) {
    // Save user info
    localStorage.setItem("loggedUser", username);
    alert("Login successful!");
    window.location.href = "home.html";
  } else {
    errorDiv.textContent = "Invalid username or password!";
  }
}

