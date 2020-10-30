function inicio() {
    var el = document.getElementById("canvas");
    el.addEventListener("touchstart", handleStart, false);
    el.addEventListener("touchend", handleEnd, false);
    el.addEventListener("touchcancel", handleCancel, false);
    el.addEventListener("touchmove", handleMove, false);
    el.addEventListener("click", "alert('click')");
}
window.onload = inicio;
function handleStart(evt) {
    evt.preventDefault();
    document.getElementById("log").innerHTML = "Touchstart";
}
function handleStart(evt) {
    evt.preventDefault();
    document.getElementById("log").innerHTML = "Touchend";
}
function handleStart(evt) {
    evt.preventDefault();
    document.getElementById("log").innerHTML = "Touchmove";
}
function click() {
    alert("click");
}