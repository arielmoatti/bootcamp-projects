var headlineBox = document.getElementById("headlines");
var left = headlineBox.offsetLeft;
var links = document.getElementsByTagName("a");
console.log("links", links);

function moveTickers() {
    left = left - 1.5;
    // left--;
    headlineBox.style.left = left + "px";
    if (left <= -links[0].offsetWidth) {
        left += links[0].offsetWidth;
        headlineBox.appendChild(links[0]);
    }
    requestAnimationFrame(moveTickers);
}
moveTickers();

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("mouseenter", function () {
        links[i].style.color = "blue";
    });
}
