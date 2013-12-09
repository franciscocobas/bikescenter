$(document).ready(function(){
	$.mobile.loadingMessage = false;
	
	var textarea = $("textarea");

	$(textarea).on("click", function(){
		textarea.html("");
		textarea.removeClass("comentario-default");
		textarea.addClass("comentario");
	});
});

