function getIt() {
  $('p').on('click', function() {
    alert('Hi!');
  });
}

function frameIt() {
  $(document).click(function () {
    alert('HIIIII');
  });
}

$(document).ready(function(){

  getIt();
  frameIt();

});
