let containerWidth = document.body.clientWidth;
let boxWidth = containerWidth/16;
let obj = document.querySelector("#grid-container");
let item=Object;
let backgroundColor = "black";
let backgroundColorRandom = false;
let paintStart = false;
obj.style.width = containerWidth+"px";
window.addEventListener("mouseover",mouseOver);
window.addEventListener("click",mouseClick);

for(let i = 1; i <= 256; i++){
    item = document.createElement("div");
    item.style.width=boxWidth+"px";
    item.style.height=boxWidth+"px";
    item.classList.add("div-boxes");
    obj.appendChild(item);
}

function mouseOver(event){
    if(event.target.tagName === "DIV" && event.target.id !== "div-buttons"){
        if (paintStart){
            if(backgroundColorRandom){
                backgroundColor = getRandomColor();
            }
            event.target.style.backgroundColor = backgroundColor;
        }        
    }
}

function mouseClick(event){
    if(event.target.tagName === "BUTTON"){
        if(event.target.id === "btn-start"){
            if(event.target.innerText === "Start"){
                event.target.innerText = "Stop" ;                          
            } else {
                event.target.innerText = "Start";
            }
            paintStart = !(paintStart);
        } else if(event.target.id === "btn-clear"){         
            backgroundColorRandom = false;
            resetImage();
        } else if(event.target.id === "btn-eraser"){     
            backgroundColorRandom = false;       
            backgroundColor = "whitesmoke";
        } else if(event.target.id === "btn-black"){  
            backgroundColor = "black";
            backgroundColorRandom = false;
        } else if(event.target.id === "btn-random"){    
            backgroundColorRandom = true;   
        }
    }
}

function getRandomColor(){
    let colorRed = parseInt(Math.random()*256);
    let colorGreen = parseInt(Math.random()*256);
    let colorBlue = parseInt(Math.random()*256);
    let colorFn = "rgb("+colorRed+","+colorGreen+","+colorBlue+")";
    return colorFn;
}

function resetImage(){
    let arrayBoxes = Array.from(document.querySelectorAll(".div-boxes"));
    arrayBoxes.forEach(item =>{ 
        item.style.backgroundColor="whitesmoke";
    })
}