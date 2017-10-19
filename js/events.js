function getIt() {
  $('p').on('click', function() {
    alert('Hi!');
  });
}

function frameIt() {
  $('img').load(function () {
    alert('HIIIII');
  });
}

$(document).ready(function(){

  getIt();
  frameIt();

});
  