if( !customElements.get('swiper-slider') ) {
  customElements.define('swiper-slider',
    class SwiperSlider extends HTMLElement {
      constructor() {
        super();
        this.swiper = new Swiper('.swiper', {
          loop: true,
          centeredSlides: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          breakpoints: {
            350: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 20
            }
          }
        });
      }
    }
  )
}