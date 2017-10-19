function getIt() {
  $('p').on('click', function() {
    alert('Hi!');
  });
}

function frameIt() {
  $(document).load(function () {
    alert('HIIIII');
  });
}

$(document).ready(function(){

  getIt();
  frameIt();

});
