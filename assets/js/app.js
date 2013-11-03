 $(function() {
	$('#destination', '#new_remittance').on('change', function() {

		var $new_service_button = $('button#new_service');
		var $new_service_list = $('.new_services');
		var $cur_service_list = $('.current_services');

		$.getJSON('/service/find_by_country', {
			country: $(this).val()
		}).done(function(services, status) {
			$new_service_button.removeAttr('disabled');

			$new_service_button.on('click', function() {
				$new_service_list.show().empty();

				$.each(services, function(i, service) {
					service.index = i;
					$new_service_list.append(new EJS({url: '/views/new_remittance_service.ejs'}).render(service));
				})

				return false;
			});

			$('.new_services').on('click', 'li', function() {
				var $this = $(this);
				var i = $this.attr('data-id');
				
				$cur_service_list.append(new EJS({url: '/views/current_remittance_service.ejs'}).render(services[i]));
				$new_service_list.hide();
			});

		});

		var req_banks = $.getJSON('/service/find_by_country', {country: $(this).val()});
		req_banks.done(function(banks, status){
			var $new_deposit_button = $('#new_deposit');

			$new_deposit_button.removeAttr('disabled');
			$new_deposit_button.on('click',function(){
				$new_service_list.show().empty();
				$new_service_list.append(new EJS({url: '/views/new_remittance_service.ejs'}).render(banks));
				return false;
			});

			$('.new_service').on('click','li', function() {

			});
		});

	});
 });
