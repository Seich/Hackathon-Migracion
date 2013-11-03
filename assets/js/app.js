 $(function() {
	$('#destination', '#new_remittance').on('change', function() {

		var r_services = $.getJSON('/service/find_by_country', {country: $(this).val()});
		r_services.done(function(services, status) {
			var $new_service = $('#new_service');
			$new_service.removeAttr('disabled');

			$new_service.on('click', function() {
				var $service = $('.new_services').show();
				$service.empty();
				$.each(services, function(i, service) {
					var option = $('<li/>', {
						'text': service.company
					});

					option.prepend($('<img />', {
						src: '/images/logos/' + service.logo
					}));

					option.appendTo($service);
				});

				return false;
			});
		});

	});
 });
