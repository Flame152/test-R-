//Меню бургер
const menuBurger = document.querySelector('.menu-burger');
const menuNav = document.querySelector('.mobile-menu');
const menuLogo = document.querySelector('.mobile-menu__logo');
const menuBottom = document.querySelector('.mobile-menu__bottom');
const menuBody = document.querySelector('body');
if (menuBurger) {
	menuBurger.addEventListener("click", function (e) {
		menuBurger.classList.toggle('menu-burger-open');
		menuNav.classList.toggle('mobile-menu-active');
		menuBody.classList.toggle('lock');
		if (menuLogo) {
			menuLogo.addEventListener("click", function (e) {
				menuBurger.classList.remove('menu-burger-open');
				menuNav.classList.remove('mobile-menu-active');
				menuBody.classList.remove('lock');
			});
		}
		if (menuBottom) {
			menuBottom.addEventListener("click", function (e) {
				menuBurger.classList.remove('menu-burger-open');
				menuNav.classList.remove('mobile-menu-active');
				menuBody.classList.remove('lock');
			});
		}
	});
}

//new menu
//tabs меню PC
document.querySelectorAll('.dropdown-menu__tab').forEach((item) => {
	item.addEventListener('click', function (e) {
		e.preventDefault();
		const id = e.target.getAttribute('href').replace('/', '');


		document.querySelectorAll('.dropdown-menu__tab').forEach(
			(child) => child.classList.remove('dropdown-menu__tab-active')
		);
		document.querySelectorAll('.dropdown-menu__body').forEach(
			(child) => child.classList.remove('dropdown-menu__body-active')
		);

		item.classList.add('dropdown-menu__tab-active');
		document.getElementById(id).classList.add('dropdown-menu__body-active');

	});
	item.addEventListener('mouseover', function (e) {
		e.preventDefault();
		const id = e.target.getAttribute('href').replace('/', '');


		document.querySelectorAll('.dropdown-menu__tab').forEach(
			(child) => child.classList.remove('dropdown-menu__tab-active')
		);
		document.querySelectorAll('.dropdown-menu__body').forEach(
			(child) => child.classList.remove('dropdown-menu__body-active')
		);

		item.classList.add('dropdown-menu__tab-active');
		document.getElementById(id).classList.add('dropdown-menu__body-active');

	});
});
//tabs меню PC -end

const dropdownNav = document.querySelector(".dropdown-mobile__left");
const menuItemDrop = document.querySelector('.mobile-menu__link_dropdown');
const menuBtnTitle = document.querySelector('.dropdown-mobile__btn-title');
const menuDrop = document.querySelector('.dropdown-mobile');
const menuDropContent = document.querySelector('.dropdown-mobile__right-content');
if (menuItemDrop) {
	menuItemDrop.addEventListener("click", function (e) {
		menuDrop.classList.add('dropdown-mobile-active');
		menuNav.classList.add('mobile-display');
	});
}
if (menuBtnTitle) {
	menuBtnTitle.addEventListener("click", function (e) {
		menuDrop.classList.remove('dropdown-mobile-active');
		dropdownNav.classList.remove('dropdown-mobile__left-active');
		menuNav.classList.remove('mobile-display');
	});
}


document.querySelectorAll('.dropdown-mobile__btn-title-paragraph').forEach(el => {
	el.addEventListener("click", function (e) {
		dropdownNav.classList.remove('dropdown-mobile__left-active');
		menuDropContent.classList.remove('dropdown-mobile__right-content-active');

		document.querySelectorAll('.dropdown-mobile__body').forEach(
			(child) => child.classList.remove('dropdown-mobile__body-active')
		);
	});
})


//tabs меню mobile
document.querySelectorAll('.dropdown-mobile__tab').forEach((item) => {
	item.addEventListener('click', function (e) {
		e.preventDefault();
		const id = e.target.getAttribute('href').replace('/', '');


		document.querySelectorAll('.dropdown-mobile__tab').forEach(
			(child) => child.classList.remove('dropdown-mobile__tab-active')
		);
		document.querySelectorAll('.dropdown-mobile__body').forEach(
			(child) => child.classList.remove('dropdown-mobile__body-active')
		);

		dropdownNav.classList.add('dropdown-mobile__left-active');
		menuDropContent.classList.add('dropdown-mobile__right-content-active');
		item.classList.add('dropdown-mobile__tab-active');
		document.getElementById(id).classList.add('dropdown-mobile__body-active');
	});
});
//tabs меню mobile -end
//new menu -end

