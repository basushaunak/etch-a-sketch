let containerWidth = document.body.clientWidth;
let boxWidth = containerWidth/16;
let obj = document.querySelector("#grid-container");
let item=Object;
let backgroundColor = "#000000";
obj.style.width = containerWidth+"px";
window.addEventListener("mouseover",mouseOver);

for(let i = 1; i <= 256; i++){
    item = document.createElement("div");
    item.style.width=boxWidth+"px";
    item.style.height=boxWidth+"px";
    item.classList.add("div-boxes");
    obj.appendChild(item);
}

function mouseOver(event){
    if(event.target.tagName === "DIV" && event.target.id !== "div-buttons"){
        event.target.style.backgroundColor = backgroundColor;
    }

}