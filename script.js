//Nav bar background appear on scroll
var headBar = document.querySelector("#headBar");
window.addEventListener("scroll", function(){
    headBar.classList.toggle("sticky", window.scrollY > 0);
});
//Menu button on responsive
menuBtnClicked = () => {
    var menuBtn = document.getElementById("menu-btn");
    var home = document.getElementById("home");
    home.classList.toggle("active");
    menuBtn.classList.toggle("change");
    headBar.classList.toggle("active");
}