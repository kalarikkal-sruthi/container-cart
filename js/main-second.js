document.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;
    const parallaxContainer = document.querySelector(".home-content1");
    const zoomFactor = 1 + scrollPosition / 3000; 

    requestAnimationFrame(() => {
       parallaxContainer.style.backgroundSize = `${100 * zoomFactor}% ${100 * zoomFactor}%`;
    });
 });

//  

window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
       document.body.classList.add('scroll');
    } else {
       document.body.classList.remove('scroll');
    }
 });

//   
fetch('navbar.html')
.then(response => response.text())
.then(data => {
   document.getElementById('navbar-placeholder').innerHTML = data;
})
.catch(error => console.error('Error loading navbar:', error));

// 

function scrollToForm() {
    const formSection = document.getElementById('form-section');
    formSection.scrollIntoView({ behavior: 'smooth' });
 }


//  
   
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const menu = document.querySelector('.menu');
    const actionRow2 = document.querySelector('.action-row2');

    if (window.scrollY > 50) {
       navbar.classList.add('scrolled');
       menu.classList.add('hidden');
       actionRow2.classList.add('hidden');
    } else {
       navbar.classList.remove('scrolled');
       menu.classList.remove('hidden');
       actionRow2.classList.remove('hidden');
    }
 });
//  

const listItemz = document.querySelectorAll('.benefits-list li');

listItems.forEach(item => {
   item.addEventListener('mouseenter', () => {

      listItems.forEach(li => li.classList.remove('selected'));
      item.classList.add('selected');
   });
});