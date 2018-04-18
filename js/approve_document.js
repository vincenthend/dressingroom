$(document).ready(function() {

	// $("#terima").click(function() {
	// 	var nama_dokumen = $("tr#");
	// 	$.ajax({
	// 		method: "POST",
	// 		url: "update_status_document",
	// 		data: {
	// 			status_doc:"Disetujui",
	// 			nama_dokumen: nama_dokumen
	// 		},
	// 		dataType:'json',
	// 		success:function(response) {
	// 			alert(response.status_doc);
	// 		},
	// 		error:function(){
	// 			alert('Error');
	// 		}
	// 	});

	// 	// alert("CUK");

	// 	return false;
	// });

	function approve_document(id) {
		var nama_dokumen = $("tr#"+id).val();
		alert(nama_dokumen);
		$.ajax({
			method: "POST",
			url: "update_status_document",
			data: {
				status_doc:"Disetujui",
				nama_dokumen: nama_dokumen
			},
			dataType:'json',
			success:function(response) {
				alert(response.status_doc);
			},
			error:function(){
				alert('Error');
			}
		});

		// alert("CUK");

		return false;
	}
});