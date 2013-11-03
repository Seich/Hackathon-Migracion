 $(function() {
	$('#destination', '#new_remittance').on('change', function() {

		var r_services = $.getJSON('/service/find_by_country', {country: $(this).val()});
		r_services.done(function(services, status) {
			var $new_service = $('#new_service');
			var $service = $('.new_services');

			$new_service.removeAttr('disabled');

			$new_service.on('click', function() {
				$service.show().empty();
				$service.append(new EJS({url: '/views/new_remittance_service.ejs'}).render(services));

				return false;
			});

			$('.new_services li').on('click', function() {
				
			});


		});

	});
 });
