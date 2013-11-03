 $(function() {
	$('#destination', '#new_remittance').on('change', function() {

		var r_services = $.getJSON('/service/find_by_country', {country: $(this).val()});
		var $new_service = $('#new_service');
			var $service = $('.new_services');

		r_services.done(function(services, status) {
			$new_service.removeAttr('disabled');

			$new_service.on('click', function() {
				$service.show().empty();

				$.each(services, function(i, service) {
					service.index = i;
					$service.append(new EJS({url: '/views/new_remittance_service.ejs'}).render(service));
				})

				return false;
			});

			$('.new_services').on('click', 'li', function() {
				var $this = $(this);
				var i = $this.attr('data-id');
				console.log(i)
				$service.append(new EJS({url: '/views/new_remittance_service.ejs'}).render(services[i]));

			});

		});

	});
 });
