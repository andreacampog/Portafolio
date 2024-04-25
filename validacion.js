const moon_btn= document.querySelector("#toogle-btn--img");


// utilizo un interruptor para los modos de luz
    
moon_btn.addEventListener("click",function(){
    let body = document.querySelector("body");
    if (body.classList.contains("dark-mode")){
        body.classList.remove("dark-mode");
        moon_btn.setAttribute("src", "./assets/moon.png");
    }else{
        body.classList.add("dark-mode");
        moon_btn.setAttribute("src", "./assets/sun.png");
}});
