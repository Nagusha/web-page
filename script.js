// Function to load content based on tab click
function loadContent(tabName) {
    let content = '';
  
    switch(tabName) {
      case 'Home':
        content = 'Welcome to the Home Page! A bold, people first community, building digital products for those who do things';
        break;
      case 'Services':
        content = 'Check out our Services here! Starting by understanding that we are different, and that makes us better.  That is why collaboration is at the core of how we think and approach products, processes and principles, without forgetting to have some fun in the way.';
        break;
      case 'Teams':
        content = 'Meet our Teams! Starting by understanding that we are different, and that makes us better.  That is why collaboration is at the core of how we think and approach products, processes and principles, without forgetting to have some fun in the way.';
        break;
      default:
        content = 'Welcome!';
    }
  
    document.getElementById('content').innerHTML = content;
  }
  
  // Event listeners for tab clicks
  document.getElementById('HomeTab').addEventListener('click', function() {
    loadContent('Home');
  });
  
  document.getElementById('ServicesTab').addEventListener('click', function() {
    loadContent('Services');
  });
  
  document.getElementById('TeamsTab').addEventListener('click', function() {
    loadContent('Teams');
  });
  
  // Load default content
  loadContent('Home');
  
