function getIt() {
  $('p').on('click', function() {
    alert('Hi!');
  });
}

function frameIt() {
  $(document).load(function() {
    alert('HiIII');
  });
}

$(document).ready(function(){

  getIt();
  frameIt();

});
