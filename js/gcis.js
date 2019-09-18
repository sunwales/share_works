$(document).ready(function () {
    $('button').click(btn_click);
});

//btn按下後處理的動作
function btn_click() {
	$('#feedback').html('');

	//檢核統一編號是否0~9的組合字串
	var re = /^[0-9]+$/;
	console.log("input: "+$('input[name="President_No"]').val());
	if (!re.test($('input[name="President_No"]').val())) {
		$('#feedback').append('統一編號請輸入 0~9 的組合字串');
		return;
	}

	//params
	const params = {
	    $format: 'json',
	    $filter: 'President_No eq '+$('input[name="President_No"]').val(),
	    // $skip: 0,
	    // $top: 100
	};

	//by CURL
    $.ajax({
		    type: "POST",
		    url: '../applications/curl_query.php',
		    data: params,
			success: function(data) {
			    console.log(data);
			    var ul = $('<ul>');
			    ul.append($('<li>').text('查詢成功'));
			    ul.append($('<li>').text(data));
			    $('#feedback').append(ul);
			},
			error: function(result) {
			    console.log(result);
			    var ul = $('<ul>');
			    ul.append($('<li>').text('查詢異常'));
			    ul.append($('<li>').text(result));
			    $('#feedback').append(ul);
			}

	});

}



