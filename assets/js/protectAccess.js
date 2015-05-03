var token = getCookie("ua_session_token");

if(token){
	UserApp.setToken(token);

	UserApp.User.get({ user_id: "self" }, function(error, user) {
        if (error) {
            // The token has probably expired, go to the login page
            if(!(location.pathname == '/login/' || location.pathname == '/signup/' || location.pathname == '/logout/' || location.pathname == '/verify/')){
                alert(error.message);
                window.location.href = "/login/";
            }
        } else {
            valid = $.inArray( user[0].email, users ) >= 0;

            if(!valid){
               if(window.location != '/logout'){
                 alert('you are not on the user list, to request access please contact adfasdf@gmail.com');
               }
                window.location.href = "/logout";
            }


            if(user[0].properties.user_type.value == "" &&
                location.pathname != '/edit/'
            ){
                alert('please complete your user profile');
                window.location.href = "/edit";
            }
        }
    });
}else {
	// No, redirect the user to the login page
    // alert(location.pathname); 
    
    if(!(location.pathname == '/login/' || location.pathname == '/signup/' || location.pathname == '/verify/')){
                window.location.href = "/login/";
    }
}
