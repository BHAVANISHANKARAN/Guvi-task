function editProfile() {
  // Get form fields
  var usernameField = document.getElementById("username");
  var passwordField = document.getElementById("password");
  var emailField = document.getElementById("email");
  var dobField = document.getElementById("dob");
  var addressField = document.getElementById("address");
  var mobileField = document.getElementById("mobile");

  // Enable form fields for editing
  usernameField.disabled = false;
  passwordField.disabled = false;
  emailField.disabled = false;
  dobField.disabled = false;
  addressField.disabled = false;
  mobileField.disabled = false;

  // Change edit button to save button
  var editButton = document.getElementById("editButton");
  editButton.innerText = "Save";
  editButton.setAttribute("onclick", "saveProfile()");
  editButton.classList.remove("btn-primary");
  editButton.classList.add("btn-success");
}

function saveProfile() {
  // Get form fields
  var usernameField = document.getElementById("username");
  var passwordField = document.getElementById("password");
  var emailField = document.getElementById("email");
  var dobField = document.getElementById("dob");
  var addressField = document.getElementById("address");
  var mobileField = document.getElementById("mobile");

  // Disable form fields after saving
  usernameField.disabled = true;
  passwordField.disabled = true;
  emailField.disabled = true;
  dobField.disabled = true;
  addressField.disabled = true;
  mobileField.disabled = true;

  // Change save button back to edit button
  var editButton = document.getElementById("editButton");
  editButton.innerText = "Edit Profile";
  editButton.setAttribute("onclick", "editProfile()");
  editButton.classList.remove("btn-success");
  editButton.classList.add("btn-primary");

  // Show success message
  alert("Profile details saved successfully.");
}