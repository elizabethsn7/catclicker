
$(document).ready(function() {

	var catName1 = 'Meany';
	var catName2 = 'Nicey';
	var counter1 = 0;
	var counter2 = 0;

	$('#cat-name1').html(catName1);
	$('#cat-name2').html(catName2);


	$('#meanPic').click(function() {
		counter1++;
		$('#meanCounter').html('You clicked ' + catName1 + ' ' + counter1 +  ' times');
		console.log("# of clicks");
	})

	$('#cutePic').click(function() {
		counter2++;
		$('#cuteCounter').html('You clicked ' + catName2 + ' ' + counter2 +  ' times');
		console.log("# of clicks");
	})
});




