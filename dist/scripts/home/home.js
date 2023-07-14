// ======== INITIALIZATION GSAP VARIABLES ========
const mm = gsap.matchMedia()
const headerTimeline = gsap.timeline({ repeat: -1 })
const tl = gsap.timeline({ paused: true })
const tlQrCode = gsap.timeline({ paused: true })
const chatTimeline = gsap.timeline({
	scrollTrigger: {
		trigger: '.chat',
		pin: true,
		start: 'top center',
		end: '+=' + (document.body.clientHeight - window.innerHeight),
		scrub: 1.1,
	},
})

// ======== INITIALIZATION VARIABLES ========
const centerXPosition =
	(-document.documentElement.clientWidth +
		document.querySelector('.chat').clientWidth) /
	2
const leftXPosition =
	-document.documentElement.clientWidth +
	document.querySelector('.chat').clientWidth
const rightXPosition = 0
const topYPosition = -(
	document.documentElement.clientHeight / 2 -
	document.querySelector('.navbar').clientHeight
)
const bottomYPosition =
	document.documentElement.clientHeight / 2 -
	document.querySelector('.chat').clientHeight
const centerYPosition = -document.querySelector('.chat').clientHeight / 2

// ======== INITIALIZATION THEATER JS ========
var theater = theaterJS()
theater
	.on('type:start, erase:start', function () {
		theater.getCurrentActor().$element.classList.add('actor__content--typing')
	})
	.on('type:end, erase:end', function () {
		theater
			.getCurrentActor()
			.$element.classList.remove('actor__content--typing')
	})
	.on('type:start, erase:start', function () {
		if (theater.getCurrentActor().name === 'vader') {
			document.body.classList.add('dark')
		} else {
			document.body.classList.remove('dark')
		}
	})

theater
	.addActor('nav__logo-id', { speed: 0.8, accuracy: 0.6 })
	.addScene('nav__logo-id:c:\\i', 1000)
	.addScene('nav__logo-id:c:\\love', 400)
	.addScene('nav__logo-id:c:\\my', 400)
	.addScene('nav__logo-id:c:\\work', 1000)
	.addScene('nav__logo-id:c:\\<3', 400)
	.addScene(theater.replay.bind(theater))

// ======== ARRAY ANIMATION ========
mm.add('(min-width: 700px)', () => {
	gsap.utils.toArray('b.about__p__b').forEach(b => {
		ScrollTrigger.create({
			trigger: b,
			start: 'top center',
			onEnter: () => b.classList.add('active'),
			onLeaveBack: () => b.classList.remove('active'),
		})
	})
})

mm.add('(max-width: 700px)', () => {
	gsap.utils.toArray('b.about__p__b').forEach(b => {
		ScrollTrigger.create({
			trigger: b,
			start: 'top bottom',
			onEnter: () => b.classList.add('active'),
			onLeaveBack: () => b.classList.remove('active'),
		})
	})
})

gsap.utils.toArray('b.quality__b').forEach(b => {
	ScrollTrigger.create({
		trigger: b,
		start: 'top 55%',
		onEnter: () => b.classList.add('active'),
		onLeaveBack: () => b.classList.remove('active'),
	})
})

// ======== SQUARE ANIMATION ========
const gsapSq = gsap.utils.toArray('.h2__title__container__square')
gsapSq.forEach(gSq => {
	const rotate = gsap.from(gSq, 3, { rotation: 720 })
	ScrollTrigger.create({
		trigger: gSq,
		animation: rotate,
		start: 'top bottom',
		scrub: 1.9,
	})
})

// ======== NAVBAR ANIMATIONS ========
const navbarButtonChanger = document.getElementById(
	'nav__box-lines__link_button'
)
const navBoxTags = document.querySelector('#nav__box-lines-1')
const navBoxLinks = document.querySelector('#nav__box-lines-2')

navbarButtonChanger.addEventListener('click', () => {
	navBoxTags.classList.toggle('display-none')
	navBoxLinks.classList.toggle('display-none')
})

const animateOpenNav = () => {
	tl.to('.nav__container', 0.2, {
		autoAlpha: 1,
		delay: 0.1,
	})

	tl.to(
		'.navbar__site-logo',
		0.2,
		{
			color: '#fff',
		},
		'-=0'
	)

	tl.to('.marquee', 0.2, {
		opacity: 0,
	})
}

const openNav = () => {
	animateOpenNav()
	const navBtn = document.getElementById('navbar__menu-toggle__btn')
	navBtn.onclick = function (e) {
		navBtn.classList.toggle('active')
		tl.reversed(!tl.reversed())
	}
}

openNav()

gsap.to('.navbar', {
	scrollTrigger: {
		trigger: '.navbar',
		start: 'top top',
		end: 'center top',
		onLeave: () =>
			document.querySelector('.navbar').classList.add('navbar__active'),
		onEnterBack: () =>
			document.querySelector('.navbar').classList.remove('navbar__active'),
	},
})

// ======== QRCODE ANIMATION ========
const animateOpenQRCODE = () => {
	tlQrCode.to('.qr-code__container', 0.1, {
		autoAlpha: 1,
		delay: 0.1,
	})

	tlQrCode.to('.navbar', 0.1, {
		visibility: 'hidden',
		delay: 0.1,
	})

	tlQrCode.to('.marquee', 0.1, {
		opacity: 0,
	})
}

const openQRCODE = () => {
	animateOpenQRCODE()
	const qrCodeBtn = document.getElementsByClassName('qr-code-btn-class')
	for (let i = 0; i < qrCodeBtn.length; i++) {
		qrCodeBtn[i].onclick = function (e) {
			qrCodeBtn[i].classList.toggle('active')
			tlQrCode.reversed(!tlQrCode.reversed())
		}
	}
}

openQRCODE()

tlQrCode.from('.col > div', {
	opacity: 0,
	y: 10,
	stagger: {
		amount: 0.04,
	},
})

tlQrCode
	.from(
		'.close-qr-code__container',
		{
			opacity: 0,
			y: 10,
			stagger: {
				amount: 0.04,
			},
		},
		'-=0.4'
	)
	.reverse()

// ======== NAV CONTAINER ANIMATION ========
tl.to('.flex > div', {
	opacity: 1,
	stagger: {
		amount: 0.1,
	},
})

tl.to(
	'.nav__box-lines__link, .nav__box-lines__link > a, .nav__box-lines',
	0.2,
	{
		opacity: 1,
		ease: 'power2.out',
		stagger: {
			amount: 0.1,
		},
	}
)

tl.from('.nav__footer', 0.2, {
	opacity: 0,
}).reverse()

headerTimeline
	.to('#social-links__wrapper__1', 1, {
		onStart: () =>
			document
				.querySelector('#social-links__wrapper__1 .social-links__img')
				.classList.add('social-links__img__active'),
		onComplete: () =>
			document
				.querySelector('#social-links__wrapper__1 .social-links__img')
				.classList.remove('social-links__img__active'),
	})
	.to('#social-links__wrapper__2', 1, {
		onStart: () =>
			document
				.querySelector('#social-links__wrapper__2 .social-links__img')
				.classList.add('social-links__img__active'),
		onComplete: () =>
			document
				.querySelector('#social-links__wrapper__2 .social-links__img')
				.classList.remove('social-links__img__active'),
	})
	.to('#social-links__wrapper__3', 1, {
		onStart: () =>
			document
				.querySelector('#social-links__wrapper__3 .social-links__img')
				.classList.add('social-links__img__active'),
		onComplete: () =>
			document
				.querySelector('#social-links__wrapper__3 .social-links__img')
				.classList.remove('social-links__img__active'),
	})

