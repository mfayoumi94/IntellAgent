var count = 0;
var over = document.getElementById("overlay_robot");    
function expandoverlay() {
    count++;
    if (count % 2 == 0) {
        over.style.visibility = "hidden";        
        over.style.opacity = 0;
    } else {
        over.style.visibility = "visible";         
        over.style.opacity = 1;
    }