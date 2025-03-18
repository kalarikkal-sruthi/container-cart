var swiper = new Swiper(".mySwiper", {
    slidesPerView: 7,
    autoplay: true,
    spaceBetween: 20,
    navigation: {
       nextEl: ".swiper-button-next",
       prevEl: ".swiper-button-prev",
    },
    breakpoints: {
       
       320: {
          slidesPerView: 2,
          spaceBetween: 0
       },
       
       480: {
          slidesPerView: 3,
          spaceBetween: 10
       },
    
       769: {
          slidesPerView: 4,
          spaceBetween: 20
       },

       993: {
         slidesPerView: 5,
         spaceBetween: 20
      },
      1201: {
         slidesPerView: 7,
         spaceBetween: 20
      }
    }
 });

//  

var swiper = new Swiper(".swiper-slider-logos", {
    slidesPerView: 7,
    autoplay: true,
    loop: true,
    spaceBetween: 20,
    navigation: {
       nextEl: ".swiper-button-next",
       prevEl: ".swiper-button-prev",
    },
    breakpoints: {
       
       320: {
          slidesPerView: 2,
          spaceBetween: 10
       },
    
       480: {
          slidesPerView: 3,
          spaceBetween: 10
       },
       
       769: {
          slidesPerView: 4,
          spaceBetween: 20
       },
       993: {
         slidesPerView: 5,
         spaceBetween: 20
      },
      1201: {
         slidesPerView: 7,
         spaceBetween: 20
      }
    }
 });
//  

var swiper = new Swiper(".full-banner-slider", {
  
    autoplay: true,
    spaceBetween: 20,
    navigation: {
       nextEl: ".swiper-button-next",
       prevEl: ".swiper-button-prev",
    },
    breakpoints: {
    
       320: {
          slidesPerView: 1,
          spaceBetween: 10
       },
      
       480: {
          slidesPerView: 1,
          spaceBetween: 10
       },
    
       640: {
          slidesPerView: 1,
          spaceBetween: 20
       },
     
    }
 });var swiper = new Swiper(".full-banner-slider", {
         
         autoplay: true,
         spaceBetween: 20,
         navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
         },
         breakpoints: {
         
            320: {
               slidesPerView: 1,
               spaceBetween: 10
            },
           
            480: {
               slidesPerView: 1,
               spaceBetween: 10
            },
         
            640: {
               slidesPerView: 1,
               spaceBetween: 20
            }
         }
      });
//  
var swiper = new Swiper(".testimonial-content-slider", {
  
    
    spaceBetween: 20,
    navigation: {
       nextEl: ".swiper-button-next",
       prevEl: ".swiper-button-prev",
    },
    breakpoints: {
     
       320: {
          slidesPerView: 1,
          spaceBetween: 10
       },
      
       480: {
          slidesPerView: 1,
          spaceBetween: 10
       },
      
       640: {
          slidesPerView: 1,
          spaceBetween: 20
       }
    }
 });

//  

function openBox() {
    document.getElementById("slideBox").classList.add("active");
 }

 function closeBox() {
    document.getElementById("slideBox").classList.remove("active");
 }

//  
$(document).ready(function () {
    var navbar = $('.main-header');
    var stickyOffset = navbar.offset().top;

    $(window).scroll(function () {
       if ($(window).scrollTop() > stickyOffset) {
          navbar.addClass('sticky');
       } else {
          navbar.removeClass('sticky');
       }
    });
 });

//  
function scrollLeft() {
    const container = document.getElementById('cardContainer');
    container.scrollBy({
       left: -200,
       behavior: 'smooth'
    });
 }

 function scrollRight() {
    const container = document.getElementById('cardContainer');
    container.scrollBy({
       left: 200,
       behavior: 'smooth'
    });
 }

//  
const cardContainer2 = document.getElementById('cardContainer2');

      function scrollLeft() {
         cardContainer2.scrollBy({
            left: -220,
            behavior: 'smooth'
         });
      }

      function scrollRight() {
         cardContainer2.scrollBy({
            left: 220,
            behavior: 'smooth'
         });
      }
    //   


    const listItems = document.querySelectorAll('.benefits-list li');
    const imageElement = document.getElementById('dynamic-image');

    listItems.forEach((item) => {
       item.addEventListener('mouseenter', () => {
          const newImage = item.getAttribute('data-image');
          imageElement.setAttribute('src', newImage);
       });
    });
    // 
    