var numberOfDrumsBtn = document.querySelectorAll(".drum").length;


for (var i = 0 ; i<numberOfDrumsBtn; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

        var btnKey = this.getAttribute("data-key");

        makeSound(btnKey);
        buttonAnimation(btnKey);
    
    });
}

var isPlaying = {};

document.addEventListener("keypress", function(event) {
    var key = event.key;
    
    if (!isPlaying[key]) {
        makeSound(key);
        buttonAnimation(key);
        isPlaying[key] = true;
    }
});

document.addEventListener("keyup", function(event) {
    var key = event.key;
    isPlaying[key] = false;
});


function makeSound(key){
    switch (key) {
        case "w":
            var tom= new Audio("drumaudiokit/tom.wav");
            tom.play();
            break;

            case "a":
            var boom= new Audio("drumaudiokit/boom.wav");
            boom.play();
            break;
            
            case "s":
            var clap= new Audio("drumaudiokit/clap.wav");
            clap.play();
            break;
            
            case "d":
            var hihat= new Audio("drumaudiokit/hihat.wav");
            hihat.play();
            break;
            
            case "e":
            var kick= new Audio("drumaudiokit/kick.wav");
            kick.play();
            break;
            
            case "f":
            var openhat= new Audio("drumaudiokit/openhat.wav");
            openhat.play();
            break;

            case "g":
            var ride= new Audio("drumaudiokit/ride.wav");
            ride.play();
            break;

            case " ":
            var snare= new Audio("drumaudiokit/snare.wav");
            snare.play();
            break;

            case "h":
            var tink= new Audio("drumaudiokit/tink.wav");
            tink.play();
            break;

            default:console.log(key);
    }
}

function buttonAnimation(currentKey){
    var activeBtn = document.querySelector('[data-key="' + currentKey + '"]');
    activeBtn.classList.add('pressed');

    setTimeout(function(){
        activeBtn.classList.remove('pressed');
    }, 150);
}