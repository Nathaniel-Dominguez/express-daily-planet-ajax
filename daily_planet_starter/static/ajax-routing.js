$(document).ready(function(){
	console.log("made it AJAX");

	$("#delete-btn").on("click", function(e){
		e.preventDefault();

		// Get href from delete button link
		var url = $(this).attr("href");

		console.log("delete btn clicked")

		$.ajax({
			method: "DELETE",
			url: url

		}).done(function(data){
			console.log("success", data);
			window.location = "/articles"
		}).fail(function(err){
			console.log("Error:", err);
		}); 
	}); // End of Delete button click

	$("#edit-form").on("submit", function(e){
		e.preventDefault();

		var url = $(this).attr("action");
		var data = $(this).serialize();

		$.ajax({
			method: "PUT",
			url: url,
			data: data
		}).done(function(data){
			window.location = "/articles"
		}).fail(function(err){
			console.log("Error:", err);
		});

	});

}); // End of document ready