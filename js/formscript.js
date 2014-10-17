var loader;

$(document).ready(function() {
	<!--alert('hi!');-->	
	
	var validator = $("#contact-form").validate({
		//errorLabelContainer: $("#contact-form .error") // ?
	});	
	
	$(".reset").click(function() { // ?
		validator.resetForm();
		return false;
	});
	
	$("#contact-form").validate({submitHandler: submitForm});
	loader = $("<div id='loader'><img src='images/loading.gif' alt='loading...'></div>");
	
	loader.appendTo("#result").hide(); //hide while page loads
	
});

function submitForm() {
	$("#contact-form").ajaxSubmit({
		target: "#result",
		beforeSend:function() {loader.show();},
		complete:function() {loader.hide();}
	});
}

