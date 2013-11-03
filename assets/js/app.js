 $(function() {
	$('#destination', '#new_remittance').on('change', function() {

		var $new_service_button = $('button#new_service');
		var $new_deposit_button = $('button#new_deposit');
		var $new_service_list = $('.new_services');
		var $new_banks_list = $('.new_banks');
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
				});

				return false;
			});

			$('.new_services').on('click', 'li', function() {
				var i = $(this).attr('data-id');
				
				services[i].index = i;
				$cur_service_list.append(new EJS({url: '/views/current_remittance_service.ejs'}).render(services[i]));
				$new_service_list.hide();
			});
		});

		$.getJSON('/bank/find_by_country', {
			country: $(this).val()
		}).done(function(banks, status){
			$new_deposit_button.removeAttr('disabled');
			$new_deposit_button.on('click',function(){
				$new_banks_list.show().empty();
				$.each(banks, function(i,bank){
					bank.index = i;
					$new_banks_list.append(new EJS({url: '/views/new_remittance_bank.ejs'}).render(bank));
				});
				return false;
			});

			$('.new_service').on('click','li', function() {
				var i = $(this).attr('data-id');
				banks[i].index = i;
				$cur_service_list.append(new EJS({url: '/views/current_remittance_bank.ejs'}).render(banks[i]));
				$new_banks_list.hide();
			});
		});

	});
 });
