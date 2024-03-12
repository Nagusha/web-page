// Function to load content based on tab click
function loadContent(tabName) {
  let content = '';

  switch(tabName) {
    case 'home':
      content = 'Welcome to the Home Page!';
      break;
    case 'services':
      content = 'Check out our Services here!';
      break;
    case 'email':
      content = 'Access your Email here!';
      break;
    default:
      content = 'Welcome!';
  }

  document.getElementById('content').innerHTML = content;
}

// Event listeners for tab clicks
document.getElementById('homeTab').addEventListener('click', function() {
  loadContent('home');
});

document.getElementById('servicesTab').addEventListener('click', function() {
  loadContent('services');
});

document.getElementById('emailTab').addEventListener('click', function() {
  loadContent('email');
});

// Load default content
loadContent('home');