//Слайдер
//<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"></script>
//<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">
function initSliders() {
	// Перечень слайдеров
	// Главный слайдер
	if (document.querySelector('.main-carousel__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		var swiper = new Swiper('.main-carousel__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			slidesPerView: 1,
			spaceBetween: 30,
			autoHeight: true,
			speed: 500,
			init: false,
			loop: true,
			pagination: {
				el: '.main-carousel-pagination',
				clickable: true,
			},

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.main-btn-prev',
				nextEl: '.main-btn-next',
			},

			// Брейкпоинты
			breakpoints: {
				320: {
					spaceBetween: 10,
					pagination: {
						el: '.main-carousel-pagination',
						clickable: true,
						dynamicBullets: true,
						dynamicMainBullets: 3,
					},
				},
				768: {
					spaceBetween: 30,
				},
				// 992: {
				// 	spaceBetween: 30,
				// },
				// 1268: {
				// },
			},
		});
		swiper.on("slideChange afterInit init", function () {
			let currentSlide = this.activeIndex + 1;
			document.querySelector('.pagination-btn-carousel__main').innerHTML = `<span class="pagination-btn-carousel__main_current">
			${currentSlide < 10 ? + currentSlide : currentSlide}
			</span> из <span class="pagination-btn-carousel__main_total">
			${this.slides.length}
			</span>`;
		});
		swiper.init();
	}

	//Истории пациентов
	if (document.querySelector('.stories__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		var swiper = new Swiper('.stories__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			slidesPerView: 1,
			spaceBetween: 30,
			autoHeight: true,
			speed: 500,
			init: false,
			pagination: {
				el: '.stories-carousel-pagination',
				clickable: true,
			},

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.stories-btn-prev',
				nextEl: '.stories-btn-next',
			},

			// Брейкпоинты
			breakpoints: {
				320: {
					spaceBetween: 10,
					pagination: {
						el: '.stories-carousel-pagination',
						clickable: true,
						dynamicBullets: true,
						dynamicMainBullets: 3,
					},
				},
				768: {
					spaceBetween: 30,
				},
				// 992: {
				// 	spaceBetween: 30,
				// },
				// 1268: {
				// },
			},
		});
		swiper.on("slideChange afterInit init", function () {
			let currentSlide = this.activeIndex + 1;
			document.querySelector('.pagination-btn-carousel__stories').innerHTML = `<span class="pagination-btn-carousel__stories_current">
			${currentSlide < 10 ? + currentSlide : currentSlide}
			</span> из <span class="pagination-btn-carousel__stories_total">
			${this.slides.length}
			</span>`;
		});
		swiper.init();
	}

	//Акции слайдер
	if (document.querySelector('.stock-slider__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		var swiper = new Swiper('.stock-slider__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			slidesPerView: 1,
			spaceBetween: 30,
			autoHeight: true,
			speed: 500,
			init: false,
			pagination: {
				el: '.stock-slider-carousel-pagination',
				clickable: true,
			},

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.stock-slider-btn-prev',
				nextEl: '.stock-slider-btn-next',
			},

			// Брейкпоинты
			breakpoints: {
				320: {
					spaceBetween: 20,
					pagination: {
						el: '.stock-slider-carousel-pagination',
						clickable: true,
						dynamicBullets: true,
						dynamicMainBullets: 3,
					},
				},
				768: {
					spaceBetween: 30,
					pagination: {
						el: '.stock-slider-carousel-pagination',
						clickable: true,
						dynamicBullets: true,
						dynamicMainBullets: 4,
					},
				},
				// 992: {
				// 	spaceBetween: 30,
				// },
				// 1268: {
				// },
			},
		});
		swiper.on("slideChange afterInit init", function () {
			let currentSlide = this.activeIndex + 1;
			document.querySelector('.pagination-btn-carousel__stock-slider').innerHTML = `<span class="pagination-btn-carousel__stock-slider_current">
			${currentSlide < 10 ? + currentSlide : currentSlide}
			</span> из <span class="pagination-btn-carousel__stock-slider_total">
			${this.slides.length}
			</span>`;
		});
		swiper.init();
	}

	//Наши преимущества
	if (document.querySelector('.doctors__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		var swiper = new Swiper('.doctors__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			slidesPerView: 1,
			spaceBetween: 104,
			autoHeight: true,
			speed: 500,
			init: false,

			pagination: {
				el: '.doctors-carousel-pagination',
				clickable: true,
			},

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.doctors-btn-prev',
				nextEl: '.doctors-btn-next',
			},

			// Брейкпоинты
			breakpoints: {
				320: {
					slidesPerView: 1,
					pagination: {
						el: '.doctors-carousel-pagination',
						clickable: true,
						dynamicBullets: true,
						dynamicMainBullets: 3,
					},
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
				992: {
					spaceBetween: 50,
					slidesPerView: 2,
				},
				1400: {
					slidesPerView: 3,
					spaceBetween: 74,
				},
				1600: {
					slidesPerView: 3,
					spaceBetween: 104,
				},
			},
		});
		swiper.on("slideChange afterInit init", function () {
			let currentSlide = this.activeIndex + 1;
			document.querySelector('.pagination-btn-carousel__doctors').innerHTML = `<span class="pagination-btn-carousel__doctors_current">
			${currentSlide < 10 ? + currentSlide : currentSlide}
			</span> из <span class="pagination-btn-carousel__doctors_total">
			${this.slides.length}
			</span>`;
		});
		swiper.init();
	}

	//Наши врачи
	if (document.querySelector('.advantages__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		var swiper = new Swiper('.advantages__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			slidesPerView: 3,
			spaceBetween: 81,
			autoHeight: true,
			speed: 500,
			init: false,

			pagination: {
				el: '.advantages-carousel-pagination',
				clickable: true,
			},

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.advantages-btn-prev',
				nextEl: '.advantages-btn-next',
			},

			// Брейкпоинты
			breakpoints: {
				320: {
					slidesPerView: 1,
					pagination: {
						el: '.advantages-carousel-pagination',
						clickable: true,
						dynamicBullets: true,
						dynamicMainBullets: 3,
					},
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
				860: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
				992: {
					spaceBetween: 30,
					slidesPerView: 2,
				},
				1400: {
					spaceBetween: 30,
				},
				1600: {
					spaceBetween: 81,
				},
			},
		});
		swiper.on("slideChange afterInit init", function () {
			let currentSlide = this.activeIndex + 1;
			document.querySelector('.pagination-btn-carousel__advantages').innerHTML = `<span class="pagination-btn-carousel__advantages_current">
			${currentSlide < 10 ? + currentSlide : currentSlide}
			</span> из <span class="pagination-btn-carousel__advantages_total">
			${this.slides.length}
			</span>`;
		});
		swiper.init();
	}

	//Отзывы пациентов
	if (document.querySelector('.reviews__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		var swiper = new Swiper('.reviews__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			slidesPerView: 2,
			spaceBetween: 60,
			autoHeight: true,
			speed: 500,
			init: false,

			pagination: {
				el: '.reviews-carousel-pagination',
				clickable: true,
			},

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.reviews-btn-prev',
				nextEl: '.reviews-btn-next',
			},

			// Брейкпоинты
			breakpoints: {
				320: {
					slidesPerView: 1,
					pagination: {
						el: '.reviews-carousel-pagination',
						clickable: true,
						dynamicBullets: true,
						dynamicMainBullets: 3,
					},
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
				// 860: {
				// 	slidesPerView: 2,
				// 	spaceBetween: 30,
				// },
				992: {
					spaceBetween: 30,
					slidesPerView: 2,
				},
				1400: {
					spaceBetween: 30,
				},
				1600: {
					spaceBetween: 60,
				},
			},
		});
		swiper.on("slideChange afterInit init", function () {
			let currentSlide = this.activeIndex + 1;
			document.querySelector('.pagination-btn-carousel__reviews').innerHTML = `<span class="pagination-btn-carousel__reviews_current">
			${currentSlide < 10 ? + currentSlide : currentSlide}
			</span> из <span class="pagination-btn-carousel__reviews_total">
			${this.slides.length}
			</span>`;
		});
		swiper.init();
	}

	//Для кого мы работаем
	//slide 1
	if (document.querySelector('.tab-slider-one')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		var swiper = new Swiper('.tab-slider-one', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			slidesPerView: 1,
			spaceBetween: 60,
			autoHeight: true,
			speed: 500,
			init: false,

			pagination: {
				el: '.tabs-carousel-pagination-one',
				clickable: true,
			},

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.tabs-one-btn-prev',
				nextEl: '.tabs-one-btn-next',
			},

			// Брейкпоинты
			breakpoints: {
				320: {
					pagination: {
						el: '.tabs-carousel-pagination-one',
						clickable: true,
						dynamicBullets: true,
						dynamicMainBullets: 3,
					},
				},
				768: {
					spaceBetween: 30,
				},
				// 860: {
				// 	slidesPerView: 2,
				// 	spaceBetween: 30,
				// },
				992: {
					spaceBetween: 30,
				},
				1400: {
					spaceBetween: 30,
				},
				1600: {
					spaceBetween: 60,
				},
			},
		});
		swiper.on("slideChange afterInit init", function () {
			let currentSlide = this.activeIndex + 1;
			document.querySelector('.pagination-btn-carousel__tabs-one').innerHTML = `<span class="pagination-btn-carousel__tabs-one_current">
			${currentSlide < 10 ? + currentSlide : currentSlide}
			</span> из <span class="pagination-btn-carousel__tabs-one_total">
			${this.slides.length}
			</span>`;
		});
		swiper.init();
	}
	//Для кого мы работаем
	//slide 2
	if (document.querySelector('.tab-slider-two')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		var swiper = new Swiper('.tab-slider-two', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			slidesPerView: 1,
			spaceBetween: 60,
			autoHeight: true,
			speed: 500,
			init: false,

			pagination: {
				el: '.tabs-two-carousel-pagination',
				clickable: true,
			},

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.tabs-two-btn-prev',
				nextEl: '.tabs-two-btn-next',
			},

			// Брейкпоинты
			breakpoints: {
				320: {
					pagination: {
						el: '.tabs-two-carousel-pagination',
						clickable: true,
						dynamicBullets: true,
						dynamicMainBullets: 3,
					},
				},
				768: {
					spaceBetween: 30,
				},
				// 860: {
				// 	slidesPerView: 2,
				// 	spaceBetween: 30,
				// },
				992: {
					spaceBetween: 30,
				},
				1400: {
					spaceBetween: 30,
				},
				1600: {
					spaceBetween: 60,
				},
			},
		});
		swiper.on("slideChange afterInit init", function () {
			let currentSlide = this.activeIndex + 1;
			document.querySelector('.pagination-btn-carousel__tabs-two').innerHTML = `<span class="pagination-btn-carousel__tabs-two_current">
			${currentSlide < 10 ? + currentSlide : currentSlide}
			</span> из <span class="pagination-btn-carousel__tabs-two_total">
			${this.slides.length}
			</span>`;
		});
		swiper.init();
	}
	//Для кого мы работаем
	//slide 3
	if (document.querySelector('.tab-slider-three')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		var swiper = new Swiper('.tab-slider-three', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			slidesPerView: 1,
			spaceBetween: 60,
			autoHeight: true,
			speed: 500,
			init: false,

			pagination: {
				el: '.tabs-three-carousel-pagination',
				clickable: true,
			},

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.tabs-three-btn-prev',
				nextEl: '.tabs-three-btn-next',
			},

			// Брейкпоинты
			breakpoints: {
				320: {
					pagination: {
						el: '.tabs-three-carousel-pagination',
						clickable: true,
						dynamicBullets: true,
						dynamicMainBullets: 3,
					},
				},
				768: {
					spaceBetween: 30,
				},
				// 860: {
				// 	slidesPerView: 2,
				// 	spaceBetween: 30,
				// },
				992: {
					spaceBetween: 30,
				},
				1400: {
					spaceBetween: 30,
				},
				1600: {
					spaceBetween: 60,
				},
			},
		});
		swiper.on("slideChange afterInit init", function () {
			let currentSlide = this.activeIndex + 1;
			document.querySelector('.pagination-btn-carousel__tabs-three').innerHTML = `<span class="pagination-btn-carousel__tabs-three_current">
			${currentSlide < 10 ? + currentSlide : currentSlide}
			</span> из <span class="pagination-btn-carousel__tabs-three_total">
			${this.slides.length}
			</span>`;
		});
		swiper.init();
	}
	//Для кого мы работаем
	//slide 4
	if (document.querySelector('.tab-slider-four')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		var swiper = new Swiper('.tab-slider-four', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			slidesPerView: 1,
			spaceBetween: 60,
			autoHeight: true,
			speed: 500,
			init: false,

			pagination: {
				el: '.tabs-four-carousel-pagination',
				clickable: true,
			},

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.tabs-four-btn-prev',
				nextEl: '.tabs-four-btn-next',
			},

			// Брейкпоинты
			breakpoints: {
				320: {
					pagination: {
						el: '.tabs-four-carousel-pagination',
						clickable: true,
						dynamicBullets: true,
						dynamicMainBullets: 3,
					},
				},
				768: {
					spaceBetween: 30,
				},
				// 860: {
				// 	slidesPerView: 2,
				// 	spaceBetween: 30,
				// },
				992: {
					spaceBetween: 30,
				},
				1400: {
					spaceBetween: 30,
				},
				1600: {
					spaceBetween: 60,
				},
			},
		});
		swiper.on("slideChange afterInit init", function () {
			let currentSlide = this.activeIndex + 1;
			document.querySelector('.pagination-btn-carousel__tabs-four').innerHTML = `<span class="pagination-btn-carousel__tabs-four_current">
			${currentSlide < 10 ? + currentSlide : currentSlide}
			</span> из <span class="pagination-btn-carousel__tabs-four_total">
			${this.slides.length}
			</span>`;
		});
		swiper.init();
	}
	//сертификаты
	if (document.querySelector('.certificates__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.certificates__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			slidesPerView: 5,
			spaceBetween: 12,
			autoHeight: true,
			speed: 300,

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.certificates__button-prev',
				nextEl: '.certificates__button-next',
			},

			// Брейкпоинты
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 3,
				},
				992: {
					slidesPerView: 4,
				},
				1300: {
					slidesPerView: 5,
				},
			},
		});
	}

	//галерея мобилка
	if (document.querySelector('.photo-clinic__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.photo-clinic__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			slidesPerView: 1,
			spaceBetween: 30,
			// autoHeight: true,
			speed: 300,

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.photo-clinic__button-prev',
				nextEl: '.photo-clinic__button-next',
			},
		});
	}

	//Квиз
	if (document.querySelector('.quiz__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.quiz__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			slidesPerView: 1,
			spaceBetween: 700,
			allowTouchMove: false,
			speed: 300,

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.prev-quiz',
				nextEl: '.next-quiz',
			},

			// Брейкпоинты
			breakpoints: {
				100: {
					autoHeight: true,
					slidesPerView: 1,
				},
				768: {
					autoHeight: true,
					slidesPerView: 1,
				},
				992: {
					autoHeight: false,
					slidesPerView: 1,
				},
				1300: {
					slidesPerView: 1,
				},
			},
		});
	}

	// Почему стоит довериться нам?
	if (document.querySelector('.trust__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.trust__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			slidesPerView: 3,
			spaceBetween: 81,
			speed: 300,
			// autoHeight: true,
			pagination: {
				el: '.trust-carousel-pagination',
				clickable: true,
			},

			// Брейкпоинты
			breakpoints: {
				100: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
				992: {
					slidesPerView: 2,
					spaceBetween: 40,
				},
				1200: {
					slidesPerView: 3,
					spaceBetween: 40,
				},
				1600: {
					spaceBetween: 81,
				},
			},
		});
	}
	// Почему стоит довериться нам?-end

	// Наши работы до/после
	if (document.querySelector('.before-after__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		var swiper = new Swiper('.before-after__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			slidesPerView: 2,
			spaceBetween: 41,
			autoHeight: true,
			speed: 500,
			init: false,
			allowTouchMove: false,
			pagination: {
				el: '.before-after-carousel-pagination',
				clickable: true,
			},

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.before-after-btn-prev',
				nextEl: '.before-after-btn-next',
			},

			// Брейкпоинты
			breakpoints: {
				320: {
					slidesPerView: 1,
					pagination: {
						el: '.before-after-carousel-pagination',
						clickable: true,
						dynamicBullets: true,
						dynamicMainBullets: 3,
					},
				},
				768: {
					slidesPerView: 1,
					spaceBetween: 30,
				},
				992: {
					spaceBetween: 41,
					slidesPerView: 2,
				},
				1600: {
					slidesPerView: 2,
					spaceBetween: 41,
				},
			},
		});
		swiper.on("slideChange afterInit init", function () {
			let currentSlide = this.activeIndex + 1;
			document.querySelector('.pagination-btn-carousel__before-after').innerHTML = `<span class="pagination-btn-carousel__doctors_current">
			${currentSlide < 10 ? + currentSlide : currentSlide}
			</span> из <span class="pagination-btn-carousel__before-after_total">
			${this.slides.length}
			</span>`;
		});
		swiper.init();
	}
	// Наши работы до/после-end
	
	// Наше оборудование
	if (document.querySelector('.equipment-stomatology__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.equipment-stomatology__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			slidesPerView: 1,
			spaceBetween: 700,
			speed: 300,

			pagination: {
				el: '.equipment-stomatology-pagination',
				clickable: true,
			},
			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.equipment-stomatology__btn-prev',
				nextEl: '.equipment-stomatology__btn-next',
			},

			// Брейкпоинты
			breakpoints: {
				100: {
					autoHeight: true,
					slidesPerView: 1,
				},
				768: {
					autoHeight: true,
					slidesPerView: 1,
				},
				992: {
					autoHeight: false,
					slidesPerView: 1,
				},
				1300: {
					slidesPerView: 1,
				},
			},
		});
	}
	// Наше оборудование-end
	// Ортодонтия акции слайдер акции
	if (document.querySelector('.stocks-stomatology__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.stocks-stomatology__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			slidesPerView: 1,
			spaceBetween: 700,
			speed: 300,

			pagination: {
				el: '.stocks-stomatology-pagination',
				clickable: true,
			},
			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.stocks-stomatology__btn-prev',
				nextEl: '.stocks-stomatology__btn-next',
			},

			// Брейкпоинты
			breakpoints: {
				100: {
					autoHeight: true,
					slidesPerView: 1,
				},
				768: {
					autoHeight: true,
					slidesPerView: 1,
				},
				992: {
					autoHeight: false,
					slidesPerView: 1,
				},
				1300: {
					slidesPerView: 1,
				},
			},
		});
	}
	// Ортодонтия акции слайдер акции-end
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});


