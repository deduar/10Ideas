jQuery(function() {
	jQuery("#result").hide();
	//jQuery(".confirmation").attr("disabled","disabled");
	jQuery("#choixCarte").val("");
	
	//HTML = "<span class=\"error\">Veuillez choisir quatre cartes.</span>";
	HTML = "";
	jQuery("#viewForm").before("<div class=\"errorListe\">"+HTML+"</div>");
	selectedCardCount = 0;
	 var jsonStr = '{"cardNumbreSelected":[]}';

	jQuery(".cards .card").hover(function() {
		if (jQuery(this).hasClass('selectedCard')) return false;
		jQuery(this).animate( {
			top : "+=30",
			right : "+=20"
		}, 100);
	}, function() {
		if (jQuery(this).hasClass('selectedCard')) return false;
		jQuery(this).animate( {
			top : "-=30",
			right : "-=20"
		}, 10);
	});

	jQuery(".cards a").click(function() {
		if (jQuery(this).hasClass('selectedCard')) return false;
		if(selectedCardCount > 3 ) return false;
		result = selectedCardCount++;
		var right = (100 - (result * 10));

		/*jQuery(this).css("z-index", result);*/
		jQuery(this).addClass("selectedCard");
		/*
		var position = jQuery(this).position();
		jQuery(this).css("right", position.left);
		jQuery(this).css("top", position.top);

		jQuery(this).css("position", "absolute");

		jQuery(this).animate( {
			top : "0px",
			right : right + "px"
		}, 100);
		*/
		 var titre = jQuery(this).attr("class");
		 var pattern = /[0-9]+/g;
		 var nombre = titre.match(pattern);
		 
		 jQuery(this).addClass("imageSelectedTarot"+nombre);
		 
		 var choixCatre = jQuery("#choixCarte").val();
		 if (choixCatre=="") jQuery("#choixCarte").val(nombre);
		 else jQuery("#choixCarte").val(choixCatre+","+nombre);
		 
		 var obj = JSON.parse(jsonStr);
		 obj['cardNumbreSelected'].push({"cardNumbre":nombre});
		 jsonStr = JSON.stringify(obj);
		 console.log(jsonStr);
		 
		 
		if (result == 3) {
			jQuery(".errorListe").remove();
			jQuery(".confirmation").removeAttr("disabled");
			jQuery(".card ").each(function(index) {
				if (!jQuery(this).hasClass('selectedCard'))
					jQuery(this).fadeOut( "slow" );
				else
					jQuery(this).css( "margin-left","-85px" );
			});
		}
		return false;
	});
});