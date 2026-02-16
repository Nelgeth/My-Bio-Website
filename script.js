<<<<<<< HEAD
js

function switchTab(tabId) {
  // Hide all tab content
  document.querySelectorAll('.tab-content').forEach(section => {
    section.classList.remove('active');
  });

  // Remove active class from all buttons
  document.querySelectorAll('.tab-button').forEach(button => {
    button.classList.remove('active');
  });

  // Show the selected tab content
  document.getElementById(tabId).classList.add('active');

  // Add active class to the clicked button
  event.currentTarget.classList.add('active');
=======
js

function switchTab(tabId) {
  // Hide all tab content
  document.querySelectorAll('.tab-content').forEach(section => {
    section.classList.remove('active');
  });

  // Remove active class from all buttons
  document.querySelectorAll('.tab-button').forEach(button => {
    button.classList.remove('active');
  });

  // Show the selected tab content
  document.getElementById(tabId).classList.add('active');

  // Add active class to the clicked button
  event.currentTarget.classList.add('active');
>>>>>>> 1cad69b3234c2c4c626f64b87e9b7657f35f567f
}