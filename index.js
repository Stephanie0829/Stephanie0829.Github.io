//code that takes care of displayin gthe resume dropdown when btn clicked
function displayResume() {
    var obj = document.getElementById("resumediv");
    var obj2 = document.getElementById("dropdown");
    if(obj.style.display == "none" || obj.style.display == "" ){
        obj.style.display = "block";
        obj2.innerHTML="&#x5e";
    } else {
        obj.style.display = "none";
        obj2.innerHTML="&#8964";
    }
}


//code that takes care of carousel
var index = 0;

//Function to open proper tab
function openTab(evt, nameContent, idbtn, classSlide){
    var tabContent, tabLink;
    
    tabContent = document.getElementsByClassName("tabContent");
    tabLink = document.getElementsByClassName("tabLink");
    buttons = document.getElementsByClassName("btns");

    //set all elements to display none
    for(var i = 0; i<tabContent.length; i++){
        tabContent[i].style.display = "none";
    }
    for (var i = 0; i < tabLink.length; i++) {
        tabLink[i].className = tabLink[i].className.replace(" current", "");
    }
    for (var i = 0; i <buttons.length; i++) {
        buttons[i].style.display = "none";
    }

    //set proper tab to current and display content and button
    document.getElementById(nameContent).style.display = "block";
    document.getElementById(idbtn).style.display = "flex";
    evt.currentTarget.className += " current";

    //call for first slide to be displayed
    index = 0;
    showSlide(index, classSlide);
}

//function to increment or decrement slide
function changeSlide(n, classname) {
    index+=n;
    showSlide(index, classname);
}

function currentSlide(n) {
    index = n;
    showSlide(index);
}

//show slide
function showSlide(num, classname) {
var slides = document.getElementsByClassName(classname);

//create cycle
if (num > slides.length-1) {
    index = 0;
} else if (num < 0) {
    index = slides.length-1;
}

//set all slides to display none 
for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}


//display proper slide
slides[index].style.display = "block";
}