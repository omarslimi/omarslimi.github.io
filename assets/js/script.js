                    //NAVBAR présentation
 AOS.init();

let item1 = document.getElementById('navbar-item-a');
let item2 = document.getElementById('navbar-item-b');
let item3 = document.getElementById('navbar-item-c');
let item4 = document.getElementById('navbar-item-d');

item1.onmouseover=()=> {
    item1.style.color='#ceb982';
    item1.classList.add('animate__animated');
    item1.classList.add('animate__bounceIn');
    item1.classList.add('animate__repeat-1');
}
item1.onmouseleave=()=> {
    item1.style.color='white';
    item1.classList.remove('animate__animated');
    item1.classList.remove('animate__bounceIn');
    item1.classList.remove('animate__repeat-1');
}
item2.onmouseover=()=> {
    item2.style.color='#ceb982';
    item2.classList.add('animate__animated');
    item2.classList.add('animate__bounceIn');
    item2.classList.add('animate__repeat-1');
}
item2.onmouseleave=()=> {
    item2.style.color='white';
    item2.classList.remove('animate__animated');
    item2.classList.remove('animate__bounceIn');
    item2.classList.remove('animate__repeat-1');
}

item3.onmouseover=()=> {
    item3.style.color='#ceb982';
    item3.classList.add('animate__animated');
    item3.classList.add('animate__bounceIn');
    item3.classList.add('animate__repeat-1');
}
item3.onmouseleave=()=> {
    item3.style.color='white';
    item3.classList.remove('animate__animated');
    item3.classList.remove('animate__bounceIn');
    item3.classList.remove('animate__repeat-1');
}
item4.onmouseover=()=> {
    item4.style.color='#ceb982';
    item4.classList.add('animate__animated');
    item4.classList.add('animate__bounceIn');
    item4.classList.add('animate__repeat-1');
}
item4.onmouseleave=()=> {
    item4.style.color='white';
    item4.classList.remove('animate__animated');
    item4.classList.remove('animate__bounceIn');
    item4.classList.remove('animate__repeat-1');
}
                    //Nom prenom titre page acceuil
let nameHomePage = document.getElementById('nameHomePage');

function nameHomePageFunction() {
    nameHomePage.classList.add('animate__animated');
    nameHomePage.classList.add('animate__zoomIn');
    nameHomePage.classList.add('animate__slower');
                    
    }
nameHomePageFunction();
let typed = new Typed('#formationHomePage', {
    strings: ['DÉVELOPPEUR WEB^1000', 'ET WEB MOBILE^1000',],
    typeSpeed: 80,
    backSpeed: 80,
    showCursor: false,
    loop: true,
});