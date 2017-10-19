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
  $('form').on('keydown', function(key) {
    if (parseInt(key) === 71) {
      alert('You pressed the G key!');
    }
  });
}

$(document).ready(function(){

  getIt();
  frameIt();
  pressIt();

});
