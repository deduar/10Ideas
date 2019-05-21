jQuery(function() {
	
	$(".resultView").hide();
	$(".errorView.error").hide();
	
	jQuery("#decan_submit").click(function() {
		var date_jours = jQuery("#date_jours").val();
		var date_mois = jQuery("#date_mois").val();
		var date_annee = jQuery("#date_annee").val();

		jQuery.ajax( {
			url : 'index.php',
			dataType: 'html',
			data : {
				eID : 'ajaxDecan',
				date_jours : date_jours,
				date_mois : date_mois,
				date_annee : date_annee
			},
			success : function(data) {
				 eval(data);
			}
		});
		return false;
	});
	
	jQuery("#signeChinois_submit").click(function() {
		var date_jours = jQuery("#date_jours").val();
		var date_mois = jQuery("#date_mois").val();
		var date_annee = jQuery("#date_annee").val();

		jQuery.ajax( {
			url : 'index.php',
			dataType: 'html',
			data : {
				eID : 'ajaxSigneChinois',
				date_jours : date_jours,
				date_mois : date_mois,
				date_annee : date_annee
			},
			success : function(data) {
				 eval(data);
			}
		});
		return false;
	});	
});