// ======== BODY ANIMATION ========
function bodyColor() {
	gsap.to('.container', {
		scrollTrigger: {
			trigger: '#about',
			start: 'top center',
			end: 'bottom center',
			onEnter: () => {
				document
					.querySelector('.container')
					.classList.add('black-container__active')
				document.querySelector('.navbar__site-logo').classList.add('white-text')
				document
					.querySelector('span.navbar__menu-toggle__btn__class')
					.classList.add('white-bg-after')
				document
					.querySelector(
						'.about #about__wrapper__1 .h2__title__hover-container p'
					)
					.classList.add('white-text')
				document
					.querySelector('.about #about__wrapper__1 .h2__title .stroke')
					.classList.add('white-stroke')
				document
					.querySelector(
						'.about #about__wrapper__1 .h2__title__container__square'
					)
					.classList.add('white-square')
				document
					.querySelector(
						'.about #about__wrapper__1 .h2__title__hover-container img'
					)
					.classList.add('about__filter')
				document
					.querySelectorAll('.about #about__wrapper__1 .about__p .about__p__b')
					.forEach(i => i.classList.add('gradient-about__bg'))
				document
					.querySelector(
						'.about #about__wrapper__2 .h2__title__hover-container-left p'
					)
					.classList.add('white-text')
				document
					.querySelector('.about #about__wrapper__2 .h2__title .stroke')
					.classList.add('white-stroke')
				document
					.querySelector(
						'.about #about__wrapper__2 .h2__title__container__square'
					)
					.classList.add('white-square')
				document
					.querySelector(
						'.about #about__wrapper__2 .h2__title__hover-container-left img'
					)
					.classList.add('about__filter')
				document
					.querySelectorAll(
						'.about #about__wrapper__2 .about__txt-left .about__p .about__p__b'
					)
					.forEach(i => i.classList.add('gradient-about__bg-second'))
			},
			onLeave: () => {
				document
					.querySelector('.container')
					.classList.remove('black-container__active')
				document
					.querySelector('.navbar__site-logo')
					.classList.remove('white-text')
				document
					.querySelector('span.navbar__menu-toggle__btn__class')
					.classList.remove('white-bg-after')
				document
					.querySelector(
						'.about #about__wrapper__1 .h2__title__hover-container p'
					)
					.classList.remove('white-text')
				document
					.querySelector('.about #about__wrapper__1 .h2__title .stroke')
					.classList.remove('white-stroke')
				document
					.querySelector(
						'.about #about__wrapper__1 .h2__title__container__square'
					)
					.classList.remove('white-square')
				document
					.querySelector(
						'.about #about__wrapper__1 .h2__title__hover-container img'
					)
					.classList.remove('about__filter')
				document
					.querySelectorAll('.about #about__wrapper__1 .about__p .about__p__b')
					.forEach(i => i.classList.remove('gradient-about__bg'))
				document
					.querySelector(
						'.about #about__wrapper__2 .h2__title__hover-container-left p'
					)
					.classList.remove('white-text')
				document
					.querySelector('.about #about__wrapper__2 .h2__title .stroke')
					.classList.remove('white-stroke')
				document
					.querySelector(
						'.about #about__wrapper__2 .h2__title__container__square'
					)
					.classList.remove('white-square')
				document
					.querySelector(
						'.about #about__wrapper__2 .h2__title__hover-container-left img'
					)
					.classList.remove('about__filter')
				document
					.querySelectorAll(
						'.about #about__wrapper__2 .about__txt-left .about__p .about__p__b'
					)
					.forEach(i => i.classList.remove('gradient-about__bg-second'))
			},
			onLeaveBack: () => {
				document
					.querySelector('.container')
					.classList.remove('black-container__active')
				document
					.querySelector('.navbar__site-logo')
					.classList.remove('white-text')
				document
					.querySelector('span.navbar__menu-toggle__btn__class')
					.classList.remove('white-bg-after')
				document
					.querySelector(
						'.about #about__wrapper__1 .h2__title__hover-container p'
					)
					.classList.remove('white-text')
				document
					.querySelector('.about #about__wrapper__1 .h2__title .stroke')
					.classList.remove('white-stroke')
				document
					.querySelector(
						'.about #about__wrapper__1 .h2__title__container__square'
					)
					.classList.remove('white-square')
				document
					.querySelector(
						'.about #about__wrapper__1 .h2__title__hover-container img'
					)
					.classList.remove('about__filter')
				document
					.querySelectorAll('.about #about__wrapper__1 .about__p .about__p__b')
					.forEach(i => i.classList.remove('gradient-about__bg'))
				document
					.querySelector(
						'.about #about__wrapper__2 .h2__title__hover-container-left p'
					)
					.classList.remove('white-text')
				document
					.querySelector('.about #about__wrapper__2 .h2__title .stroke')
					.classList.remove('white-stroke')
				document
					.querySelector(
						'.about #about__wrapper__2 .h2__title__container__square'
					)
					.classList.remove('white-square')
				document
					.querySelector(
						'.about #about__wrapper__2 .h2__title__hover-container-left img'
					)
					.classList.remove('about__filter')
				document
					.querySelectorAll(
						'.about #about__wrapper__2 .about__txt-left .about__p .about__p__b'
					)
					.forEach(i => i.classList.remove('gradient-about__bg-second'))
			},
			onEnterBack: () => {
				document
					.querySelector('.container')
					.classList.add('black-container__active')
				document.querySelector('.navbar__site-logo').classList.add('white-text')
				document
					.querySelector('span.navbar__menu-toggle__btn__class')
					.classList.add('white-bg-after')
				document
					.querySelector(
						'.about #about__wrapper__1 .h2__title__hover-container p'
					)
					.classList.add('white-text')
				document
					.querySelector('.about #about__wrapper__1 .h2__title .stroke')
					.classList.add('white-stroke')
				document
					.querySelector(
						'.about #about__wrapper__1 .h2__title__container__square'
					)
					.classList.add('white-square')
				document
					.querySelector(
						'.about #about__wrapper__1 .h2__title__hover-container img'
					)
					.classList.add('about__filter')
				document
					.querySelectorAll('.about #about__wrapper__1 .about__p .about__p__b')
					.forEach(i => i.classList.add('gradient-about__bg'))
				document
					.querySelector(
						'.about #about__wrapper__2 .h2__title__hover-container-left p'
					)
					.classList.add('white-text')
				document
					.querySelector('.about #about__wrapper__2 .h2__title .stroke')
					.classList.add('white-stroke')
				document
					.querySelector(
						'.about #about__wrapper__2 .h2__title__container__square'
					)
					.classList.add('white-square')
				document
					.querySelector(
						'.about #about__wrapper__2 .h2__title__hover-container-left img'
					)
					.classList.add('about__filter')
				document
					.querySelectorAll(
						'.about #about__wrapper__2 .about__txt-left .about__p .about__p__b'
					)
					.forEach(i => i.classList.add('gradient-about__bg-second'))
			},
		},
	})
	gsap.to('.container', {
		scrollTrigger: {
			trigger: '#works',
			start: 'top center',
			end: 'bottom center',
			onEnter: () => {
				document
					.querySelector('.container')
					.classList.add('black-container__active')
				document.querySelector('.navbar__site-logo').classList.add('white-text')
				document
					.querySelector('span.navbar__menu-toggle__btn__class')
					.classList.add('white-bg-after')
				document
					.querySelector('.work .h2__title__container p')
					.classList.add('white-text')
				document
					.querySelector('.work .h2__title .stroke')
					.classList.add('white-stroke')
				document
					.querySelector('.work .h2__title__container__square')
					.classList.add('white-square')
			},
			onLeave: () => {
				document
					.querySelector('.container')
					.classList.remove('black-container__active')
				document
					.querySelector('.navbar__site-logo')
					.classList.remove('white-text')
				document
					.querySelector('span.navbar__menu-toggle__btn__class')
					.classList.remove('white-bg-after')
				document
					.querySelector('.work .h2__title__container p')
					.classList.remove('white-text')
				document
					.querySelector('.work .h2__title .stroke')
					.classList.remove('white-stroke')
				document
					.querySelector('.work .h2__title__container__square')
					.classList.remove('white-square')
			},
			onLeaveBack: () => {
				document
					.querySelector('.container')
					.classList.remove('black-container__active')
				document
					.querySelector('.navbar__site-logo')
					.classList.remove('white-text')
				document
					.querySelector('span.navbar__menu-toggle__btn__class')
					.classList.remove('white-bg-after')
				document
					.querySelector('.work .h2__title__container p')
					.classList.remove('white-text')
				document
					.querySelector('.work .h2__title .stroke')
					.classList.remove('white-stroke')
				document
					.querySelector('.work .h2__title__container__square')
					.classList.remove('white-square')
			},
			onEnterBack: () => {
				document
					.querySelector('.container')
					.classList.add('black-container__active')
				document.querySelector('.navbar__site-logo').classList.add('white-text')
				document
					.querySelector('span.navbar__menu-toggle__btn__class')
					.classList.add('white-bg-after')
				document
					.querySelector('.work .h2__title__container p')
					.classList.add('white-text')
				document
					.querySelector('.work .h2__title .stroke')
					.classList.add('white-stroke')
				document
					.querySelector('.work .h2__title__container__square')
					.classList.add('white-square')
			},
		},
	})
	gsap.to('.container', {
		scrollTrigger: {
			trigger: '#contact',
			start: 'top center',
			end: 'bottom center',
			onEnter: () => {
				document
					.querySelector('.container')
					.classList.add('black-container__active')
				document.querySelector('.navbar__site-logo').classList.add('white-text')
				document
					.querySelector('span.navbar__menu-toggle__btn__class')
					.classList.add('white-bg-after')
				document
					.querySelector('.contact .h2__title__container p')
					.classList.add('white-text')
				document
					.querySelector('.contact .h2__title .stroke')
					.classList.add('white-stroke')
				document
					.querySelector('.contact .h2__title__container__square')
					.classList.add('white-square')
				document
					.querySelectorAll(
						'.contact .contact__content .contact__title h1 label'
					)
					.forEach(i => i.classList.add('white-text'))
				document
					.querySelectorAll(
						'.contact .contact__content .contact__title h1 span'
					)
					.forEach(i => i.classList.add('white-stroke'))
			},
			onLeave: () => {
				document
					.querySelector('.container')
					.classList.remove('black-container__active')
				document
					.querySelector('.navbar__site-logo')
					.classList.remove('white-text')
				document
					.querySelector('span.navbar__menu-toggle__btn__class')
					.classList.remove('white-bg-after')
				document
					.querySelector('.contact .h2__title__container p')
					.classList.remove('white-text')
				document
					.querySelector('.contact .h2__title .stroke')
					.classList.remove('white-stroke')
				document
					.querySelector('.contact .h2__title__container__square')
					.classList.remove('white-square')
				document
					.querySelectorAll(
						'.contact .contact__content .contact__title h1 label'
					)
					.forEach(i => i.classList.remove('white-text'))
				document
					.querySelectorAll(
						'.contact .contact__content .contact__title h1 span'
					)
					.forEach(i => i.classList.remove('white-stroke'))
			},
			onLeaveBack: () => {
				document
					.querySelector('.container')
					.classList.remove('black-container__active')
				document
					.querySelector('.navbar__site-logo')
					.classList.remove('white-text')
				document
					.querySelector('span.navbar__menu-toggle__btn__class')
					.classList.remove('white-bg-after')
				document
					.querySelector('.contact .h2__title__container p')
					.classList.remove('white-text')
				document
					.querySelector('.contact .h2__title .stroke')
					.classList.remove('white-stroke')
				document
					.querySelector('.contact .h2__title__container__square')
					.classList.remove('white-square')
				document
					.querySelectorAll(
						'.contact .contact__content .contact__title h1 label'
					)
					.forEach(i => i.classList.remove('white-text'))
				document
					.querySelectorAll(
						'.contact .contact__content .contact__title h1 span'
					)
					.forEach(i => i.classList.remove('white-stroke'))
			},
			onEnterBack: () => {
				document
					.querySelector('.container')
					.classList.add('black-container__active')
				document.querySelector('.navbar__site-logo').classList.add('white-text')
				document
					.querySelector('span.navbar__menu-toggle__btn__class')
					.classList.add('white-bg-after')
				document
					.querySelector('.contact .h2__title__container p')
					.classList.add('white-text')
				document
					.querySelector('.contact .h2__title .stroke')
					.classList.add('white-stroke')
				document
					.querySelector('.contact .h2__title__container__square')
					.classList.add('white-square')
				document
					.querySelectorAll(
						'.contact .contact__content .contact__title h1 label'
					)
					.forEach(i => i.classList.add('white-text'))
				document
					.querySelectorAll(
						'.contact .contact__content .contact__title h1 span'
					)
					.forEach(i => i.classList.add('white-stroke'))
			},
		},
	})
}

bodyColor()

