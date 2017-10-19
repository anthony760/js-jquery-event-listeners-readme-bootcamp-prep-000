function getIt() {
  $('p').on('click', function() {
    alert('Hi!');
  });
}

function frameIt() {
  $('img').on('load', function () {
    $('img').addClass('tasty');
  });
}

function pressIt() {
  $('form input').on('keydown', function(key) {
    if (key.which === 71) {
      alert('You pressed the G key!');
    }
  });
}

$(document).ready(function(){

  getIt();
  frameIt();
  pressIt();

});
