


const greenColor = document.querySelector(".green");
const yellowColor = document.querySelector(".yellow");
const whiteColor = document.querySelector(".white");


const naturalezaButton = document.getElementById("button");
const itemTag = document.getElementsByTagName("h3")[0];

const imageCard = document.querySelector(".img-container");

const feedBackBtn = document.querySelector(".feedBack");

const buttonText = document.querySelector(".button-text")


greenColor.addEventListener("click", function(){
        
    
naturalezaButton.style.backgroundColor = "black";
buttonText.style.color = "white"
itemTag.style.backgroundColor = "green";
itemTag.style.color = "black";
imageCard.style.backgroundImage = "url('../img 2/butterfly-8387989_1280.jpg')"

});

yellowColor.addEventListener("click", function(){
        
    
    naturalezaButton.style.backgroundColor = "yellow";
    buttonText.style.color = "black"
    itemTag.style.backgroundColor = "yellow";
    itemTag.style.color = "black";
    imageCard.style.backgroundImage = "url('../img 2/narzissen-8598191_1280.jpg')"
    
    });

    whiteColor.addEventListener("click", function(){
        
    
        naturalezaButton.style.backgroundColor = "white";
        buttonText.style.color = "black"
        itemTag.style.backgroundColor = "white";
        itemTag.style.color = "black";
        imageCard.style.backgroundImage = "url('../img 2/ruby-throated-hummingbird-8596660_1280.jpg')"
        
        });


// implementar el botón del carrito


const cart =() => {

naturalezaButton.style.display = "none";
feedBackBtn.style.display = "block";



}
naturalezaButton.addEventListener("click", cart);

const feedBackFun = () => {

    naturalezaButton.style.display = "block";
    feedBackBtn.style.display = "none"

}


feedBack.addEventListener("click", feedBackFun);