function navContainer() {
	gsap.to('.nav__container', {
		scrollTrigger: {
			trigger: '#home',
			start: 'top center',
			end: '100% center',
			onEnter: () => {
				document
					.querySelector('.nav__container')
					.classList.add('nav__container__home')
			},
			onLeave: () => {
				document
					.querySelector('.nav__container')
					.classList.remove('nav__container__home')
			},
			onLeaveBack: () => {
				document
					.querySelector('.nav__container')
					.classList.remove('nav__container__home')
			},
			onEnterBack: () => {
				document
					.querySelector('.nav__container')
					.classList.add('nav__container__home')
			},
		},
	})

	gsap.to('.nav__container', {
		scrollTrigger: {
			trigger: '#about',
			start: 'top center',
			end: '100% center',
			onEnter: () => {
				document
					.querySelector('.nav__container')
					.classList.add('nav__container__about')
			},
			onLeave: () => {
				document
					.querySelector('.nav__container')
					.classList.remove('nav__container__about')
			},
			onLeaveBack: () => {
				document
					.querySelector('.nav__container')
					.classList.remove('nav__container__about')
			},
			onEnterBack: () => {
				document
					.querySelector('.nav__container')
					.classList.add('nav__container__about')
			},
		},
	})

	gsap.to('.nav__container', {
		scrollTrigger: {
			trigger: '#quality',
			start: 'top center',
			end: '100% center',
			onEnter: () => {
				document
					.querySelector('.nav__container')
					.classList.add('nav__container__quality')
			},
			onLeave: () => {
				document
					.querySelector('.nav__container')
					.classList.remove('nav__container__quality')
			},
			onLeaveBack: () => {
				document
					.querySelector('.nav__container')
					.classList.remove('nav__container__quality')
			},
			onEnterBack: () => {
				document
					.querySelector('.nav__container')
					.classList.add('nav__container__quality')
			},
		},
	})

	gsap.to('.nav__container', {
		scrollTrigger: {
			trigger: '#works',
			start: 'top center',
			end: '100% center',
			onEnter: () => {
				document
					.querySelector('.nav__container')
					.classList.add('nav__container__works')
			},
			onLeave: () => {
				document
					.querySelector('.nav__container')
					.classList.remove('nav__container__works')
			},
			onLeaveBack: () => {
				document
					.querySelector('.nav__container')
					.classList.remove('nav__container__works')
			},
			onEnterBack: () => {
				document
					.querySelector('.nav__container')
					.classList.add('nav__container__works')
			},
		},
	})

	gsap.to('.nav__container', {
		scrollTrigger: {
			trigger: '#services',
			start: 'top center',
			end: '100% center',
			onEnter: () => {
				document
					.querySelector('.nav__container')
					.classList.add('nav__container__services')
			},
			onLeave: () => {
				document
					.querySelector('.nav__container')
					.classList.remove('nav__container__services')
			},
			onLeaveBack: () => {
				document
					.querySelector('.nav__container')
					.classList.remove('nav__container__services')
			},
			onEnterBack: () => {
				document
					.querySelector('.nav__container')
					.classList.add('nav__container__services')
			},
		},
	})

	gsap.to('.nav__container', {
		scrollTrigger: {
			trigger: '#contact',
			start: 'top center',
			end: '100% center',
			onEnter: () => {
				document
					.querySelector('.nav__container')
					.classList.add('nav__container__contact')
			},
			onLeave: () => {
				document
					.querySelector('.nav__container')
					.classList.remove('nav__container__contact')
			},
			onLeaveBack: () => {
				document
					.querySelector('.nav__container')
					.classList.remove('nav__container__contact')
			},
			onEnterBack: () => {
				document
					.querySelector('.nav__container')
					.classList.add('nav__container__contact')
			},
		},
	})

	gsap.to('.nav__container', {
		scrollTrigger: {
			trigger: '#end',
			start: 'top center',
			end: '100% center',
			onEnter: () => {
				document
					.querySelector('.nav__container')
					.classList.add('nav__container__end')
			},
			onLeave: () => {
				document
					.querySelector('.nav__container')
					.classList.remove('nav__container__end')
			},
			onLeaveBack: () => {
				document
					.querySelector('.nav__container')
					.classList.remove('nav__container__end')
			},
			onEnterBack: () => {
				document
					.querySelector('.nav__container')
					.classList.add('nav__container__end')
			},
		},
	})
}

navContainer()

// ======== ABOUT ANIMATION ========
function about() {
	mm.add('(min-width: 700px)', () => {
		gsap.from('.about__img', {
			scrollTrigger: {
				trigger: '.about',
				start: 'top bottom',
				scrub: 1.9,
			},
			yPercent: 80,
		})

		gsap.from('.about__img', {
			scrollTrigger: {
				trigger: '.about',
				start: 'top bottom',
				end: 'center center',
				scrub: 1.1,
				onLeave: () =>
					document.querySelector('.about__img').classList.add('hide-element'),
				onEnterBack: () =>
					document
						.querySelector('.about__img')
						.classList.remove('hide-element'),
			},
			opacity: 0,
		})
		gsap.from('.about__img img', {
			scrollTrigger: {
				trigger: '.about',
				start: 'top bottom',
				scrub: 1.9,
			},
			scale: 1.6,
		})

		gsap.from('.about__img-right', {
			scrollTrigger: {
				trigger: '.about',
				start: 'top bottom',
				scrub: 1.9,
			},
			yPercent: 80,
		})
		gsap.from('.about__img-right', {
			scrollTrigger: {
				trigger: '.about',
				start: '76% bottom',
				end: 'bottom center',
				scrub: 1.1,
				onLeave: () =>
					document
						.querySelector('.about__img-right')
						.classList.add('hide-element'),
				onEnterBack: () =>
					document
						.querySelector('.about__img-right')
						.classList.remove('hide-element'),
			},
			opacity: 0,
		})
		gsap.from('.about__img-right img', {
			scrollTrigger: {
				trigger: '.about',
				start: 'top bottom',
				scrub: 1.9,
			},
			scale: 1.6,
		})
		gsap.to('.h2__title__hover-container img', {
			scrollTrigger: {
				trigger: '.about__wrapper',
				start: 'top bottom',
				scrub: 1.9,
			},
			opacity: 1,
		})
		gsap.to('.about__txt', {
			scrollTrigger: {
				trigger: '.about__wrapper',
				start: 'top bottom',
				scrub: 1.9,
			},
			yPercent: 50,
		})
		gsap.to('.about__txt-left', {
			scrollTrigger: {
				trigger: '.about__txt-left',
				start: 'top bottom',
				scrub: 1.9,
			},
			yPercent: 40,
		})

		gsap.to('.about__txt', {
			scrollTrigger: {
				trigger: '.about',
				start: '20% bottom',
				end: '50% center',
				scrub: 1.1,
				onLeave: () =>
					document.querySelector('.about__txt').classList.add('hide-element'),
				onEnterBack: () =>
					document
						.querySelector('.about__txt')
						.classList.remove('hide-element'),
			},
			opacity: 1,
		})

		gsap.to('#about__wrapper__1', {
			scrollTrigger: {
				trigger: '.about',
				start: '20% center',
				end: '50% center',
				scrub: 1.1,
				onEnter: () => {
					document
						.querySelector('#about__wrapper__1')
						.classList.add('red__lines')
				},
				onLeave: () => {
					document
						.querySelector('#about__wrapper__1')
						.classList.remove('red__lines')
				},
				onLeaveBack: () => {
					document
						.querySelector('#about__wrapper__1')
						.classList.remove('red__lines')
				},
				onEnterBack: () => {
					document
						.querySelector('#about__wrapper__1')
						.classList.add('red__lines')
				},
			},
		})

		gsap.to('#about__wrapper__2', {
			scrollTrigger: {
				trigger: '.about',
				start: '60% center',
				end: '100% center',
				scrub: 1.1,
				onEnter: () => {
					document
						.querySelector('#about__wrapper__2')
						.classList.add('blue__lines')
				},
				onLeave: () => {
					document
						.querySelector('#about__wrapper__2')
						.classList.remove('blue__lines')
				},
				onLeaveBack: () => {
					document
						.querySelector('#about__wrapper__2')
						.classList.remove('blue__lines')
				},
				onEnterBack: () => {
					document
						.querySelector('#about__wrapper__2')
						.classList.add('blue__lines')
				},
			},
		})

		gsap.to('.about__txt-left', {
			scrollTrigger: {
				trigger: '.about',
				start: '76% bottom',
				end: 'bottom center',
				scrub: 1.1,
				onLeave: () =>
					document
						.querySelector('.about__txt-left')
						.classList.add('hide-element'),
				onEnterBack: () =>
					document
						.querySelector('.about__txt-left')
						.classList.remove('hide-element'),
			},
			opacity: 1,
		})

		gsap.to('.h2__title__hover-container-left img', {
			scrollTrigger: {
				trigger: '.about__txt-left',
				start: 'top bottom',
				scrub: 1.9,
			},
			opacity: 1,
		})
	})

	// ======== MEDIA ABOUR SECTION ========
	mm.add('(max-width: 700px)', () => {
		gsap.from('.about__img', {
			scrollTrigger: {
				trigger: '#about__wrapper__1',
				start: 'top bottom',
				end: '70% center',
				scrub: 1.9,
			},
			yPercent: -100,
		})

		gsap.from('.about__img', {
			scrollTrigger: {
				trigger: '#about__wrapper__1',
				start: 'top bottom',
				end: '70% center',
				scrub: 1.1,
				onLeave: () =>
					document.querySelector('.about__img').classList.add('hide-element'),
				onEnterBack: () =>
					document
						.querySelector('.about__img')
						.classList.remove('hide-element'),
			},
			opacity: 0,
		})
		gsap.from('.about__img img', {
			scrollTrigger: {
				trigger: '#about__wrapper__1',
				start: 'top bottom',
				end: '70% center',
				scrub: 1.9,
			},
			scale: 1.6,
		})

		gsap.from('.about__img-right', {
			scrollTrigger: {
				trigger: '#about__wrapper__2',
				start: 'top bottom',
				end: '70% center',
				scrub: 1.9,
			},
			yPercent: -100,
		})
		gsap.from('.about__img-right', {
			scrollTrigger: {
				trigger: '#about__wrapper__2',
				start: 'top bottom',
				end: '70% center',
				scrub: 1.1,
				onLeave: () =>
					document
						.querySelector('.about__img-right')
						.classList.add('hide-element'),
				onEnterBack: () =>
					document
						.querySelector('.about__img-right')
						.classList.remove('hide-element'),
			},
			opacity: 0,
		})
		gsap.from('.about__img-right img', {
			scrollTrigger: {
				trigger: '#about__wrapper__2',
				start: 'top bottom',
				end: '70% center',
				scrub: 1.9,
			},
			scale: 1.6,
		})
		gsap.to('.h2__title__hover-container img', {
			scrollTrigger: {
				trigger: '#about__wrapper__1',
				start: 'top bottom',
				end: '70% center',
				scrub: 1.9,
			},
			opacity: 1,
		})
		gsap.from('.about__txt', {
			scrollTrigger: {
				trigger: '#about__wrapper__1',
				start: 'top bottom',
				end: '70% center',
				scrub: 1.9,
			},
			yPercent: 100,
		})

		gsap.to('#about__wrapper__1', {
			scrollTrigger: {
				trigger: '.about',
				start: '5% center',
				end: '37% center',
				scrub: 1.1,
				onEnter: () => {
					document
						.querySelector('#about__wrapper__1')
						.classList.add('red__lines')
				},
				onLeave: () => {
					document
						.querySelector('#about__wrapper__1')
						.classList.remove('red__lines')
				},
				onLeaveBack: () => {
					document
						.querySelector('#about__wrapper__1')
						.classList.remove('red__lines')
				},
				onEnterBack: () => {
					document
						.querySelector('#about__wrapper__1')
						.classList.add('red__lines')
				},
			},
		})

		gsap.to('#about__wrapper__2', {
			scrollTrigger: {
				trigger: '.about',
				start: '38% center',
				end: '80% center',
				scrub: 1.1,
				onEnter: () => {
					document
						.querySelector('#about__wrapper__2')
						.classList.add('blue__lines')
				},
				onLeave: () => {
					document
						.querySelector('#about__wrapper__2')
						.classList.remove('blue__lines')
				},
				onLeaveBack: () => {
					document
						.querySelector('#about__wrapper__2')
						.classList.remove('blue__lines')
				},
				onEnterBack: () => {
					document
						.querySelector('#about__wrapper__2')
						.classList.add('blue__lines')
				},
			},
		})

		gsap.from('.about__txt-left', {
			scrollTrigger: {
				trigger: '#about__wrapper__2',
				start: 'top bottom',
				end: '70% center',
				scrub: 1.9,
			},
			yPercent: 100,
		})

		gsap.to('.about__txt', {
			scrollTrigger: {
				trigger: '#about__wrapper__1',
				start: 'top bottom',
				end: '70% center',
				scrub: 1.1,
				onLeave: () =>
					document.querySelector('.about__txt').classList.add('hide-element'),
				onEnterBack: () =>
					document
						.querySelector('.about__txt')
						.classList.remove('hide-element'),
			},
			opacity: 1,
		})
		gsap.to('.about__txt-left', {
			scrollTrigger: {
				trigger: '#about__wrapper__2',
				start: 'top bottom',
				end: '70% center',
				scrub: 1.1,
				onLeave: () =>
					document
						.querySelector('.about__txt-left')
						.classList.add('hide-element'),
				onEnterBack: () =>
					document
						.querySelector('.about__txt-left')
						.classList.remove('hide-element'),
			},
			opacity: 1,
		})

		gsap.to('.h2__title__hover-container-left img', {
			scrollTrigger: {
				trigger: '#about__wrapper__2',
				start: 'top bottom',
				end: '70% center',
				scrub: 1.9,
			},
			opacity: 1,
		})
	})
}
about()

