
// this function catches the username and password from input fields and then it
// show the alert with particular name and pass
$(function () {

    $("#login").click(function(){
        var name = $(".name").val();
        var pass = $(".pass").val();
        alert("Hello"+ name + "and your password is" + pass );
    

    });

})


