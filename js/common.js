document.addEventListener('DOMContentLoaded', function() {
	// Инициализация карусели:
	const showSlider = new Swiper('.showcase-carousel', {
		loop: true, // зацикливание слайдера
		slidesPerView: 3,
		speed: 1800, // скорость перелистывания слайдов 1800 милисекунд
		centeredSlides: true, // активный слайд по середине
		navigation: {
			nextEl: '.showcase-navigation__next',
			prevEl: '.showcase-navigation__prev',
		}
	})
	

	document.querySelector('video').playbackRate = 2;
})
