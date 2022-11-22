$(function () {

    $("#login").click(function(){
        var name = $(".name").val();
        var pass = $(".pass").val();
        alert("Hello"+ name + "and your password is" + pass );
    

    });

})



// window.onclick("#login", function loadtext() {
//   var name = document.getElementsByClassName(".name");
//   var pass = document.getElementsByClassName(".pass");

//   alert("name is " + name + "and pass is " + pass);
// })
