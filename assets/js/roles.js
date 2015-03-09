// manager-only
// hr-only
// employee-only

// console.log(getCookie("account_type"));

if(getCookie("account_type") != 'hr'){
	$('.hr-only').hide();
}

if(getCookie("account_type") != 'manager'){
	$('.manager-only').hide();
}

if(getCookie("account_type") != 'employee'){
	$('.employee-only').hide();
}


if(getCookie("account_type") == 'hr'){
	$('.not-hr').hide();
}

if(getCookie("account_type") == 'manager'){
	$('.not-manager').hide();
}

if(getCookie("account_type") == 'employee'){
	$('.not-employee').hide();
}

$('#user-role-display').html(" | " + getCookie("account_type"));