// ======== QUALITY ANIMATION ========
function quality() {
	gsap.from('.quality__num', {
		x: (i, el) => 1 - parseFloat(el.getAttribute('data-speed')),
		scrollTrigger: {
			trigger: '.quality__wrapper',
			start: 'top bottom',
			end: 'bottom top',
			scrub: 1.9,
		},
	})

	gsap.to('#quality__num_1', {
		scrollTrigger: {
			trigger: '.quality__wrapper',
			start: 'top 90%',
			end: 'bottom 50%',
			onEnter: () => {
				document
					.querySelector('#quality__num_1')
					.classList.add('quality__num-hover')
				document
					.querySelector('#quality__title_1')
					.classList.add('quality__title-active')
				document
					.querySelector('#quality__p_1')
					.classList.add('quality__p-active')
			},
			onLeave: () => {
				document
					.querySelector('#quality__num_1')
					.classList.remove('quality__num-hover')
				document
					.querySelector('#quality__title_1')
					.classList.remove('quality__title-active')
				document
					.querySelector('#quality__p_1')
					.classList.remove('quality__p-active')
			},
			onLeaveBack: () => {
				document
					.querySelector('#quality__num_1')
					.classList.remove('quality__num-hover')
				document
					.querySelector('#quality__title_1')
					.classList.remove('quality__title-active')
				document
					.querySelector('#quality__p_1')
					.classList.remove('quality__p-active')
			},
			onEnterBack: () => {
				document
					.querySelector('#quality__num_1')
					.classList.add('quality__num-hover')
				document
					.querySelector('#quality__title_1')
					.classList.add('quality__title-active')
				document
					.querySelector('#quality__p_1')
					.classList.add('quality__p-active')
			},
		},
	})

	gsap.to('#quality__num_2', {
		scrollTrigger: {
			trigger: '.quality__wrapper',
			start: 'top 80%',
			end: 'bottom 50%',
			onEnter: () => {
				document
					.querySelector('#quality__num_2')
					.classList.add('quality__num-hover')
				document
					.querySelector('#quality__title_2')
					.classList.add('quality__title-active')
				document
					.querySelector('#quality__p_2')
					.classList.add('quality__p-active')
			},
			onLeave: () => {
				document
					.querySelector('#quality__num_2')
					.classList.remove('quality__num-hover')
				document
					.querySelector('#quality__title_2')
					.classList.remove('quality__title-active')
				document
					.querySelector('#quality__p_2')
					.classList.remove('quality__p-active')
			},
			onLeaveBack: () => {
				document
					.querySelector('#quality__num_2')
					.classList.remove('quality__num-hover')
				document
					.querySelector('#quality__title_2')
					.classList.remove('quality__title-active')
				document
					.querySelector('#quality__p_2')
					.classList.remove('quality__p-active')
			},
			onEnterBack: () => {
				document
					.querySelector('#quality__num_2')
					.classList.add('quality__num-hover')
				document
					.querySelector('#quality__title_2')
					.classList.add('quality__title-active')
				document
					.querySelector('#quality__p_2')
					.classList.add('quality__p-active')
			},
		},
	})

	gsap.to('#quality__num_3', {
		scrollTrigger: {
			trigger: '.quality__wrapper',
			start: 'top 70%',
			end: 'bottom 50%',
			onEnter: () => {
				document
					.querySelector('#quality__num_3')
					.classList.add('quality__num-hover')
				document
					.querySelector('#quality__title_3')
					.classList.add('quality__title-active')
				document
					.querySelector('#quality__p_3')
					.classList.add('quality__p-active')
			},
			onLeave: () => {
				document
					.querySelector('#quality__num_3')
					.classList.remove('quality__num-hover')
				document
					.querySelector('#quality__title_3')
					.classList.remove('quality__title-active')
				document
					.querySelector('#quality__p_3')
					.classList.remove('quality__p-active')
			},
			onLeaveBack: () => {
				document
					.querySelector('#quality__num_3')
					.classList.remove('quality__num-hover')
				document
					.querySelector('#quality__title_3')
					.classList.remove('quality__title-active')
				document
					.querySelector('#quality__p_3')
					.classList.remove('quality__p-active')
			},
			onEnterBack: () => {
				document
					.querySelector('#quality__num_3')
					.classList.add('quality__num-hover')
				document
					.querySelector('#quality__title_3')
					.classList.add('quality__title-active')
				document
					.querySelector('#quality__p_3')
					.classList.add('quality__p-active')
			},
		},
	})

	gsap.to('#quality__num_4', {
		scrollTrigger: {
			trigger: '.quality__wrapper',
			start: 'center 80%',
			end: 'bottom 50%',
			onEnter: () => {
				document
					.querySelector('#quality__num_4')
					.classList.add('quality__num-hover')
				document
					.querySelector('#quality__title_4')
					.classList.add('quality__title-active')
				document
					.querySelector('#quality__p_4')
					.classList.add('quality__p-active')
			},
			onLeave: () => {
				document
					.querySelector('#quality__num_4')
					.classList.remove('quality__num-hover')
				document
					.querySelector('#quality__title_4')
					.classList.remove('quality__title-active')
				document
					.querySelector('#quality__p_4')
					.classList.remove('quality__p-active')
			},
			onLeaveBack: () => {
				document
					.querySelector('#quality__num_4')
					.classList.remove('quality__num-hover')
				document
					.querySelector('#quality__title_4')
					.classList.remove('quality__title-active')
				document
					.querySelector('#quality__p_4')
					.classList.remove('quality__p-active')
			},
			onEnterBack: () => {
				document
					.querySelector('#quality__num_4')
					.classList.add('quality__num-hover')
				document
					.querySelector('#quality__title_4')
					.classList.add('quality__title-active')
				document
					.querySelector('#quality__p_4')
					.classList.add('quality__p-active')
			},
		},
	})

	gsap.to('#quality__num_5', {
		scrollTrigger: {
			trigger: '.quality__wrapper',
			start: 'center 70%',
			end: 'bottom 50%',
			onEnter: () => {
				document
					.querySelector('#quality__num_5')
					.classList.add('quality__num-hover')
				document
					.querySelector('#quality__title_5')
					.classList.add('quality__title-active')
				document
					.querySelector('#quality__p_5')
					.classList.add('quality__p-active')
			},
			onLeave: () => {
				document
					.querySelector('#quality__num_5')
					.classList.remove('quality__num-hover')
				document
					.querySelector('#quality__title_5')
					.classList.remove('quality__title-active')
				document
					.querySelector('#quality__p_5')
					.classList.remove('quality__p-active')
			},
			onLeaveBack: () => {
				document
					.querySelector('#quality__num_5')
					.classList.remove('quality__num-hover')
				document
					.querySelector('#quality__title_5')
					.classList.remove('quality__title-active')
				document
					.querySelector('#quality__p_5')
					.classList.remove('quality__p-active')
			},
			onEnterBack: () => {
				document
					.querySelector('#quality__num_5')
					.classList.add('quality__num-hover')
				document
					.querySelector('#quality__title_5')
					.classList.add('quality__title-active')
				document
					.querySelector('#quality__p_5')
					.classList.add('quality__p-active')
			},
		},
	})

	gsap.to('#quality__num_6', {
		scrollTrigger: {
			trigger: '.quality__wrapper',
			start: 'center 60%',
			end: 'bottom 50%',
			onEnter: () => {
				document
					.querySelector('#quality__num_6')
					.classList.add('quality__num-hover')
				document
					.querySelector('#quality__title_6')
					.classList.add('quality__title-active')
				document
					.querySelector('#quality__p_6')
					.classList.add('quality__p-active')
			},
			onLeave: () => {
				document
					.querySelector('#quality__num_6')
					.classList.remove('quality__num-hover')
				document
					.querySelector('#quality__title_6')
					.classList.remove('quality__title-active')
				document
					.querySelector('#quality__p_6')
					.classList.remove('quality__p-active')
			},
			onLeaveBack: () => {
				document
					.querySelector('#quality__num_6')
					.classList.remove('quality__num-hover')
				document
					.querySelector('#quality__title_6')
					.classList.remove('quality__title-active')
				document
					.querySelector('#quality__p_6')
					.classList.remove('quality__p-active')
			},
			onEnterBack: () => {
				document
					.querySelector('#quality__num_6')
					.classList.add('quality__num-hover')
				document
					.querySelector('#quality__title_6')
					.classList.add('quality__title-active')
				document
					.querySelector('#quality__p_6')
					.classList.add('quality__p-active')
			},
		},
	})

	gsap.from('#quality__h2-id', {
		scrollTrigger: {
			trigger: '.quality',
			start: 'top center',
			end: '40% 40%',
			scrub: 1.1,
			onLeave: () =>
				document.querySelector('#quality__h2-id').classList.add('hide-element'),
			onEnterBack: () =>
				document
					.querySelector('#quality__h2-id')
					.classList.remove('hide-element'),
		},
		opacity: 0,
	})
}
quality()

