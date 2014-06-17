Shadowbox.init();
$(function(){
	// Navbar Item Click
	$("a[href^='#']:not(.navbar-brand):not([data-toggle])").on('click', function(e) {
		// prevent default anchor click behavior
		e.preventDefault();
		
		// store hash
		var hash = this.hash;
		
		// animate
		$('html, body').animate({
			scrollTop: $(this.hash).offset().top
		}, 500, function(){
			window.location.hash = hash;
		});
		
	});
	
	// Navbar Brand Click
	$(".navbar-brand").click( function(e) {
		// prevent default anchor click behavior
		e.preventDefault();
		
		// animate
		$('html, body').animate({
			scrollTop: 0
		}, 500, function(){
			window.location.hash = '';
		});
	});
	
	// Scrollspy
	$('#navbar li.active').removeClass('active');
	$("body").scrollspy({ target: "#sidebar", offset: 164 });
	
	var scollSpy2ActiveLI = "";
	
	$('body').on('activate.bs.scrollspy', function () {
	    if (scollSpy2ActiveLI !== "") {
	        scollSpy2ActiveLI.removeClass('active');            
	    }        
	    var activeTab = $('#sidebar li.active a').attr('href');
	    scollSpy2ActiveLI = $('#navbar li a[href="' + activeTab + '"]').parent();
	    scollSpy2ActiveLI.addClass('active');
	});
	
	$('body').trigger('activate.bs.scrollspy');
	
	// Popover
	$('a[data-toggle="popover"').popover();
	
	// Shadowbox
	Shadowbox.init();
	Shadowbox.setup(".gallery", { gallery: 'Bitcoin' });
});