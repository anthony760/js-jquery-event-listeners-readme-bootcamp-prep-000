function getIt() {
  $('p').on('click', function() {
    alert('Hi!');
  });
}

function frameIt() {
  $('document').on('click', function(){
    $('img').addClass('tasty');
  });
}

$(document).ready(function(){

  getIt();
  frameIt();

});