// ======== PORTFOLIO ANIMATION ========
function portfolio() {
	gsap.from('.work__item, .work__item-num, .work__item-txt', {
		y: (i, el) => 1 - parseFloat(el.getAttribute('data-speed')),
		scrollTrigger: {
			trigger: '.work',
			start: 'top bottom',
			scrub: 1.9,
		},
	})
	gsap.from('.work__item-img img', {
		scale: 1.6,
		scrollTrigger: {
			trigger: '.work__wrapper',
			start: 'top bottom',
			scrub: 1.9,
		},
	})

	gsap.to('.work__wrapper', {
		scrollTrigger: {
			trigger: '.work',
			start: '15% center',
			end: '90% center',
			scrub: 1.1,
			onEnter: () => {
				document.querySelector('.work__wrapper').classList.add('white__lines')
			},
			onLeave: () => {
				document
					.querySelector('.work__wrapper')
					.classList.remove('white__lines')
			},
			onLeaveBack: () => {
				document
					.querySelector('.work__wrapper')
					.classList.remove('white__lines')
			},
			onEnterBack: () => {
				document.querySelector('.work__wrapper').classList.add('white__lines')
			},
		},
	})

	gsap.to('.work__footer', {
		scrollTrigger: {
			trigger: '.work__wrapper',
			start: '90% center',
			end: 'bottom 20%',
			scrub: 1,
			onLeave: () =>
				document.querySelector('.work__footer').classList.add('hide-element'),
			onEnterBack: () =>
				document
					.querySelector('.work__footer')
					.classList.remove('hide-element'),
		},
		opacity: 1,
	})

	mm.add('(min-width: 1200px)', () => {
		gsap.from('#work__h2-id', {
			scrollTrigger: {
				trigger: '.work',
				start: '6% center',
				end: '23% 40%',
				scrub: 1.1,
				onLeave: () =>
					document.querySelector('#work__h2-id').classList.add('hide-element'),
				onEnterBack: () =>
					document
						.querySelector('#work__h2-id')
						.classList.remove('hide-element'),
			},
			opacity: 0,
		})

		gsap.to('#work__item_1', {
			scrollTrigger: {
				trigger: '.work__wrapper',
				start: '10% center',
				end: '30% top',
				onEnter: () => {
					document
						.querySelector('#work__item_1')
						.classList.add('work__item-active')
				},
				onLeave: () => {
					document
						.querySelector('#work__item_1')
						.classList.remove('work__item-active')
				},
				onLeaveBack: () => {
					document
						.querySelector('#work__item_1')
						.classList.remove('work__item-active')
				},
				onEnterBack: () => {
					document
						.querySelector('#work__item_1')
						.classList.add('work__item-active')
				},
			},
		})

		gsap.to('#work__item_2', {
			scrollTrigger: {
				trigger: '.work__wrapper',
				start: '20% center',
				end: '40% top',
				onEnter: () => {
					document
						.querySelector('#work__item_2')
						.classList.add('work__item-active')
				},
				onLeave: () => {
					document
						.querySelector('#work__item_2')
						.classList.remove('work__item-active')
				},
				onLeaveBack: () => {
					document
						.querySelector('#work__item_2')
						.classList.remove('work__item-active')
				},
				onEnterBack: () => {
					document
						.querySelector('#work__item_2')
						.classList.add('work__item-active')
				},
			},
		})

		gsap.to('#work__item_3', {
			scrollTrigger: {
				trigger: '.work__wrapper',
				start: '50% center',
				end: '70% top',
				onEnter: () => {
					document
						.querySelector('#work__item_3')
						.classList.add('work__item-active')
				},
				onLeave: () => {
					document
						.querySelector('#work__item_3')
						.classList.remove('work__item-active')
				},
				onLeaveBack: () => {
					document
						.querySelector('#work__item_3')
						.classList.remove('work__item-active')
				},
				onEnterBack: () => {
					document
						.querySelector('#work__item_3')
						.classList.add('work__item-active')
				},
			},
		})

		gsap.to('#work__item_4', {
			scrollTrigger: {
				trigger: '.work__wrapper',
				start: '60% center',
				end: '80% top',
				onEnter: () => {
					document
						.querySelector('#work__item_4')
						.classList.add('work__item-active')
				},
				onLeave: () => {
					document
						.querySelector('#work__item_4')
						.classList.remove('work__item-active')
				},
				onLeaveBack: () => {
					document
						.querySelector('#work__item_4')
						.classList.remove('work__item-active')
				},
				onEnterBack: () => {
					document
						.querySelector('#work__item_4')
						.classList.add('work__item-active')
				},
			},
		})
	})

	// ======== MEDIA WORK SECTION ========
	mm.add('(max-width: 1200px)', () => {
		gsap.from('#work__h2-id', {
			scrollTrigger: {
				trigger: '.work',
				start: '0% bottom',
				end: '30% 10%',
				scrub: 1.1,
				onLeave: () =>
					document.querySelector('#work__h2-id').classList.add('hide-element'),
				onEnterBack: () =>
					document
						.querySelector('#work__h2-id')
						.classList.remove('hide-element'),
			},
			opacity: 0,
		})

		gsap.to('#work__item_1', {
			scrollTrigger: {
				trigger: '.work__wrapper',
				start: 'top 65%',
				end: '25% 20%',
				onEnter: () => {
					document
						.querySelector('#work__item_1')
						.classList.add('work__item-active')
				},
				onLeave: () => {
					document
						.querySelector('#work__item_1')
						.classList.remove('work__item-active')
				},
				onLeaveBack: () => {
					document
						.querySelector('#work__item_1')
						.classList.remove('work__item-active')
				},
				onEnterBack: () => {
					document
						.querySelector('#work__item_1')
						.classList.add('work__item-active')
				},
			},
		})

		gsap.to('#work__item_2', {
			scrollTrigger: {
				trigger: '.work__wrapper',
				start: '25% 65%',
				end: '50% 20%',
				onEnter: () => {
					document
						.querySelector('#work__item_2')
						.classList.add('work__item-active')
				},
				onLeave: () => {
					document
						.querySelector('#work__item_2')
						.classList.remove('work__item-active')
				},
				onLeaveBack: () => {
					document
						.querySelector('#work__item_2')
						.classList.remove('work__item-active')
				},
				onEnterBack: () => {
					document
						.querySelector('#work__item_2')
						.classList.add('work__item-active')
				},
			},
		})

		gsap.to('#work__item_3', {
			scrollTrigger: {
				trigger: '.work__wrapper',
				start: '50% 65%',
				end: '75% 20%',
				onEnter: () => {
					document
						.querySelector('#work__item_3')
						.classList.add('work__item-active')
				},
				onLeave: () => {
					document
						.querySelector('#work__item_3')
						.classList.remove('work__item-active')
				},
				onLeaveBack: () => {
					document
						.querySelector('#work__item_3')
						.classList.remove('work__item-active')
				},
				onEnterBack: () => {
					document
						.querySelector('#work__item_3')
						.classList.add('work__item-active')
				},
			},
		})

		gsap.to('#work__item_4', {
			scrollTrigger: {
				trigger: '.work__wrapper',
				start: '75% 65%',
				end: 'bottom 20%',
				onEnter: () => {
					document
						.querySelector('#work__item_4')
						.classList.add('work__item-active')
				},
				onLeave: () => {
					document
						.querySelector('#work__item_4')
						.classList.remove('work__item-active')
				},
				onLeaveBack: () => {
					document
						.querySelector('#work__item_4')
						.classList.remove('work__item-active')
				},
				onEnterBack: () => {
					document
						.querySelector('#work__item_4')
						.classList.add('work__item-active')
				},
			},
		})
	})
}
portfolio()

