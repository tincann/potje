
$(document).ready(function() {
	$('#addPersonButton').removeClass('btn-primary');
	$('#addPersonField').keyup(function() {
		// console.log("updatefired");
		if($('#addPersonField').val()=="") {
			$('#addPersonButton').removeClass('btn-primary');
		} else {
			$('#addPersonButton').addClass('btn-primary');
		}

	// $("a#createNewPotjeButton").hide();
	});

	// $('.autocomplete').autocomplete('disable');
	var adresboek = [];

	/*adresboek = [
	   { value: 'Henk', data: '0' },
	   { value: 'Bob', data: '1' }
	];
	*/

	$.getJSON('create/get_users').done(function(data){
		$.each(data,function(i,v){
			adresboek.push({value:v.name,data:v.id});
		});
		console.log(adresboek);
	})


	$('.autocomplete').autocomplete({
	    lookup: adresboek
	});
	    // onSelect: function (suggestion) {
	    //     alert('You selected: ' + suggestion.value + ', ' + suggestion.data);
	    // }
	// $("input.submitNewPotjeButton").click(function(e){
	// 	$("a#createNewPotjeButton").click();
	// });

	$("input.submitNewPotjeButton").click(function(e){
		// e.preventDefault();
		console.log('validation');
		// e.preventDefault();
	    console.log("nieuw potje aanmaken..");

	    var potje = {};
	    //inlezen form data
	    potje.accountName = $('form#formCreatePotje input[name=naamVanPotje]').val()+"";

	    // console.log($('#rekeninghouderLijst').html());
	    potje.participants = []

	    $('ul#rekeninghouderLijst li').each(function(row) {
	    	// console.log($( this ).text() + ' en id ' +$(this).children( "input").attr('data-userId'));
	    	potje.participants.push({name:$( this ).text(),id:$(this).children( "input").attr('data-userId')})

	    });
	    potje.initialAmount = $('#formCreatePotje input[name="inlegBedrag"]').val();

		// console.log(potje);

	    //valideren
	    // console.log(typeof potje.naam);
	    if(potje.accountName === "" || potje.initialAmount == "") 
	    {
	    // || typeof potje.naam === 'undefined' || ) 
	    	toastr.error('Je moet een naam en een bedrag voor het pojte invullen voordat je kan aanmaken'); 
	    	e.preventDefault();
	    	return;
	    }

	    if(potje.participants.length<1) {
	    	toastr.error('je moet minstens een rekeninghouder toevoegen naast jezelf'); 
	    	e.preventDefault();
	    	return;
	    }
	    if(potje.initialAmount < 0 || potje.initialAmount > 1000) {
	    	toastr.error('je inlegbedrag is niet correct. Dit moet je even verbeteren'); 
	    	e.preventDefault();
	    	return;
	    }

	    //posten!	
	    for (var i = 0; i < potje.participants.length; i++) {
	    	
		$('#formCreatePotje').append("<input type='hidden' name='participantData["+i+"]' value='{name:"+potje.participants[i].name+",insertId:"+potje.participants[i].id+"}'>");
		console.log(potje)
	    };


		console.log("submit uitvoeren ")

	    // $('#formCreatePotje').submit(function( event ) {
		//   console.log("submit uitgevoerd!" + event)
		// });

		  // alert( "Handler for .submit() called." );
		  // event.preventDefault();
		// $.post("create/potje", potje);

		

  	});
});
