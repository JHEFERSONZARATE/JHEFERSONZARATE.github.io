let menuVisible=false;
//funcion que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }
}
function seleccionar(){
    //oculta el menu una vez que selecciono una opcion
    document.getElementById("nav").classList="";
    menuVisible=false;
}
//funcion que aplica las animaciones de habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("java");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("c");
        habilidades[3].classList.add("work");
        habilidades[4].classList.add("powerpoint");
        habilidades[5].classList.add("powerbi");
        habilidades[6].classList.add("excel");
        habilidades[7].classList.add("comunicacion");
        habilidades[8].classList.add("tre");
        habilidades[9].classList.add("creatividad");
        habilidades[10].classList.add("dedicacion");
        habilidades[11].classList.add("management");
    }
}
//detecta el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll=function(){
    efectoHabilidades();
}
function redireccionar1(){
    window.open("https://drive.google.com/drive/folders/1QVrsqWzBj-PD19dSTGh4skiCvPR56RIz?usp=drive_link");
}
function redireccionar2(){
    window.open("https://drive.google.com/drive/folders/19pIo3ko5MMRLPu0oyrFqGTcFL9-OYAji?usp=drive_link");
}
function redireccionar3(){
    window.open("https://drive.google.com/drive/folders/1Jb1doLcDazXGZeDVgPwULx7EXE8dflX-?usp=sharing");
}
function redireccionar4(){
    window.open("https://drive.google.com/drive/folders/1Jb1doLcDazXGZeDVgPwULx7EXE8dflX-?usp=sharing");
}
