
for(let i=0; i<document.querySelectorAll(".drum").length;i++) {
document.querySelectorAll("button")[i].addEventListener("click",function() {
    var btn=this.innerHTML;
    makeSound(btn);
    makeAnimation(btn);
    
});
} 

document.addEventListener("keydown",function(event){
   
    makeSound(event.key);
    makeAnimation(event.key);


});

function makeSound(key) {
    switch (key) {
        case "w":
            var audio=new Audio('sounds/tom-1.mp3');
           audio.play();
        
            break;
         
    
        case "a":
            var audio=new Audio('sounds/tom-2.mp3');
            audio.play();
            
            break;
         
        case "s":
            var audio=new Audio('sounds/tom-3.mp3');
            audio.play();
                
            break;
        
        case "d":
            var audio=new Audio('sounds/tom-4.mp3');
            audio.play();
                
             break;
         
        case "j":
            var audio=new Audio('sounds/snare.mp3');
            audio.play();
            
            break;
         
        case "k":
            var audio=new Audio('sounds/crash.mp3');
            audio.play();
                
            break;
         
        case "l":
            var audio=new Audio('sounds/kick-bass.mp3');
            audio.play();
                
            break;
             
        default:
            console.log("Wrong button");
            break;
       }

}

function makeAnimation(currkey) {
    var activebtn=document.querySelector("."+currkey);
    activebtn.classList.add("pressed"); //used to add the class of .press from css
    setTimeout(function(){
        activebtn.classList.remove("pressed");
    },100)

}












//this.style.color="white" will make whatever the button we clicked color to white so this is bsically identity of what we clicked
// var bellboy={ function(event) tells us about the event that was pressed

//}
/* function BellBoy(name,etc,ect.etc) {
    this.name=name;
    this.blooblah=etc
}
var bellboy1= new BellBoy("timothy",69,901)

*/








// it could also be document.queryslector("button").addeventlistener("click",function)
    //but here only the first buttomn is targeted
   

