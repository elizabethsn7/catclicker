$(document).ready(function() {

	var count = 0

	$('#catPic').click(function() {
		count++;
		$('#clickCounter').html('You clicked ' + count +  ' times');
		console.log("this is working");
	})

})

