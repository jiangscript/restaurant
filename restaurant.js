$(document).ready(function() {
	$('#Home').click(function() {
		$('#pane').html("<h2>'Sydney's finest paleo noms.'</h2><p>The DOM restaurant is Sydney's oldest paleo restaurant and attracts visitors from all over the world. We're located at 59 York Street right in the CBD. Serving breakfast from 6:30 am and paleo bar snacks until 11pm.</p>");
		$('#pane').css("border-top", "1px solid black");
	});	
	$('#Contact').click(function() {
		$('#pane').html("<h2>Contact Us</h2><p>Call us on 1300 111 222 or drop by anytime. We're at 58 York Street in the CBD. Reservations by email only - dom@restaurant.com</p>");
	});
	$('#Menu').click(function() {	
		$('#pane').html("<h2>Menu</h1><h2>Breakfast</h2><ul><li>PROTEIN + greens: A whole carton of eggs steamed lightly with some kale chips served on the side.</li><li>SMOOTHIE of raw egg, banana and spirulina.</li><li>Bulletproof Coffee.</li></ul><h2>Lunch</h2><p>Varies seasonally - ask your friendly waitperson.</p><h2>Dinner</h2><p>Varies seasonally - ask your friendly waitperson.</p>");
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