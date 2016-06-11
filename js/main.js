$(document).ready(function(){
			$('.accordion-link').on('click', function(e){
				e.preventDefault();

				var $this = $(this),
					item = $this.closest('.accordion-list'),
					list = $this.closest('.accordion'),
					items = list.find('.accordion-list'),
					content = item.find('.accord-list'),
					otherContent = list.find('.accord-list'),
					duration = 300;

				if (!item.hasClass('active')) {
					items.removeClass('active');
					item.addClass('active');

					otherContent.stop(true, true).slideUp(duration);
					content.stop(true, true).slideDown(duration);
				} else {
					content.slideUp(duration);
					item.removeClass('active');
					}

					
	});
});