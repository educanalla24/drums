var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i =0 ; i<numberOfDrumButtons;i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var buttonInnnerHTML = this.innerHTML;


    switch (buttonInnnerHTML) {
        case "w":
            var tom1 = new Audio('sounds/beba.mp3');
    tom1.play();
            break;
            case "a":
                var tom2 = new Audio('sounds/burron.mp3');
        tom2.play();
                break;
                case "s":
            var tom3 = new Audio('sounds/cola.mp3');
    tom3.play();
            break;
            case "d":
                var tom4 = new Audio('sounds/mala.mp3');
        tom4.play();
                break;
                case "j":
                    var snare = new Audio('sounds/veneno.mp3');
            snare.play();
                    break;
                     case "k":
                    var kick = new Audio('sounds/cola.mp3');
            kick.play();
                    break;
                    case "l":
                        var crash = new Audio('sounds/burron.mp3');
                crash.play();
                        break;






    
        default: console.log(buttonInnnerHTML);
    
    }     
    });
    }


