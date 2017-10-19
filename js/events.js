function getIt() {
  $(document).on('keypress', function(key) {
    if (key.which == 13){
      alert('enter was pressed');
    }
  });
}

$(document).ready(function(){

  getIt();

});
