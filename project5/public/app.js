// Sanity check
console.log("JS is working");

$.ajax({
	method: 'GET',
	url: 'http://localhost:3000/json',
	success: function(data) {
		data.forEach(function(element) {
			$("body").append('<p>' + element.name + '</p>');
		});
	}
});