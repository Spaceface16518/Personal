console.log('Connection confirmed: JavaScript file');

$(document).ready(function() {
  console.log('Connection confirmed: JQuery Google CDN');
  let id;

  $("td").click(function(){
    id = this.id;
    console.log('this.id: ' + this.id);

    id = $(this).attr('id');
    console.log('$(this).attr(\'id\'): ' + id);
    
    id = event.target.id;
    console.log('event.target.id: ' + id);

    
  })
});
