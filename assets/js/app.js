/**
 * app.js
 *
 * This file contains some conventional defaults for working with Socket.io + Sails.
 * It is designed to get you up and running fast, but is by no means anything special.
 *
 * Feel free to change none, some, or ALL of this file to fit your needs!
 */

 $(function() {
	$('#destination', '#new_remittance').on('change', function() {

		var r_services = $.getJSON('/service/find_by_country', {country: $(this).val()});
		r_services.done(function(services, status) {
			var $new_service = $('#new_service');
			$new_service.removeAttr('disabled');

			$new_service.on('click', function() {
				var $service = $('.new', "ul.services");
				$.each(services, function(i, service) {
					var o = $('<option/>', {
						'text': service.company,
						'value': service.company
					});

					o.appendTo($service);
				});

				return false;
			});
		});

	});
 });