//video
document.querySelectorAll('.stories__video, .patient-stories__video').forEach((el) => (
	el.addEventListener('click', () => {
		let wrapperVideo = el.firstElementChild;
		let btnStop = el.lastElementChild;

		if (btnStop) {
			btnStop.classList.add('stories__play-video_active');
		}
		if (wrapperVideo) {
			wrapperVideo.controls = "controls";
		}
	})
));

//пауза при нажатии на другое видео
var videoPlaying = null;
const onPlay = function () {
	if (videoPlaying && videoPlaying != this) {
		videoPlaying.pause()
	}
	videoPlaying = this
}

const videos = document.getElementsByClassName("stories__video-stories")
for (let i = 0; i < videos.length; i++) {
	videos[i].addEventListener("play", onPlay)
}

const videosPatient = document.getElementsByClassName("patient-stories__video-stories")
for (let i = 0; i < videosPatient.length; i++) {
	videosPatient[i].addEventListener("play", onPlay)
}

//popup
const popups = document.querySelectorAll('.popup');
const popupButton = document.querySelectorAll('.popup-video-button, .button-r, .popup-button, .footer__link-contact, .footer__link-contact');
const body = document.body;
//Скачок у попапа
const popupWrapper = document.querySelectorAll('.popup-video__wrapper, .popup-application__wrapper, .popup-img__wrapper');
//убрать скрол для фикс-блока
const fixBlock = document.querySelectorAll('.fix-block');//класс для фиксблоков
// убрать скрол
let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
let marginOffset = document.body.offsetWidth - window.innerWidth + 'px';

