//  alert("Hey! This is an alert box.");

  var myButton = document.querySelector('button');
  var myHeading = documetn.querySelector('h1');

  msyButton.onclick = function() {
    var name = prompt('Please enter you name.');
    localStorage.setItem('name:', name);
  }
