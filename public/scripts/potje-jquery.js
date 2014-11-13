
$(document).ready(function() {
	$('#addPersonButton').removeClass('btn-primary');
	$('#addPersonField').keyup(function() {
		console.log("updatefired");
		if($('#addPersonField').val()=="") {
			$('#addPersonButton').removeClass('btn-primary');
		} else {
			$('#addPersonButton').addClass('btn-primary');
		}
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

	$("#createNewPotjeButton").click(function(){
	    console.log("nieuw potje aanmaken");

	    var potje = {};
	    //inlezen form data
	    potje.naam = $('input[name="accountName"]').val();




	    potje.inlegBedrag = $('input[name="inlegBedrag"]').val();


	    //optioneel: valideren


	    //posten!	    
		$.post("create/potje", potje);

		

  	});
});