function openPopup(elem) {
	elem.classList.add('popup-open');
	body.classList.add('lock');
	// убрать скрол
	document.body.style.paddingRight = paddingOffset;
	//убрать скрол для фикс-блока
	fixBlock.forEach((el) => {
		el.style.paddingRight = paddingOffset;
	})
	//Скачок у попапа
	popupWrapper.forEach((el) => {
		el.style.marginLeft = marginOffset;
	})
}
//закрытие
function closePopup(e) {
	if (e.target.classList.contains('popup-video__close') || e.target.closest('.popup-video__close') || e.target.classList.contains('popup-video__wrapper')) {
		e.target.closest('.popup-video').classList.remove('popup-open');
		body.classList.remove('lock');
		// Вернуть скрол
		document.body.style.paddingRight = '0px';
		//убрать скрол для фикс-блока
		fixBlock.forEach((el) => {
			el.style.paddingRight = '0px';
		});
		//Скачок у попапа
		popupWrapper.forEach((el) => {
			el.style.marginLeft = 'auto';
		})
	}
	if (e.target.classList.contains('popup-application__close') || e.target.closest('.popup-application__close') || e.target.classList.contains('popup-application__wrapper')) {
		e.target.closest('.popup').classList.remove('popup-open');
		body.classList.remove('lock');
		// Вернуть скрол
		document.body.style.paddingRight = '0px';
		//убрать скрол для фикс-блока
		fixBlock.forEach((el) => {
			el.style.paddingRight = '0px';
		});
		//Скачок у попапа
		popupWrapper.forEach((el) => {
			el.style.marginLeft = 'auto';
		})
	}
}
//открытие попапа
popupButton.forEach(btn => {
	btn.addEventListener('click', (e) => {
		let data = e.target.dataset.popupOpen;

		popups.forEach(popup => {
			if (popup.dataset.popup == data || popup.dataset.popup == e.target.closest('.popup-video-button, .button-r, .popup-button, .footer__link-contact, .footer__link-contact').dataset.popupOpen) {
				openPopup(popup);
			}
		})
	})
})

