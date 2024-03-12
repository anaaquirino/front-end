var slideIndex = 0;

carrosel()

function carrosel(){
    var x =document.getElementsByClassName("meuSlide")

    for(var i = 0; i < x.length; i++ ){
        x[i].style.display = "none"
    }
    slideIndex++;
    if(slideIndex > x.length){
        slideIndex = 1;

    }

    x[slideIndex-1].style.display = "block";
    setTimeout(carrosel,1000);


    console.log(x)
}