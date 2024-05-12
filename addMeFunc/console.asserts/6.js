function validateUserInput(username, email, password) {
    console.assert(typeof username === 'string' && username.length > 0, "Username must be a non-empty string!");
    console.assert(typeof email === 'string' && email.includes('@'), "Invalid email address!");
    console.assert(typeof password === 'string' && password.length >= 8, "Password must be at least 8 characters long!");
  
    // Additional code here to further validate user input
    // For example, checking if the username is unique
    // or if the password meets certain complexity requirements
  }
  
  // Validate user input credentials
  validateUserInput("john_doe", "john@example.com", "password123");
  