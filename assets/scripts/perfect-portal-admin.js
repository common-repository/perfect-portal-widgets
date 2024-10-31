(function($){
	$(document).on('change', '[name="perfect_portal_quote_calc_intake_type"]', function(){
		var selected_item = $(this).find('option:selected'),
			visible_section = $(selected_item).attr('data-section-visible'),
			hidden_section = $(selected_item).attr('data-section-hidden');

		$(document).find('[data-view="'+visible_section+'"]').removeClass('pp-hide');
		$(document).find('[data-view="'+hidden_section+'"]').addClass('pp-hide');
	});

	$(document).on('click change', 'select[name="perfect_portal_region"]', function(){
		var selected_item = $(this).val().length

		console.log(selected_item);
		if (selected_item > 0) {
			 $(document).find('.perfect-portal-region-selected').removeClass('pp-hide');
		} else {
			$(document).find('.perfect-portal-region-selected').addClass('pp-hide');
		}
	});
})(jQuery);
