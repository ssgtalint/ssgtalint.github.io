UserApp.User.get({}, function(error, result){
	console.log(result);
	function getQueryParams(qs) {
	    qs = qs.split("+").join(" ");
	    var params = {}, tokens,
	        re = /[?&]?([^=]+)=([^&]*)/g;
	    while (tokens = re.exec(qs)) {
	        params[decodeURIComponent(tokens[1])]
	            = decodeURIComponent(tokens[2]);
	    }
	    return params;
	}

	query = getQueryParams(document.location.search);
	if (query.ua_token != undefined){
		// setCookie("ua_session_token", query.ua_token, 1);
		// setCookie("account_type", "manager", 1);
		console.log(result);
		// storeUser(result.user_id, function(error, result){
	 //   		slogin(error, result);
		// });

			
	}
	
	console.log(result);
	
	valid = $.inArray( result[0].email, users ) >= 0;

	if(valid){
		$("#update-skills").show();
	}else{
		$("#status").html("you are not on access list, please email alskddkf to request access");
	}
});