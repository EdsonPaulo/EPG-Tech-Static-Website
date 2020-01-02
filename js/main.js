
 

var slideIndex = 0;

function autoShowSlides() {
    slideIndex++;
    showSlides(slideIndex);
    setTimeout(autoShowSlides, 2700);
}
// controlo pelos indicadores
function currentSlide(n) { showSlides(slideIndex = n); }

// Next/previous controls
function plusSlides(n) { showSlides(slideIndex += n); }

function showSlides(n) {
    var i, slides = document.getElementsByClassName("slide");
    var indicators = document.getElementsByClassName("indicator");

    if (n > slides.length) slideIndex = 1; //vai para o primeiro slide
    if (n < 1) slideIndex = slides.length; //vai para o ultimo slide

    for (i = 0; i < slides.length; i++)
        slides[i].style.display = "none"; //oculta todos os slides

    for (i = 0; i < indicators.length; i++) //retira a class ativa dos indicadores
        indicators[i].className = indicators[i].className.replace(" active", "");

    slides[slideIndex-1].style.display = "block"; //torna o slide visivel
    indicators[slideIndex-1].className += " active"; //torna o indicador ativo
}

// **** ESCREVER NA TELA BOAS VINDAS EM TEMPO REAL ***//
var welcomeMSG = 'Bem vindo ao maior portal angolano de tecnologia.'
                    +'\nMantem-te actualizado e viva TECNOLOGIA NOS SEUS LIMITES!'
var i = 0;

function typeWritter() {
    if( i < welcomeMSG.length) {
        document.getElementById("welcomeMSG").innerHTML += welcomeMSG.charAt(i);
        i++;
    }
    setTimeout(typeWritter, 50);
}

//**** CHAMADA DAS FUNÇÕES ***//
    autoShowSlides();
    typeWritter();



//abrir e fechar sidebar menu (tela media e pequena)
function openMenu() {
    document.getElementById("sidebar").style.width = "80%";
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    document.getElementById("menu-btn").style.visibility = "hidden";
}
function closeMenu() {
    document.getElementById("sidebar").style.width = "0";
    document.body.style.backgroundColor = "white";
    document.getElementById("menu-btn").style.visibility = "visible";
}
 window.onclick = (event) => {  // fechar quando clicado em alguma parte fora do sidebar
            if (event.target == document.getElementById("sidebar"))  
                closeMenu();
}

  


//*********** Filtro por categoria

//filtrar por categoria
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("product");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) 
            AddClass(x[i], "show");
    }
}
//adicionar uma classe css a um elemento
function AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++)
        if (arr1.indexOf(arr2[i]) == -1)
            element.className += " " + arr2[i];
}
//remover uma classe css a um elemento
function RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++)
        while (arr1.indexOf(arr2[i]) > -1)
            arr1.splice(arr1.indexOf(arr2[i]), 1);     
    element.className = arr1.join(" ");
}

window.onscroll = () => {
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700)
        document.getElementById("goUp-btn").style.display = "block";
    else
        document.getElementById("goUp-btn").style.display = "none";
};


//***************************JQUERY *************/

$(() => { //mover o scroll para a secção, com aceleracao de 600
    $('#contact').click(() => {
        $('html,body,main').animate( {scrollTop: $('#contact-section').offset().top }, 600);
    });

    $('#goUp-btn').click(() => {
        document.body.scrollTop = 0; // para Safari
        document.documentElement.scrollTop = 0; // para Chrome, Firefox, IE and Opera
    });
});