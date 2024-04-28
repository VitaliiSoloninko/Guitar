'use script'

// Slider Swiper

const reviewsSwiper = document.querySelector('.swiper-reviews')

if (reviewsSwiper) {
	const swiper = new Swiper('.swiper-reviews', {
		// Optional parameters
		autoHeight: true,
		loop: true,
		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	})
}

// Navigation by ID - anchors in HTML in Header a href="#home" in Section id="home"

const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
	anchor.addEventListener('click', function (event) {
		event.preventDefault() // відмінили стандарте повеение кнопки, зараз вона не працює
		const blockID = anchor.getAttribute('href')
		document.querySelector('' + blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		})
	})
}
