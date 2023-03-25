
    // Validate password length on submit
    document.getElementById("login-form").addEventListener("submit", function(event){
      var password = document.getElementById("password");
      if(password.value.length < 8){
        password.setCustomValidity("Password must be at least 8 characters long.");
      } else {
        password.setCustomValidity("");
      }
    });
  