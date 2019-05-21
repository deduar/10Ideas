jQuery(function() {
	jQuery("div[id^='boxQuestion']").hide();
	jQuery(".formTest").hide();
	jQuery(".errorFromTest").hide();
	jQuery(".errorFromTestEmail").hide();
	jQuery("div[id='boxQuestion1']").show();
	
	var maxItems = 0;
	jQuery("input[class^='reponse']").each(function( index ) {
		var valueInput = jQuery(this).val();
		if (maxItems <= valueInput) maxItems = parseInt(valueInput) ;
	});

	var data = [];
	for (var i = 0; i <= maxItems  ; i++) {
		data.push(0);
	}
	
	jQuery("input[id^='btnQuestion']").click(function() {
		var id = jQuery(this).attr("id");
		var pattern = /[0-9]+/g;
		var nombre = id.match(pattern);
		nombre = parseInt(nombre);
		var reponseChecked = jQuery("input[class='reponse"+nombre+"']:checked").length;
		if(!reponseChecked){
			jQuery(".errorFromTest").show();
			return false;
		}
		else{
			jQuery(".errorFromTest").hide();
			var reponseValue = jQuery("input[class='reponse"+nombre+"']:checked").val();
			reponseValue = parseInt(reponseValue);
			data[reponseValue] = data[reponseValue]+1;
						
			var showBox=nombre+1 ;
			jQuery("div[id^='boxQuestion']").hide();
			jQuery("div[id='boxQuestion"+showBox+"']").show();
			if (jQuery("div[id='boxQuestion"+showBox+"']").length == 0){
				jQuery(".formTest").show();
				jQuery("#resultatTest").val(getHighestValIndex(data));
			}
		}
		return false;
	});
	
	jQuery("#btnSubmitFormTest").click(function() {
		var valueInput = jQuery( "#viewForm input[class~='emailField']" ).val();
		if(!isMailValid(valueInput)) {
			jQuery(".errorFromTestEmail").show();
			return false;
		}
	
		//vérification sur les checkbox confidentialite
		var confidentialite = false;
		var plusque18 = false;
		if(jQuery("input[name='confidentialite[]']").length)
		var confidentialite = jQuery("input[name='confidentialite[]']").is(':checked');

		if(jQuery("input[name='plusque18[]']").length)
		var plusque18 = jQuery("input[name='plusque18[]']").is(':checked');

		if (confidentialite && plusque18){
			jQuery(this).parent().parent().parent().hide();
			jQuery( "#viewForm" ).submit();
		}
		// return false;
	});	
	
});

function getHighestValIndex(arr)
{
	var max = arr[0];
	var maxIndex = 0;

	for (var i = 1; i < arr.length; i++) {
		if (arr[i] > max) {
			maxIndex = i;
			max = arr[i];
		}
	}
	
	for (var i = 1; i < arr.length; i++) {
		if ((arr[i] == max) && (maxIndex != i )) maxIndex = 0;
	}
	
	console.log(maxIndex);
	return maxIndex;
}

function isMailValid(xStr)
{
	var regEx = /^[A-Za-z0-9._-]+@[A-Za-z0-9._-]{1,}[A-Za-z0-9]{1}\.[A-Za-z]{2,4}$/;
	return xStr.match(regEx);
}
