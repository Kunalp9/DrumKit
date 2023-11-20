
for(let i = 0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonLetter = this.innerHTML;
        keySound(buttonLetter);
        animation(buttonLetter);
    })
}


document.addEventListener("keydown", function(event){
    var buttonLetter = event.key;
    keySound(buttonLetter);
    animation(buttonLetter);
})

function keySound(key){
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();    
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();    
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();    
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();    
            break;
        case "j":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();    
            break;
        case "k":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();    
            break;
        case "l":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();    
            break;
    
        default:
            break;
    }
}


function animation(key){
    var keypressed = document.querySelector("." + key);
    keypressed.setAttribute("class", key + " drum pressed");
    setTimeout(function(){
        keypressed.setAttribute("class",key + " drum");
    }, 100)
}