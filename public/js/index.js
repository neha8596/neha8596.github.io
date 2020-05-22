// $( "#ulfont a" ).on( "click", function () {
// 	$( "#ulfont").find( "li.highlight" ).removeClass( 'highlight' );
//     $( this ).parent("li").addClass( 'highlight' );
// });

// $(document).ready(function() {
//         $("#ulfont li").click(function(){
//             $(this).addClass("highlight");
//             $(this).siblings().removeClass("highlight");

//         });
//     });


$(document).ready(function() {
	setDefaultActive();
});

var setDefaultActive = function() {
    var path = window.location.pathname;
    var pathnew= path.substr(1);
    var element = $("#ulfont a[href='" + pathnew + "']");
	element.parent("li").siblings().removeClass("highlight")
    element.parent("li").addClass("highlight");
}

