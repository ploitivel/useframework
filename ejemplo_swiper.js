{/* <link rel="stylesheet" href="https://unpkg.com/swiper@8/swiper-bundle.min.css"/>
<script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script> */}


//FORMA UNO
var props_swiper = {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
}

//Para varios carruseles con las mismas propiedades
var swiperUNO = new Swiper(".mySwiperUno", props_swiper);
var swiperDOS = new Swiper(".mySwiperDos", props_swiper);
var swiperTres = new Swiper(".mySwiperTres", props_swiper);



//FORMA 2 
var swiperHacking = new Swiper(".mySwiperHacking", {
    slidesPerView: 3, //Numerode diapositivas a mostrar
    //spaceBetween: 30,
    spaceBetween: 10, //Espacio entre diapositivas
    freeMode: true,
    loop:true,
    autoplay: { //Cambio automatico de diapositivas
      delay: 1000, //TIEMPO DF CAMBIO DEL SLIDER
      disableOnInteraction: false,
    },
    pagination: {  // Si necesitamos paginación
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {  //Botones de navegacion 
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    effect: "coverflow", //Efecto de las diapositivas giradas
    grabCursor: true,
    centeredSlides: true,
    //slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,  // girar
      stretch: 0,  // tramo
      depth: 100,  // profundidad
      modifier: 1,  // modificador
      slideShadows: false,  // sombras de diapositivas
    },
    centeredSlides: true, //Para centrar los sliders
    //// Optional parameters
	direction: 'horizontal', //direction:'vertical', //Direccion del slider
	loop: true,
    // Y si necesitamos barra de desplazamiento
    scrollbar: {
		el: '.swiper-scrollbar',
        //hide: true,
	},
  });


<div class="swiper mySwiper">
    <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
        <div class="swiper-slide">Slide 4</div>
        <div class="swiper-slide">Slide 5</div>
        <div class="swiper-slide">Slide 6</div>
        <div class="swiper-slide">Slide 7</div>
        <div class="swiper-slide">Slide 8</div>
        <div class="swiper-slide">Slide 9</div>
    </div>
    <div class="swiper-scrollbar"></div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div> 
    <div class="swiper-pagination"></div>
</div>