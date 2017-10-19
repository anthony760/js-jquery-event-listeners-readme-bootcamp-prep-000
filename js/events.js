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
    console.log(key);
  });
}

$(document).ready(function(){

  getIt();
  frameIt();

});
