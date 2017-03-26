var myImage = document.querySelector('img');

myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/city.png') {
    myImage.setAttribute ('src' ,  'images/orioles.png');
  }
  if(mySrc === 'images/orioles.png') {
    myImage.setAttribute ('src' ,  'images/nab.png');
  }
    if(mySrc === 'images/nab.png') {
      myImage.setAttribute ('src' ,  'images/city.png');
  }
}

var myButton  = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = promp('Please enter your name');
  localStorage.setItem('name' , myName);
  myHeading.textContent = 'Baltimore is cool,  ' + myName;
}

if(!localStorage.getItem('name' )) {
  setUserName();
}  else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Baltimore is cool, ' + storedName;
  }
}

myButton.onclick = function() {
  setUserName();
}
