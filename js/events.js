function getIt() {
  $('p').on('click', function() {
    alert('Hi!');
  });
}

function frameIt() {
  $('img').on('click', function(){
    $('img').addClass('tasty');
  });
}

$(document).ready(function(){

  getIt();
  frameIt();

});
