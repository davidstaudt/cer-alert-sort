sort_select_options(document.querySelector('[name="securityids"]'));
sort_select_options(document.querySelector('[name="configuredsecurityid"]'));

function sort_select_options(select){
  if (select) {
    var options = [];
    for (var i = 0; i < select.length; i++) {
      options.push(select.options[i])
    }
    options.sort(function(a,b){
      return a.text > b.text ? 1 : -1;
    });
    options.reverse(); //ascending
    
    for (var i in options) {
      select.insertBefore(options[i], select.options[0])
    }
  }
}