popups.forEach(popup => {
	popup.addEventListener('click', e => closePopup(e))
})
//popup

//tabs для кого мы работаем
document.querySelectorAll('.tabs-we-work__tab').forEach((item) => {
	item.addEventListener('click', function (e) {
		e.preventDefault();
		const id = e.target.getAttribute('href').replace('/', '');


		document.querySelectorAll('.tabs-we-work__tab').forEach(
			(child) => child.classList.remove('tabs-we-work__tab-active')
		);
		document.querySelectorAll('.tabs-we-work__body').forEach(
			(child) => child.classList.remove('tabs-we-work__body-active')
		);

		item.classList.add('tabs-we-work__tab-active');
		document.getElementById(id).classList.add('tabs-we-work__body-active');

	});
});
//tabs для кого мы работаем - end

//celect
document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {

	const doropDownBtn = dropDownWrapper.querySelector('.dropdown__title');
	const doropDownList = dropDownWrapper.querySelector('.dropdown__list');
	const doropDownListItem = doropDownList.querySelectorAll('.dropdown__list-item');

	//Клик по кнопке. Открыть закрыть список
	doropDownBtn.addEventListener('click', function () {
		doropDownList.classList.toggle('dropdown__list-active');
		this.classList.toggle('dropdown__title-active');
	});

	//Выбор элемента списка. Запомнить выбранное значение. Закрыть список
	doropDownListItem.forEach(function (listItem) {
		listItem.addEventListener('click', function (e) {
			e.stopPropagation();
			doropDownBtn.innerText = this.innerText;
			doropDownBtn.focus();
			doropDownList.classList.remove('dropdown__list-active');
			doropDownBtn.classList.remove('dropdown__title-active');
		})
	})

	//Клик снаружи закрыть
	document.addEventListener('click', function (e) {
		if (e.target !== doropDownBtn) {
			doropDownBtn.classList.remove('dropdown__title-active');
			doropDownList.classList.remove('dropdown__list-active');
		}
	})

	//нажатие на Tab or Escape. Закрыть список
	document.addEventListener('keydown', function (e) {
		if (e.key === 'Tab' || e.key === 'Escape') {
			doropDownBtn.classList.remove('dropdown__title-active');
			doropDownList.classList.remove('dropdown__list-active');
		}
	})
});
//celect

