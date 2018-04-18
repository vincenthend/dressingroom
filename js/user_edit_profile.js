 $(document).ready(function() {

	$("button").click(function() {
		var oldpassword = $("#oldpassword").val();
		var newpassword = $("#newpassword").val();
		var confirmpassword = $("#confirmpassword").val();
		$.ajax({
			method: "POST",
			url: "post_edit_action",
			data: {
				oldpassword: oldpassword,
				newpassword: newpassword,
				confirmpassword: confirmpassword
			},
			dataType:'json',
			success:function(response) {
				alert(response);
			},
			error:function(){
				alert('Error');
			}
		});

		return false;
	});
});