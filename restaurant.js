$(document).ready(function() {
	$('#Home').click(function() {
		$('#pane').html("<h2>'Sydney's finest firecracker cornbread.'</h2><p>Cornbread &amp; co is Sydney's finest cornbread establishment and attracts visitors from all over the world. We're located at 22 Claremont Street right in the CBD. Serving breakfast from 6:30 am and corny snacks until 11pm.</p>");
		$('#pane').css("border-top", "1px solid black");
	});	
	$('#Contact').click(function() {
		$('#pane').html("<h2>Contact Us</h2><p>Call us on 1300 111 222 or drop by anytime. We're at 22 Claremont Street. Reservations by email only - cornbread@co.co</p>");
	});
	$('#Menu').click(function() {	
		$('#pane').html("<h2>Menu</h1><h2>Breakfast</h2><ul><li>Firecracker cornread with eggs.</li><li>Firecracker cornbread with bacon.</li><li>Firecracker cornbread with sauteed spinach.</li></ul><h2>Lunch</h2><p>Varies seasonally - ask your friendly waitperson.</p><h2>Dinner</h2><p>Varies seasonally - ask your friendly waitperson.</p>");
	});
});

// $('.Contact').click();
// $('.Menu').click();

// $('#pane').empty(); // clears it out
// $('#pane').html('<h1>About Us</h1><p>About us page</p>') //

// $("#content").append("<h1>The DOM Restaurant</h1>");
// 	$("#content").append("<img src='http://blog.thewodlife.com.au/wp-content/uploads/2014/02/paleobanner-1024x279.jpg'/>");
// 	$("#content").append("<h2>'Sydney's finest paleo noms.'</h2>");
// 	$("#content").append("<p>The DOM restaurant is Sydney's oldest paleo restaurant and attracts visitors from all over the world. We're located at 59 York Street right in the CBD. Serving breakfast from 6:30 am and paleo bar snacks until 11pm.</p>");