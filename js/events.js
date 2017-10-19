function getIt() {
  $('p').on('click', function() {
    alert('Hi!');
  });
}

function frameIt() {
  $('img').on('click', function(){
    alert('hi');
  });
}

$(document).ready(function(){

  getIt();
  frameIt();

});