// ======== SERVICE ANIMATION ========
function service() {
	// ======== MEDIA SERVICE SECTION ========
	mm.add('(min-width: 1200px)', () => {
		gsap.from('#service__h2-id', {
			scrollTrigger: {
				trigger: '.service',
				start: 'top center',
				end: '50% 40%',
				scrub: 1.1,
				onLeave: () =>
					document
						.querySelector('#service__h2-id')
						.classList.add('hide-element'),
				onEnterBack: () =>
					document
						.querySelector('#service__h2-id')
						.classList.remove('hide-element'),
			},
			opacity: 0,
		})
	})

	mm.add('(max-width: 1200px)', () => {
		gsap.from('#service__h2-id', {
			scrollTrigger: {
				trigger: '.service',
				start: 'top center',
				end: '30% 40%',
				scrub: 1.1,
				onLeave: () =>
					document
						.querySelector('#service__h2-id')
						.classList.add('hide-element'),
				onEnterBack: () =>
					document
						.querySelector('#service__h2-id')
						.classList.remove('hide-element'),
			},
			opacity: 0,
		})
	})

	// ======== MEDIA SERVICE SECTION ========
	mm.add('(min-width: 1200px)', () => {
		gsap.from('.service__item-arrow', {
			x: (i, el) => 1 - parseFloat(el.getAttribute('data-speed')),
			scrollTrigger: {
				trigger: '.service__wrapper',
				start: 'top bottom',
				scrub: 1.9,
			},
		})
	})

	gsap.to('#service__item-container_1', {
		scrollTrigger: {
			trigger: '.service__wrapper',
			start: '0% 60%',
			end: '30% 60%',
			onEnter: () => {
				document
					.querySelector('#service__item-container_1')
					.classList.add('service__item-active')
			},
			onLeave: () => {
				document
					.querySelector('#service__item-container_1')
					.classList.remove('service__item-active')
			},
			onLeaveBack: () => {
				document
					.querySelector('#service__item-container_1')
					.classList.remove('service__item-active')
			},
			onEnterBack: () => {
				document
					.querySelector('#service__item-container_1')
					.classList.add('service__item-active')
			},
		},
	})
	gsap.to('#service__item-container_2', {
		scrollTrigger: {
			trigger: '.service__wrapper',
			start: '20% 60%',
			end: '50% 60%',
			onEnter: () => {
				document
					.querySelector('#service__item-container_2')
					.classList.add('service__item-active')
			},
			onLeave: () => {
				document
					.querySelector('#service__item-container_2')
					.classList.remove('service__item-active')
			},
			onLeaveBack: () => {
				document
					.querySelector('#service__item-container_2')
					.classList.remove('service__item-active')
			},
			onEnterBack: () => {
				document
					.querySelector('#service__item-container_2')
					.classList.add('service__item-active')
			},
		},
	})
	gsap.to('#service__item-container_3', {
		scrollTrigger: {
			trigger: '.service__wrapper',
			start: '40% 60%',
			end: '70% 60%',
			onEnter: () => {
				document
					.querySelector('#service__item-container_3')
					.classList.add('service__item-active')
			},
			onLeave: () => {
				document
					.querySelector('#service__item-container_3')
					.classList.remove('service__item-active')
			},
			onLeaveBack: () => {
				document
					.querySelector('#service__item-container_3')
					.classList.remove('service__item-active')
			},
			onEnterBack: () => {
				document
					.querySelector('#service__item-container_3')
					.classList.add('service__item-active')
			},
		},
	})
	gsap.to('#service__item-container_4', {
		scrollTrigger: {
			trigger: '.service__wrapper',
			start: '60% 60%',
			end: '90% 60%',
			onEnter: () => {
				document
					.querySelector('#service__item-container_4')
					.classList.add('service__item-active')
			},
			onLeave: () => {
				document
					.querySelector('#service__item-container_4')
					.classList.remove('service__item-active')
			},
			onLeaveBack: () => {
				document
					.querySelector('#service__item-container_4')
					.classList.remove('service__item-active')
			},
			onEnterBack: () => {
				document
					.querySelector('#service__item-container_4')
					.classList.add('service__item-active')
			},
		},
	})
	gsap.to('#service__item-container_5', {
		scrollTrigger: {
			trigger: '.service__wrapper',
			start: '80% 60%',
			end: '100% 60%',
			onEnter: () => {
				document
					.querySelector('#service__item-container_5')
					.classList.add('service__item-active')
			},
			onLeave: () => {
				document
					.querySelector('#service__item-container_5')
					.classList.remove('service__item-active')
			},
			onLeaveBack: () => {
				document
					.querySelector('#service__item-container_5')
					.classList.remove('service__item-active')
			},
			onEnterBack: () => {
				document
					.querySelector('#service__item-container_5')
					.classList.add('service__item-active')
			},
		},
	})

	gsap.to('#service__item-container_1', {
		scrollTrigger: {
			trigger: '.service__wrapper',
			start: '5% 60%',
			end: '25% 60%',
			onEnter: () => {
				document
					.querySelector('#service__item-container_1 .service__item-text')
					.classList.add('service__item-text-active')
				document
					.querySelector('#service__item-container_1 .service__item-arrow')
					.classList.add('service__item-arrow-active')
				document
					.querySelector('#service__item-container_1 .service__item-container')
					.classList.add('service__item-container-hover')
			},
			onLeave: () => {
				document
					.querySelector('#service__item-container_1 .service__item-text')
					.classList.remove('service__item-text-active')
				document
					.querySelector('#service__item-container_1 .service__item-arrow')
					.classList.remove('service__item-arrow-active')
				document
					.querySelector('#service__item-container_1 .service__item-container')
					.classList.remove('service__item-container-hover')
			},
			onLeaveBack: () => {
				document
					.querySelector('#service__item-container_1 .service__item-text')
					.classList.remove('service__item-text-active')
				document
					.querySelector('#service__item-container_1 .service__item-arrow')
					.classList.remove('service__item-arrow-active')
				document
					.querySelector('#service__item-container_1 .service__item-container')
					.classList.remove('service__item-container-hover')
			},
			onEnterBack: () => {
				document
					.querySelector('#service__item-container_1 .service__item-text')
					.classList.add('service__item-text-active')
				document
					.querySelector('#service__item-container_1 .service__item-arrow')
					.classList.add('service__item-arrow-active')
				document
					.querySelector('#service__item-container_1 .service__item-container')
					.classList.add('service__item-container-hover')
			},
		},
	})

	gsap.to('#service__item-container_2', {
		scrollTrigger: {
			trigger: '.service__wrapper',
			start: '25% 60%',
			end: '45% 60%',
			onEnter: () => {
				document
					.querySelector('#service__item-container_2 .service__item-text')
					.classList.add('service__item-text-active')
				document
					.querySelector('#service__item-container_2 .service__item-arrow')
					.classList.add('service__item-arrow-active')
				document
					.querySelector('#service__item-container_2 .service__item-container')
					.classList.add('service__item-container-hover')
			},
			onLeave: () => {
				document
					.querySelector('#service__item-container_2 .service__item-text')
					.classList.remove('service__item-text-active')
				document
					.querySelector('#service__item-container_2 .service__item-arrow')
					.classList.remove('service__item-arrow-active')
				document
					.querySelector('#service__item-container_2 .service__item-container')
					.classList.remove('service__item-container-hover')
			},
			onLeaveBack: () => {
				document
					.querySelector('#service__item-container_2 .service__item-text')
					.classList.remove('service__item-text-active')
				document
					.querySelector('#service__item-container_2 .service__item-arrow')
					.classList.remove('service__item-arrow-active')
				document
					.querySelector('#service__item-container_2 .service__item-container')
					.classList.remove('service__item-container-hover')
			},
			onEnterBack: () => {
				document
					.querySelector('#service__item-container_2 .service__item-text')
					.classList.add('service__item-text-active')
				document
					.querySelector('#service__item-container_2 .service__item-arrow')
					.classList.add('service__item-arrow-active')
				document
					.querySelector('#service__item-container_2 .service__item-container')
					.classList.add('service__item-container-hover')
			},
		},
	})

	gsap.to('#service__item-container_3', {
		scrollTrigger: {
			trigger: '.service__wrapper',
			start: '45% 60%',
			end: '65% 60%',
			onEnter: () => {
				document
					.querySelector('#service__item-container_3 .service__item-text')
					.classList.add('service__item-text-active')
				document
					.querySelector('#service__item-container_3 .service__item-arrow')
					.classList.add('service__item-arrow-active')
				document
					.querySelector('#service__item-container_3 .service__item-container')
					.classList.add('service__item-container-hover')
			},
			onLeave: () => {
				document
					.querySelector('#service__item-container_3 .service__item-text')
					.classList.remove('service__item-text-active')
				document
					.querySelector('#service__item-container_3 .service__item-arrow')
					.classList.remove('service__item-arrow-active')
				document
					.querySelector('#service__item-container_3 .service__item-container')
					.classList.remove('service__item-container-hover')
			},
			onLeaveBack: () => {
				document
					.querySelector('#service__item-container_3 .service__item-text')
					.classList.remove('service__item-text-active')
				document
					.querySelector('#service__item-container_3 .service__item-arrow')
					.classList.remove('service__item-arrow-active')
				document
					.querySelector('#service__item-container_3 .service__item-container')
					.classList.remove('service__item-container-hover')
			},
			onEnterBack: () => {
				document
					.querySelector('#service__item-container_3 .service__item-text')
					.classList.add('service__item-text-active')
				document
					.querySelector('#service__item-container_3 .service__item-arrow')
					.classList.add('service__item-arrow-active')
				document
					.querySelector('#service__item-container_3 .service__item-container')
					.classList.add('service__item-container-hover')
			},
		},
	})

	gsap.to('#service__item-container_4', {
		scrollTrigger: {
			trigger: '.service__wrapper',
			start: '65% 60%',
			end: '85% 60%',
			onEnter: () => {
				document
					.querySelector('#service__item-container_4 .service__item-text')
					.classList.add('service__item-text-active')
				document
					.querySelector('#service__item-container_4 .service__item-arrow')
					.classList.add('service__item-arrow-active')
				document
					.querySelector('#service__item-container_4 .service__item-container')
					.classList.add('service__item-container-hover')
			},
			onLeave: () => {
				document
					.querySelector('#service__item-container_4 .service__item-text')
					.classList.remove('service__item-text-active')
				document
					.querySelector('#service__item-container_4 .service__item-arrow')
					.classList.remove('service__item-arrow-active')
				document
					.querySelector('#service__item-container_4 .service__item-container')
					.classList.remove('service__item-container-hover')
			},
			onLeaveBack: () => {
				document
					.querySelector('#service__item-container_4 .service__item-text')
					.classList.remove('service__item-text-active')
				document
					.querySelector('#service__item-container_4 .service__item-arrow')
					.classList.remove('service__item-arrow-active')
				document
					.querySelector('#service__item-container_4 .service__item-container')
					.classList.remove('service__item-container-hover')
			},
			onEnterBack: () => {
				document
					.querySelector('#service__item-container_4 .service__item-text')
					.classList.add('service__item-text-active')
				document
					.querySelector('#service__item-container_4 .service__item-arrow')
					.classList.add('service__item-arrow-active')
				document
					.querySelector('#service__item-container_4 .service__item-container')
					.classList.add('service__item-container-hover')
			},
		},
	})

	gsap.to('#service__item-container_5', {
		scrollTrigger: {
			trigger: '.service__wrapper',
			start: '85% 60%',
			end: '100% 60%',
			onEnter: () => {
				document
					.querySelector('#service__item-container_5 .service__item-text')
					.classList.add('service__item-text-active')
				document
					.querySelector('#service__item-container_5 .service__item-arrow')
					.classList.add('service__item-arrow-active')
				document
					.querySelector('#service__item-container_5 .service__item-container')
					.classList.add('service__item-container-hover')
			},
			onLeave: () => {
				document
					.querySelector('#service__item-container_5 .service__item-text')
					.classList.remove('service__item-text-active')
				document
					.querySelector('#service__item-container_5 .service__item-arrow')
					.classList.remove('service__item-arrow-active')
				document
					.querySelector('#service__item-container_5 .service__item-container')
					.classList.remove('service__item-container-hover')
			},
			onLeaveBack: () => {
				document
					.querySelector('#service__item-container_5 .service__item-text')
					.classList.remove('service__item-text-active')
				document
					.querySelector('#service__item-container_5 .service__item-arrow')
					.classList.remove('service__item-arrow-active')
				document
					.querySelector('#service__item-container_5 .service__item-container')
					.classList.remove('service__item-container-hover')
			},
			onEnterBack: () => {
				document
					.querySelector('#service__item-container_5 .service__item-text')
					.classList.add('service__item-text-active')
				document
					.querySelector('#service__item-container_5 .service__item-arrow')
					.classList.add('service__item-arrow-active')
				document
					.querySelector('#service__item-container_5 .service__item-container')
					.classList.add('service__item-container-hover')
			},
		},
	})
}
service()

