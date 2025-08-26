function downloadFile(url) {
    var link = document.createElement("a");
    link.download = "SLIMI OMAR - CV.pdf";
    link.href = url;
    link.click();
  }

window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('currentYear').textContent = new Date().getFullYear();

let pré = document.getElementById('pré');
let edu = document.getElementById('edu');
let rea = document.getElementById('rea');
let cont = document.getElementById('cont');

let section1 =  document.getElementById('section1');
let section3 =  document.getElementById('section3');
let section4 =  document.getElementById('section4');
let section5 =  document.getElementById('section5');

pré.onclick = () => {
        section1.classList.remove('d-none');
        section3.classList.add('d-none');
        section4.classList.add('d-none');
        section5.classList.add('d-none');
        pré.classList.add('active');
        edu.classList.remove('active');
        rea.classList.remove('active');
        cont.classList.remove('active');
}



edu.onclick = () => {
    section1.classList.add('d-none');
    section3.classList.remove('d-none');
    section4.classList.add('d-none');
    section5.classList.add('d-none');
    pré.classList.remove('active');
    edu.classList.add('active');
    rea.classList.remove('active');
    cont.classList.remove('active');
}

rea.onclick = () => {
    section1.classList.add('d-none');
    section3.classList.add('d-none');
    section4.classList.remove('d-none');
    section5.classList.add('d-none');
    pré.classList.remove('active');
    edu.classList.remove('active');
    rea.classList.add('active');
    cont.classList.remove('active');
}

cont.onclick = () => {
    section1.classList.add('d-none');
    section3.classList.add('d-none');
    section4.classList.add('d-none');
    section5.classList.remove('d-none');
    pré.classList.remove('active');
    edu.classList.remove('active');
    rea.classList.remove('active');
    cont.classList.add('active');
}

});