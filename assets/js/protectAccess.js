
var token = getCookie("ua_session_token");

if(token){
	UserApp.setToken(token);


	UserApp.User.get({ user_id: "self" }, function(error, user) {
        if (error) {
            // The token has probably expired, go to the login page
            if(!(location.pathname == '/login/' || location.pathname == '/signup/')){
                alert(error.message);
                window.location.href = "/login/";
            }
        } else {
            // Success, the profile is at user[0]
        }
    });
}else {
	// No, redirect the user to the login page
    // alert(location.pathname); 
    
    if(!(location.pathname == '/login/' || location.pathname == '/signup/')){
                window.location.href = "/login/";
    }
}
