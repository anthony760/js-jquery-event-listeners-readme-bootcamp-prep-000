function getIt() {
  $('p').on('click', function() {
    alert('Hi!');
  });
}

function frameIt() {
  $('img').on('load', function(){
    alert('hi');
  });
}

$(document).ready(function(){

  getIt();
  frameIt();

});