//аккордеон
document.querySelectorAll('.accordion__title-btn').forEach((el) => (
	el.addEventListener('click', () => {
		let questions__answer = el.nextElementSibling;
		if (questions__answer.style.maxHeight) {
			document.querySelectorAll(".accordion__body").forEach((el) => el.style.maxHeight = null)
		} else {
			document.querySelectorAll(".accordion__body").forEach((el) => el.style.maxHeight = null)
			questions__answer.style.maxHeight = questions__answer.scrollHeight + 'px'
		}
	})
));

//закрыть по нажатию на ответ
document.querySelectorAll('.accordion__body').forEach((el) => (
	el.addEventListener('click', () => {
		let questions__answe = el.previousElementSibling;
		if (questions__answe.style.maxHeight) {
			document.querySelectorAll(".accordion__body").forEach((el) => el.style.maxHeight = null)
		} else {
			document.querySelectorAll(".accordion__body").forEach((el) => el.style.maxHeight = null)
			questions__answe.style.maxHeight = questions__answe.scrollHeight + 'px'
		}
	})
));
//закрыть по нажатию на вопрос
document.querySelectorAll('.accordion__title-btn, .accordion__body').forEach((item) =>
	item.addEventListener('click', () => {
		const parent = item.parentNode;
		if (parent.classList.contains('accordion__item-active')) {
			parent.classList.remove('accordion__item-active');
		} else {
			document.querySelectorAll('.accordion__item')
				.forEach((child) => child.classList.remove('accordion__item-active'))

			parent.classList.add('accordion__item-active');
		}
	})
);
//аккордеон

