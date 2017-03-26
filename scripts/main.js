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