// ======== CONTACT ANIMATION ========
function contact() {
	gsap.from('#contact__h2-id', {
		scrollTrigger: {
			trigger: 'section.contact',
			start: 'top center',
			end: '50% 40%',
			scrub: 1.1,
			onLeave: () =>
				document.querySelector('#contact__h2-id').classList.add('hide-element'),
			onEnterBack: () =>
				document
					.querySelector('#contact__h2-id')
					.classList.remove('hide-element'),
		},
		opacity: 0,
	})

	gsap.to('.contact__wrapper', {
		scrollTrigger: {
			trigger: '#contact',
			start: '30% center',
			end: '90% center',
			scrub: 1.1,
			onEnter: () => {
				document
					.querySelector('.contact__wrapper')
					.classList.add('white__lines')
			},
			onLeave: () => {
				document
					.querySelector('.contact__wrapper')
					.classList.remove('white__lines')
			},
			onLeaveBack: () => {
				document
					.querySelector('.contact__wrapper')
					.classList.remove('white__lines')
			},
			onEnterBack: () => {
				document
					.querySelector('.contact__wrapper')
					.classList.add('white__lines')
			},
		},
	})

	gsap.from('.contact__container_1', {
		scrollTrigger: {
			trigger: 'section.contact',
			start: 'top center',
			end: '30% 40%',
			scrub: 1.1,
		},
		y: 700,
	})

	// ======== MEDIA CONTACT SECTION ========
	mm.add('(min-width: 700px)', () => {
		gsap.from('.contact__row_1', {
			scrollTrigger: {
				trigger: 'section.contact',
				start: '40% center',
				end: '50% 40%',
				scrub: 1.1,
			},
			y: 700,
			opacity: 0,
		})

		gsap.from('.contact__row_2', {
			scrollTrigger: {
				trigger: 'section.contact',
				start: '45% center',
				end: '55% 40%',
				scrub: 1.1,
			},
			y: 700,
			opacity: 0,
		})
	})

	mm.add('(max-width: 700px)', () => {
		gsap.from('.contact__row_1', {
			scrollTrigger: {
				trigger: 'section.contact',
				start: '40% center',
				end: '50% 40%',
				scrub: 1.1,
			},
			y: 700,
			opacity: 0,
		})

		gsap.from('.contact__row_2', {
			scrollTrigger: {
				trigger: 'section.contact',
				start: '45% center',
				end: '55% 40%',
				scrub: 1.1,
			},
			y: 700,
			opacity: 0,
		})
	})

	gsap.from('.contact__form', {
		scrollTrigger: {
			trigger: 'section.contact',
			start: '45% center',
			end: '55% 40%',
			scrub: 1.1,
		},
		scale: 0,
		opacity: 0,
	})

	gsap.from('.contact__submitbtn', {
		scrollTrigger: {
			trigger: 'section.contact',
			start: '50% center',
			end: '55% 40%',
			scrub: 1.1,
		},
		y: 700,
		opacity: 0,
	})

	gsap.to('.contact__content', {
		scrollTrigger: {
			trigger: 'section.contact',
			start: '20% center',
			end: '40% 40%',
			scrub: 1.1,
			onEnter: () => {
				document
					.querySelector('.contact__content')
					.classList.add('contact__content-active')
				document
					.querySelector('.contact__title img')
					.classList.add('contact__title_img-active')
			},
			onLeave: () => {
				document
					.querySelector('.contact__content')
					.classList.remove('contact__content-active')
				document
					.querySelector('.contact__title img')
					.classList.remove('contact__title_img-active')
			},
			onLeaveBack: () => {
				document
					.querySelector('.contact__content')
					.classList.remove('contact__content-active')
				document
					.querySelector('.contact__title img')
					.classList.remove('contact__title_img-active')
			},
			onEnterBack: () => {
				document
					.querySelector('.contact__content')
					.classList.add('contact__content-active')
				document
					.querySelector('.contact__title img')
					.classList.add('contact__title_img-active')
			},
		},
	})

	gsap.to('.contact', {
		scrollTrigger: {
			trigger: 'section.contact',
			start: '80% center',
			end: '90% 40%',
			scrub: 1.1,
		},
		opacity: 0,
		scale: 0,
	})
}
contact()

//footer
function footer() {
	gsap.from('.footer__container span', {
		y: (i, el) => 1 - parseFloat(el.getAttribute('data-speed')),
		opacity: 0,
		scrollTrigger: {
			trigger: '.footer',
			start: 'top bottom',
			end: 'bottom bottom',
			scrub: 1.9,
		},
	})
}
footer()

