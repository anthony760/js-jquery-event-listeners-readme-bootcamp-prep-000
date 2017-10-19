function getIt() {
  $('p').on('click', function() {
    alert('Hi!');
  });
}

function frameIt() {
  $('img').click(function () {
    alert('HIIIII');
  });
}

$(document).ready(function(){

  getIt();
  frameIt();

});
  
