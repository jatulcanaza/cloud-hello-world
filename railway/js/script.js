// Log a message to the console when the script loads
console.log('🚂 Railway Hello World - Loaded Successfully!');

// Listen for the DOM content to be fully loaded before executing code
document.addEventListener('DOMContentLoaded', () => {
  
  // Log the user's browser and operating system information
  console.log('User Agent:', navigator.userAgent);
  
  // Log the user's screen resolution (width x height)
  console.log('Screen Resolution:', window.screen.width + 'x' + window.screen.height);
});
