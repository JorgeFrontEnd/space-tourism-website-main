var nav = document.getElementById("nav-placeholder");

$(function () {
    $("#nav-placeholder").load("nav.html");
});

function navUnderline(){
    var url = window.location.href.split('/')
    link = url[url.length - 1];
    link = document.querySelectorAll("#nav ul li");
    console.log(link);
}

navUnderline();

