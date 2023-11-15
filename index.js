document.addEventListener("DOMContentLoaded", function ()
{
    var li=document.getElementById('profile');
    var bad=document.getElementById('badgez');
    setTimeout(function() {li.classList.add('slide-in');}, 10);
    setTimeout(function() {li.classList.remove('slide-in');}, 700);
})
function profile()
{
    var li=document.getElementById('profile');
    var bad=document.getElementById('badgez');
    document.getElementById('links').scrollIntoView({behavior: "smooth"});
    setTimeout(function() {li.classList.add('slide-in');}, 30);
    setTimeout(function() {li.classList.remove('slide-in');}, 700);
}
function badge()
{
    var li=document.getElementById('profile');
    var bad=document.getElementById('badgez');
    document.getElementById('badges').scrollIntoView({behavior: "smooth"});
    setTimeout(function() {bad.classList.add('slide-in');}, 30);
    setTimeout(function() {bad.classList.remove('slide-in');}, 700);
}