// ======== CHAT ANIMATION ========
function chat() {
	chatTimeline.to('.chat', {
		x: leftXPosition,
		y: centerYPosition,
		onStart: () => {
			document
				.querySelector('.chat-label #message-1')
				.classList.toggle('active')
			document
				.querySelector('.chat-label #message-2')
				.classList.toggle('active')
			document
				.querySelector('img#chat-image-1')
				.classList.toggle('chat-image-opacity')
			document
				.querySelector('img#chat-image-2')
				.classList.toggle('chat-image-opacity')
			document.querySelector('img#avatar-1').classList.toggle('img-active')
			document.querySelector('img#avatar-2').classList.toggle('img-active')
			document
				.querySelector('.chat-label #message-2')
				.classList.toggle('white-text')
			document
				.querySelector(
					'.chat__wrapper .chat__wrapper-message .avatar img#avatar-2'
				)
				.classList.toggle('gray-filter')
			document
				.querySelector('.chat__wrapper .chat-image#chat-image-2')
				.classList.toggle('black-mode__chat-image')
			document
				.querySelector('.chat__wrapper .chat__wrapper-message .chat-label')
				.classList.toggle('no-blend-mode')
		},
		onReverseComplete: () => {
			document
				.querySelector('.chat-label #message-1')
				.classList.toggle('active')
			document
				.querySelector('.chat-label #message-2')
				.classList.toggle('active')
			document
				.querySelector('img#chat-image-1')
				.classList.toggle('chat-image-opacity')
			document
				.querySelector('img#chat-image-2')
				.classList.toggle('chat-image-opacity')
			document.querySelector('img#avatar-1').classList.toggle('img-active')
			document.querySelector('img#avatar-2').classList.toggle('img-active')
			document
				.querySelector('.chat-label #message-2')
				.classList.toggle('white-text')
			document
				.querySelector(
					'.chat__wrapper .chat__wrapper-message .avatar img#avatar-2'
				)
				.classList.toggle('gray-filter')
			document
				.querySelector('.chat__wrapper .chat-image#chat-image-2')
				.classList.toggle('black-mode__chat-image')
			document
				.querySelector('.chat__wrapper .chat__wrapper-message .chat-label')
				.classList.toggle('no-blend-mode')
		},
	})
	chatTimeline.to('.chat', {
		x: rightXPosition,
		y: centerYPosition,
		onStart: () => {
			document
				.querySelector('.chat-label #message-2')
				.classList.toggle('active')
			document
				.querySelector('.chat-label #message-2')
				.classList.toggle('white-text')
			document
				.querySelector('.chat-label #message-3')
				.classList.toggle('active')
			document
				.querySelector('.chat-label #message-3')
				.classList.toggle('white-text')
		},
		onReverseComplete: () => {
			document
				.querySelector('.chat-label #message-2')
				.classList.toggle('active')
			document
				.querySelector('.chat-label #message-2')
				.classList.toggle('white-text')
			document
				.querySelector('.chat-label #message-3')
				.classList.toggle('active')
			document
				.querySelector('.chat-label #message-3')
				.classList.toggle('white-text')
		},
	})
	chatTimeline.to('.chat', {
		x: rightXPosition,
		y: bottomYPosition,
		onStart: () => {
			document
				.querySelector('.chat-label #message-3')
				.classList.toggle('active')
			document
				.querySelector('.chat-label #message-4')
				.classList.toggle('active')
			document
				.querySelector('img#chat-image-2')
				.classList.toggle('chat-image-opacity')
			document
				.querySelector('img#chat-image-3')
				.classList.toggle('chat-image-opacity')
			document
				.querySelector('.chat-label #message-3')
				.classList.toggle('white-text')
			document
				.querySelector('.chat__wrapper .chat__wrapper-message .chat-label')
				.classList.toggle('no-blend-mode')
			document
				.querySelector('.chat__wrapper .chat-image#chat-image-2')
				.classList.toggle('black-mode__chat-image')
			document
				.querySelector(
					'.chat__wrapper .chat__wrapper-message .avatar img#avatar-2'
				)
				.classList.toggle('gray-filter')
		},
		onReverseComplete: () => {
			document
				.querySelector('.chat-label #message-3')
				.classList.toggle('active')
			document
				.querySelector('.chat-label #message-4')
				.classList.toggle('active')
			document
				.querySelector('img#chat-image-2')
				.classList.toggle('chat-image-opacity')
			document
				.querySelector('img#chat-image-3')
				.classList.toggle('chat-image-opacity')
			document
				.querySelector('.chat-label #message-3')
				.classList.toggle('white-text')
			document
				.querySelector('.chat__wrapper .chat__wrapper-message .chat-label')
				.classList.toggle('no-blend-mode')
			document
				.querySelector('.chat__wrapper .chat-image#chat-image-2')
				.classList.toggle('black-mode__chat-image')
			document
				.querySelector(
					'.chat__wrapper .chat__wrapper-message .avatar img#avatar-2'
				)
				.classList.toggle('gray-filter')
		},
	})
	chatTimeline.to('.chat', {
		x: centerXPosition,
		y: centerYPosition,
		onStart: () => {
			document
				.querySelector('.chat-label #message-4')
				.classList.toggle('active')
			document
				.querySelector('.chat-label #message-5')
				.classList.toggle('active')
			document
				.querySelector('img#chat-image-3')
				.classList.toggle('chat-image-opacity')
			document
				.querySelector('img#chat-image-4')
				.classList.toggle('chat-image-opacity')
			document
				.querySelector('.chat-label #message-5')
				.classList.toggle('white-text')
			document
				.querySelector('.chat__wrapper .chat__wrapper-message .chat-label')
				.classList.toggle('no-blend-mode')
			document
				.querySelector('.chat__wrapper .chat-image#chat-image-4')
				.classList.toggle('black-mode__chat-image')
			document
				.querySelector(
					'.chat__wrapper .chat__wrapper-message .avatar img#avatar-2'
				)
				.classList.toggle('gray-filter')
		},
		onReverseComplete: () => {
			document
				.querySelector('.chat-label #message-4')
				.classList.toggle('active')
			document
				.querySelector('.chat-label #message-5')
				.classList.toggle('active')
			document
				.querySelector('img#chat-image-3')
				.classList.toggle('chat-image-opacity')
			document
				.querySelector('img#chat-image-4')
				.classList.toggle('chat-image-opacity')
			document
				.querySelector('.chat-label #message-5')
				.classList.toggle('white-text')
			document
				.querySelector('.chat__wrapper .chat__wrapper-message .chat-label')
				.classList.toggle('no-blend-mode')
			document
				.querySelector('.chat__wrapper .chat-image#chat-image-4')
				.classList.toggle('black-mode__chat-image')
			document
				.querySelector(
					'.chat__wrapper .chat__wrapper-message .avatar img#avatar-2'
				)
				.classList.toggle('gray-filter')
		},
	})
	chatTimeline.to('.chat', {
		x: centerXPosition,
		y: centerYPosition,
		onStart: () => {
			document
				.querySelector('.chat-label #message-5')
				.classList.toggle('white-text')
			document
				.querySelector('.chat-label #message-5')
				.classList.toggle('active')
			document
				.querySelector('.chat-label #message-6')
				.classList.toggle('active')
			document
				.querySelector('.chat-label #message-6')
				.classList.toggle('white-text')
		},
		onReverseComplete: () => {
			document
				.querySelector('.chat-label #message-5')
				.classList.toggle('white-text')
			document
				.querySelector('.chat-label #message-5')
				.classList.toggle('active')
			document
				.querySelector('.chat-label #message-6')
				.classList.toggle('active')
			document
				.querySelector('.chat-label #message-6')
				.classList.toggle('white-text')
		},
	})
	chatTimeline.to('.chat', {
		x: centerXPosition,
		y: bottomYPosition,
		onStart: () => {
			document
				.querySelector('.chat-label #message-6')
				.classList.toggle('active')
			document
				.querySelector('.chat-label #message-7')
				.classList.toggle('active')
			document
				.querySelector('img#chat-image-4')
				.classList.toggle('chat-image-opacity')
			document
				.querySelector('img#chat-image-5')
				.classList.toggle('chat-image-opacity')
			document
				.querySelector('.chat-label #message-6')
				.classList.toggle('white-text')
			document
				.querySelector('.chat__wrapper .chat__wrapper-message .chat-label')
				.classList.toggle('no-blend-mode')
			document
				.querySelector('.chat__wrapper .chat-image#chat-image-4')
				.classList.toggle('black-mode__chat-image')
			document
				.querySelector(
					'.chat__wrapper .chat__wrapper-message .avatar img#avatar-2'
				)
				.classList.toggle('gray-filter')
		},
		onReverseComplete: () => {
			document
				.querySelector('.chat-label #message-6')
				.classList.toggle('active')
			document
				.querySelector('.chat-label #message-7')
				.classList.toggle('active')
			document
				.querySelector('img#chat-image-4')
				.classList.toggle('chat-image-opacity')
			document
				.querySelector('img#chat-image-5')
				.classList.toggle('chat-image-opacity')
			document
				.querySelector('.chat-label #message-6')
				.classList.toggle('white-text')
			document
				.querySelector('.chat__wrapper .chat__wrapper-message .chat-label')
				.classList.toggle('no-blend-mode')
			document
				.querySelector('.chat__wrapper .chat-image#chat-image-4')
				.classList.toggle('black-mode__chat-image')
			document
				.querySelector(
					'.chat__wrapper .chat__wrapper-message .avatar img#avatar-2'
				)
				.classList.toggle('gray-filter')
		},
	})
	chatTimeline.to('.chat', {
		x: centerXPosition,
		y: bottomYPosition,
		onStart: () => {
			document
				.querySelector('.chat-label #message-7')
				.classList.toggle('active')
			document
				.querySelector('.chat-label #message-8')
				.classList.toggle('active')
		},
		onReverseComplete: () => {
			document
				.querySelector('.chat-label #message-7')
				.classList.toggle('active')
			document
				.querySelector('.chat-label #message-8')
				.classList.toggle('active')
		},
	})
	chatTimeline.to('.chat', {
		x: centerXPosition,
		y: centerYPosition,
		onStart: () => {
			document
				.querySelector('.chat-label #message-8')
				.classList.toggle('active')
			document
				.querySelector('.chat-label #message-9')
				.classList.toggle('active')
			document
				.querySelector('img#chat-image-5')
				.classList.toggle('chat-image-opacity')
			document
				.querySelector('img#chat-image-7')
				.classList.toggle('chat-image-opacity')
			document
				.querySelector('.chat-label #message-9')
				.classList.toggle('white-text')
			document
				.querySelector('.chat__wrapper .chat__wrapper-message .chat-label')
				.classList.toggle('no-blend-mode')
			document
				.querySelector('.chat__wrapper .chat-image#chat-image-7')
				.classList.toggle('black-mode__chat-image')
			document
				.querySelector(
					'.chat__wrapper .chat__wrapper-message .avatar img#avatar-2'
				)
				.classList.toggle('gray-filter')
		},
		onReverseComplete: () => {
			document
				.querySelector('.chat-label #message-8')
				.classList.toggle('active')
			document
				.querySelector('.chat-label #message-9')
				.classList.toggle('active')
			document
				.querySelector('img#chat-image-5')
				.classList.toggle('chat-image-opacity')
			document
				.querySelector('img#chat-image-7')
				.classList.toggle('chat-image-opacity')
			document
				.querySelector('.chat-label #message-9')
				.classList.toggle('white-text')
			document
				.querySelector('.chat__wrapper .chat__wrapper-message .chat-label')
				.classList.toggle('no-blend-mode')
			document
				.querySelector('.chat__wrapper .chat-image#chat-image-7')
				.classList.toggle('black-mode__chat-image')
			document
				.querySelector(
					'.chat__wrapper .chat__wrapper-message .avatar img#avatar-2'
				)
				.classList.toggle('gray-filter')
		},
	})
	chatTimeline.to('.chat', {
		x: rightXPosition,
		y: centerYPosition,
		onStart: () => {
			document
				.querySelector('.chat-label #message-9')
				.classList.toggle('white-text')
			document
				.querySelector('.chat-label #message-9')
				.classList.toggle('active')
			document
				.querySelector('.chat-label #message-10')
				.classList.toggle('active')
			document
				.querySelector('.chat-label #message-10')
				.classList.toggle('white-text')
		},
		onReverseComplete: () => {
			document
				.querySelector('.chat-label #message-9')
				.classList.toggle('white-text')
			document
				.querySelector('.chat-label #message-9')
				.classList.toggle('active')
			document
				.querySelector('.chat-label #message-10')
				.classList.toggle('active')
			document
				.querySelector('.chat-label #message-10')
				.classList.toggle('white-text')
		},
	})
	chatTimeline.to('.chat', {
		x: rightXPosition,
		y: bottomYPosition * 2,
		onStart: () => {
			document
				.querySelector('.chat-label #message-10')
				.classList.toggle('white-text')
			document
				.querySelector('.chat-label #message-10')
				.classList.toggle('active')
			document
				.querySelector('.chat-label #message-11')
				.classList.toggle('active')
			document
				.querySelector('img#chat-image-6')
				.classList.toggle('chat-image-opacity')
			document
				.querySelector('img#chat-image-7')
				.classList.toggle('chat-image-opacity')
			document
				.querySelector('img#chat-image-7')
				.classList.toggle('black-mode__chat-image')
			document
				.querySelector('.chat__wrapper .chat__wrapper-message .chat-label')
				.classList.toggle('no-blend-mode')
			document
				.querySelector(
					'.chat__wrapper .chat__wrapper-message .avatar img#avatar-2'
				)
				.classList.toggle('gray-filter')
		},
		onReverseComplete: () => {
			document
				.querySelector('.chat-label #message-10')
				.classList.toggle('white-text')
			document
				.querySelector('.chat-label #message-10')
				.classList.toggle('active')
			document
				.querySelector('.chat-label #message-11')
				.classList.toggle('active')
			document
				.querySelector('img#chat-image-6')
				.classList.toggle('chat-image-opacity')
			document
				.querySelector('img#chat-image-7')
				.classList.toggle('chat-image-opacity')
			document
				.querySelector('img#chat-image-7')
				.classList.toggle('black-mode__chat-image')
			document
				.querySelector('.chat__wrapper .chat__wrapper-message .chat-label')
				.classList.toggle('no-blend-mode')
			document
				.querySelector(
					'.chat__wrapper .chat__wrapper-message .avatar img#avatar-2'
				)
				.classList.toggle('gray-filter')
		},
	})

	gsap.to('.chat', {
		scrollTrigger: {
			trigger: '#contact',
			start: '60% center',
			end: '95% center',
			onEnter: () => {
				document
					.querySelector('.pin-spacer')
					.classList.add('hide__pin-spacer__opacity')
			},
			onLeave: () => {
				document
					.querySelector('.pin-spacer')
					.classList.remove('hide__pin-spacer__opacity')
			},
			onLeaveBack: () => {
				document
					.querySelector('.pin-spacer')
					.classList.remove('hide__pin-spacer__opacity')
			},
			onEnterBack: () => {
				document
					.querySelector('.pin-spacer')
					.classList.add('hide__pin-spacer__opacity')
			},
		},
	})

	gsap.to('.chat', {
		scrollTrigger: {
			trigger: '#contact',
			start: '65% center',
			end: '90% center',
			onEnter: () => {
				document
					.querySelector('.pin-spacer')
					.classList.add('hide__pin-spacer__index')
			},
			onLeave: () => {
				document
					.querySelector('.pin-spacer')
					.classList.remove('hide__pin-spacer__index')
			},
			onLeaveBack: () => {
				document
					.querySelector('.pin-spacer')
					.classList.remove('hide__pin-spacer__index')
			},
			onEnterBack: () => {
				document
					.querySelector('.pin-spacer')
					.classList.add('hide__pin-spacer__index')
			},
		},
	})
}
chat()
