const font = document.querySelector("#font");
const size = document.querySelector("#size");
const color = document.querySelector("#color");
const text = document.querySelector(".editable");
// font.addEventListener("onchange",UpdateText);
// color.addEventListener("onchange",UpdateText);
// size.addEventListener("onchange",UpdateText);

function UpdateText(){
    text.style.color=color.value;
    text.style.fontFamily=font.value;
    text.style.fontSize=size.value +"px";
}


