function checkPassword() {
    var enteredPassword = document.getElementById("password-input").value;
  
    // Define your password here
    var correctPassword = "1234";
  
    if (enteredPassword === correctPassword) {
      var passwordContainer = document.getElementById("password-container");
      passwordContainer.style.opacity = 0;
      passwordContainer.style.pointerEvents = "none";
  
      var mainContent = document.getElementById("main-content");
      mainContent.classList.add("show-content");
      //mainContent.classList.remove("hidden");
      mainContent.style.opacity = 1;
    } else {
      document.getElementById("error-message").textContent = "Incorrect password. Please try again.";
    }
  }
  