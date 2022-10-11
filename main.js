window.onload = pageLoad;
function pageLoad()
{
	var fb = document.getElementById("linkFacebook");
	fb.onclick = faceLogin;
    var ig = document.getElementById("linkIG");
	ig.onclick = igLogin;
    var pr = document.getElementById("linkAssignment")
    pr.onclick = pageLoadtopro
}
function faceLogin()
{
    location.href="https://www.facebook.com/qjetso.woenz";
}
function igLogin()
{
    location.href="https://www.instagram.com/jeepjaturong/?hl=en";
}
function pageLoadtopro()
{
    location.href="pro.html";
}