//accordion-stomatology
document.querySelectorAll('.accordion-stomatology__title-btn').forEach((el) => (
	el.addEventListener('click', () => {
		let questions__answer = el.nextElementSibling;
		if (questions__answer.style.maxHeight) {
			document.querySelectorAll(".accordion-stomatology__body").forEach((el) => el.style.maxHeight = null)
		} else {
			document.querySelectorAll(".accordion-stomatology__body").forEach((el) => el.style.maxHeight = null)
			questions__answer.style.maxHeight = questions__answer.scrollHeight + 'px'
		}
	})
));

//закрыть по нажатию на ответ
document.querySelectorAll('.accordion-stomatology__body').forEach((el) => (
	el.addEventListener('click', () => {
		let questions__answe = el.previousElementSibling;
		if (questions__answe.style.maxHeight) {
			document.querySelectorAll(".accordion-stomatology__body").forEach((el) => el.style.maxHeight = null)
		} else {
			document.querySelectorAll(".accordion-stomatology__body").forEach((el) => el.style.maxHeight = null)
			questions__answe.style.maxHeight = questions__answe.scrollHeight + 'px'
		}
	})
));
//закрыть по нажатию на вопрос
document.querySelectorAll('.accordion-stomatology__title-btn, .accordion-stomatology__body').forEach((item) =>
	item.addEventListener('click', () => {
		const parent = item.parentNode;
		if (parent.classList.contains('accordion-stomatology__item-active')) {
			parent.classList.remove('accordion-stomatology__item-active');
		} else {
			document.querySelectorAll('.accordion-stomatology__item')
				.forEach((child) => child.classList.remove('accordion-stomatology__item-active'))

			parent.classList.add('accordion-stomatology__item-active');
		}
	})
);
//accordion-stomatology - end

//галерея
window.addEventListener('load', function () {
	baguetteBox.run('.certificates__wrapper, .photo-clinic__rows, .photo-clinic__wrapper', {

	});

});
//галерея

//Вакансии подробнее
document.querySelectorAll('.specialists-job__button-more').forEach((item) =>
	item.addEventListener('click', () => {
		const nextMore = item.nextElementSibling;
		if (nextMore.classList.contains('specialists-job__info-active')) {
			nextMore.classList.remove('specialists-job__info-active');
		} else {
			nextMore.classList.add('specialists-job__info-active');
		}
	})
);

//Кнопка Подробнее
const btnMore = document.querySelectorAll('.specialists-job__button-more');
for (let i = 0; i < btnMore.length; i++) {

	btnMore[i].addEventListener('click', function () {
		this.innerHTML =
			(this.innerHTML === 'Подробнее') ? this.innerHTML = 'Свернуть' : this.innerHTML = 'Подробнее';
	})
}
//Вакансии подробнее