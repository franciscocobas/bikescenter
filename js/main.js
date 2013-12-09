$(document).ready(function(){
	$.mobile.loadingMessage = false;
	
	var textarea = $("textarea");

	$(textarea).on("click", function(){
		textarea.html("");
		textarea.removeClass("comentario-default");
		textarea.addClass("comentario");
	});

	$("#item-catalogo").on("click",function(){
		_gaq.push(['_trackEvent', 'Nav', 'Catalogo', '/catalogo.html']);
	});
});

