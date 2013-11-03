 $(function() {
	$('#destination', '#new_remittance').on('change', function() {

		var $service = $('.new_services');
		var r_services = $.getJSON('/service/find_by_country', {country: $(this).val()});
		r_services.done(function(services, status) {
			var $new_service = $('#new_service');

			$new_service.removeAttr('disabled');

			$new_service.on('click', function() {
				$service.show().empty();
				$service.append(new EJS({url: '/views/new_remittance_service.ejs'}).render(services));

				return false;
			});

			$('.new_services').on('click','li', function() {
				
			});


		});

		var r_banks = $.getJSON('/service/find_by_country', {country: $(this).val()});
		r_banks.done(function(banks, status){
			var $new_deposit = $('#new_deposit');

			$new_deposit.removeAttr('disabled');
			$new_deposit.on('click',function(){
				$service.show().empty();
				$service.append(new EJS({url: '/views/new_remittance_service.ejs'}).render(banks));
				return false;
			});

			$('.new_service').on('click','li', function(){

			});
		});



	});
 });
