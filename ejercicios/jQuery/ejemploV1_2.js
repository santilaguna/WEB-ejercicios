
$("button").eq(1).click( 
    function() {
         if ($("input").val() !="") {
            $("#personajes").append("<li>" + $("input").val() + "</li>") 
        } 
    }
)

//funcion1()


//$(document).keypress(function(ev){ if(ev.key=="d"){$("img").animate({marginLeft:"+=10px"})} else if(ev.key=="a"){$("img").animate({marginLeft:"-=10px"})}})

$(document.body).keypress(
    function(evento){ 
        if(evento.key =="d") {
            $("img").animate({marginLeft:"+=10px"})
        } else if(evento.key=="a") {
            $("img").animate({marginLeft:"-=10px"})
        }
    }
)



