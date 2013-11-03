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
			$new_service_button.show();
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
			$('.current_services').on('click', 'button', function(event){

				event.preventDefault();
				var quantity = Math.floor((Math.random()*10000)+1);
				var $accoutInput = $($(this).parent('div:first').find('input:first')[0]);
				//var $amountInput = $($(this).parent('div:first').find('input:last')[0]);
				if($accoutInput.val().length < 1){
					return;
				}
				$accoutInput.attr('readonly', true);
				//$amountInput.attr('value', quantity).attr('type','text').attr('readonly',true);
			});


		});

		$.getJSON('/bank/find_by_country', {
			country: $(this).val()
		}).done(function(banks, status){
			$new_deposit_button.show();
			$new_deposit_button.on('click',function(){
				$new_banks_list.show().empty();
				$.each(banks, function(i, bank){
					bank.index = i;
					$new_banks_list.append(new EJS({url: '/views/new_remittance_bank.ejs'}).render(bank));
				});
				return false;
			});

			$('.new_banks').on('click','li', function() {
				var i = $(this).attr('data-id');
				banks[i].index = i;
				$cur_service_list.append(new EJS({url: '/views/current_remittance_bank.ejs'}).render(banks[i]));
				$new_banks_list.hide();
			});

			
		});
	});
 	$('footer input')[0].on('click', function(event){
 		event.preventDefault();
 		var quantity = $('input#quantity').val();
 		var amount = 0; // sumatoria de todo lo que hay por pagar

 		if(quantity < amount ){
 			alert('La cantidad ingresada es menor que el total a pagar.');
 			return;
 		}
 		$('form').submit();
 	});

 });
