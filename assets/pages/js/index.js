$(document).on('click',function(event){
    lastElement = event.target.id;
});

let lastElement = '';
$(document).keypress(function(e) {
    if(lastElement == 'cli'){
        $('.span-intermitente').remove();
        $( "#cli-input" ).append( "<span>"+String.fromCharCode( e.which )+"</span>" );
        $( "#cli-input" ).append( "<span class='span-intermitente'>&nbsp;<span>" );
    }
  });

function openCli(){
    $('#cli').css('display','block')
}

$(document).keyup(function(e){
    if(lastElement == 'cli' && e.keyCode == 8){
        let hijos = $('#cli-input').children();
        hijos[hijos.length - 2].remove();
    }
    
});