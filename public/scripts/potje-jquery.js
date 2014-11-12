
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
});