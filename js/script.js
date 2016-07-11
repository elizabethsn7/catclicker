$(document).ready(function() {

	var meanie = 0
	var nicey = 0

	$('#meanPic').click(function() {
		meanie++;
		$('#meanCounter').html('You clicked ' + meanie +  ' times');
		console.log("# of clicks");
	})
	$('#cutePic').click(function() {
		nicey++;
		$('#cuteCounter').html('You clicked ' + nicey +  ' times');
		console.log("# of clicks");
	})
})

