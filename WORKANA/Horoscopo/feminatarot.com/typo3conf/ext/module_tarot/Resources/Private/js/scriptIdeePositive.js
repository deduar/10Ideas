jQuery(function() {
	jQuery("#result").hide();
	
	jQuery(".cards .card").hover(function() {
		jQuery(this).animate({
			top: "+=20",
			//right: "+=20"
		},100);
	}, function() {
		jQuery(this).animate({
			top: "-=20",
			//right: "-=20"
		},10);
	});

	jQuery(".cards a").click(function() {
		var titre = jQuery(this).attr("class");
		var pattern = /[0-9]+/g;
		var nombre = titre.match(pattern);
		jQuery.ajax( {
			url : 'index.php',
			dataType: 'json',
			data : {
				eID : 'ajax_tarot',
				carte : nombre,
				pid : jQuery('#dossier').val(),
				message : jQuery('#messageSucces').val(),
				titreCarte : jQuery('#titreCarte').val()
			},
			success : function(data) {
				var image = '<img src="fileadmin/templates/images/dos-web.jpg"  height="auto" width="100%" >';
				jQuery(".cards").hide();
				jQuery('#result_titre').html(data.titre);				
				jQuery('#result_image').html(image);
				jQuery('#result_message').html(data.message);
				if(typeof data.chiffre !== 'undefined')
				jQuery("#result").show();
			}
		});

		return false;
	});

});