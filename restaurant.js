$(document).ready(function() {
	$('#Home').click(function() {
		$('#pane').html("<h2>'Sydney's finest firecracker cornbread.'</h2><p>Cornbread &amp; co is Sydney's finest cornbread establishment and attracts visitors from all over the world. We're located at 22 Claremont Street right in the CBD. Serving breakfast from 6:30 am and corny snacks until 11pm.</p>");
		$('#pane').css("border-top", "1px solid black");
		$('#Home').css("font-weight", "bold");
		$('#Contact').css("font-weight", "normal");
		$('#Menu').css("font-weight", "normal");
	});	
	$('#Contact').click(function() {
		$('#pane').html("<h2>Contact Us</h2><p>Call us on 1300 111 222 or drop by anytime. We're at 22 Claremont Street. Reservations by email only - cornbread@co.co</p>");
		$('#pane').css("border-top", "1px solid black");
		$('#Contact').css("font-weight", "bold");
		$('#Home').css("font-weight", "normal");	
		$('#Menu').css("font-weight", "normal");
	});
	$('#Menu').click(function() {	
		$('#pane').html("<h2>Menu</h1><h2>Breakfast</h2><ul><li>Firecracker cornbread with eggs.</li><li>Firecracker cornbread with bacon.</li><li>Firecracker cornbread with sauteed spinach.</li></ul><h2>Lunch</h2><p>Varies seasonally - ask your friendly waitperson.</p><h2>Dinner</h2><p>Varies seasonally - ask your friendly waitperson.</p>");
		$('#pane').css("border-top", "1px solid black");
		$('#Menu').css("font-weight", "bold");
		$('#Home').css("font-weight", "normal");
		$('#Contact').css("font-weight", "normal");
	});
});
