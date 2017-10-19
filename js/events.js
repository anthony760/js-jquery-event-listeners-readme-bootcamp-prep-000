function getIt() {
  $('p').on('click', function() {
    alert('Hi!');
  });
}

function frameIt() {
  $('img').on('click', function() {
    alert('hi2');
  });
}

$(document).ready(function(){

  getIt();
  frameIt();

});
