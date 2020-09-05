$(document).ready(function(){
  $('#signup').submit(function(e) {
	e.preventDefault();
	let form = $(this);
	$.ajax({
	  type: 'post',
	  dataType: 'json',
	  url: form.attr('action'),
	  contentType: 'application/json; charset=utf-8',
	  data: JSON.stringify({
		email: {
		  name: $('#name').val(),
		  email: $('#email').val()
		} 
	  }),
	  success: function() {
		$('#signup-success').show();
		$('#signup').hide();
	  },
	  error: function(xhr, res, text) {
		alert('There was a problem registering.');
	  }
	});
  });
});