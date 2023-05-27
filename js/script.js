'use strict';

var buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener('click', function() {
    console.log('clicked');
  });
});

