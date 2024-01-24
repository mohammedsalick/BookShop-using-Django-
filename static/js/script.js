/*------- search button ----------- */

searchform = document.querySelector('.search-box');
document.querySelector('#search-btn').onclick = () =>{
    searchform.classList.toggle('active');
}


window.onscroll = () =>{
    searchform.classList.remove('active');
    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}

window.onload = () =>{
    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
 
}

var swiper = new Swiper(".arrivals-slider", {
    spaceBetween: 10,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    breakpoints: {
     0: {
        slidesPerView: 1,   
      },
      768: {
        slidesPerView: 2, 
      },
      1024: {
        slidesPerView: 3, 
      },
    },
  });

  var swiper = new Swiper(".blog-slider", {
    spaceBetween: 10,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    breakpoints: {
     0: {
        slidesPerView: 1,   
      },
      768: {
        slidesPerView: 2, 
      },
      1024: {
        slidesPerView: 3, 
      },
    },
  });

