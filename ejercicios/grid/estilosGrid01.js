// sources: https://stackoverflow.com/questions/18966222/jquery-each-and-attaching-click-event
// https://www.w3schools.com/jquery/jquery_css_classes.asp
// https://stackoverflow.com/questions/8160494/how-to-make-a-whole-div-clickable-in-html-and-css-without-javascript
// https://stackoverflow.com/questions/512054/setting-background-image-using-jquery-css-property
// https://stackoverflow.com/questions/554273/changing-the-image-source-using-jquery


$('img').click( 
    function() {
         var src = ($(this).attr('src') === "https://picsum.photos/id/1015/600/200")
            ? "https://picsum.photos/id/1014/600/200"
            : "https://picsum.photos/id/1015/600/200";
         $(this).attr('src', src);
    }
);

$(".dos").mouseover(function () {  //mouseover
    $(".marco").toggleClass("blue");     
});

$(".tres").dblclick( 
    function() {
        $(".marco").css("background-color", "yellow");   
    }
)