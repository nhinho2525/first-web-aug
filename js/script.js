$(document).ready(function() {
    $(".sliding-link").click(function(e) {
        e.preventDefault();
        var aid = $(this).attr("href");
        console.log(aid);
        $("html, body").animate({scrollTop: $(aid).offset().top}, 'slow');
    });

    $('.dropdown-toggle').on('click', function(e){
		$(this).parent().toggleClass('open');
	  	$(this).parent().siblings().removeClass('open');
	});
});

