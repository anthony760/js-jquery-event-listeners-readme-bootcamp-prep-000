function getIt() {
  $('p').on('click', function() {
    alert('Hi!');
  });
}

function frameIt() {
  $(document).on('load', function(){
    alert('Hi2');
  });
}

$(document).ready(function(){

  getIt();
  frameIt();

});
