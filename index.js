document.addEventListener("DOMContentLoaded", function ()
{
    var li=document.getElementById('profile');
    var bad=document.getElementById('badgez');
    li.setAttribute("style","");
    setTimeout(function() {li.classList.add('slide-in');}, 10);
    setTimeout(function() {li.classList.remove('slide-in');}, 700);
    bad.setAttribute("style","display:none");
})
function badge()
{
    var li=document.getElementById('profile');
    var bad=document.getElementById('badgez');
    setTimeout(function() {bad.setAttribute("style","");}, 30);
    setTimeout(function() {bad.classList.add('slide-in');}, 10);
    setTimeout(function() {bad.classList.remove('slide-in');}, 700);
    li.setAttribute("style","display:none");
}

function profile()
{
    var li=document.getElementById('profile');
    var bad=document.getElementById('badgez');
    setTimeout(function() {li.setAttribute("style","");}, 40);
    setTimeout(function() {li.classList.add('slide-in');}, 10);
    setTimeout(function() {li.classList.remove('slide-in');}, 700);
    bad.setAttribute("style","display:none");
}