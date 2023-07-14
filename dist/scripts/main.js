// ======== INITIALIZATION GSAP ========
gsap.registerPlugin(ScrollTrigger)
const tl2 = gsap.timeline()
const mainMM = gsap.matchMedia()

// ======== DEFAULT SETTINGS ========
document.querySelectorAll('.nav__box-lines__link a').forEach(i => {
	i.addEventListener('click', () => {
		const navBtn = document.getElementById('navbar__menu-toggle__btn')
		setTimeout(() => {
			navBtn.classList.toggle('active')
			tl.reversed(!tl.reversed())
		}, 1000)
	})
})

// ======== INITIALIZATION CURSOR ========
let mouseX = 0,
	mouseY = 0,
	posX = 0,
	posY = 0

const cursor = document.getElementById('cursor')
const follower = document.getElementById('aura')
const links = document.getElementsByTagName('a')
const btns = document.getElementsByTagName('button')
const hoverPlaces = document.querySelectorAll('.hover-place')

function mouseCoords(e) {
	mouseX = e.pageX
	mouseY = e.pageY
}

gsap.to({}, 0.01, {
	repeat: -1,
	onRepeat: () => {
		posX += (mouseX - posX) / 5
		posY += (mouseY - posY) / 5

		gsap.set(cursor, {
			css: {
				left: mouseX,
				top: mouseY,
			},
		})

		gsap.set(follower, {
			css: {
				left: posX - 24,
				top: posY - 24,
			},
		})
	},
})

mainMM.add('(min-width: 700px)', () => {
	gsap.utils.toArray('label.hero').forEach(hero => {
		ScrollTrigger.create({
			trigger: hero,
			start: 'top 30%',
			onEnter: () => hero.classList.add('active-hero', 'glitch', 'layers'),
			onLeaveBack: () =>
				hero.classList.remove('active-hero', 'glitch', 'layers'),
		})
	})
})

// ======== MEDIA HERO SECTION ========
mainMM.add('(max-width: 700px)', () => {
	gsap.utils.toArray('label.hero').forEach(hero => {
		ScrollTrigger.create({
			trigger: hero,
			start: 'top bottom',
			onEnter: () => hero.classList.add('active-hero', 'glitch', 'layers'),
			onLeaveBack: () =>
				hero.classList.remove('active-hero', 'glitch', 'layers'),
		})
	})
})

gsap.utils.toArray('span.hero').forEach(hero => {
	ScrollTrigger.create({
		trigger: hero,
		start: 'top 60%',
		onEnter: () => hero.classList.add('active-hero', 'glitch', 'layers'),
		onLeaveBack: () => hero.classList.remove('active-hero', 'glitch', 'layers'),
	})
})

window.addEventListener('mousemove', event => {
	mouseCoords(event)
	cursor.classList.remove('hidden')
	follower.classList.remove('hidden')
})

window.addEventListener('mouseout', () => {
	cursor.classList.add('hidden')
	follower.classList.add('hidden')
})

for (let i = 0; i < links.length; i++) {
	links[i].addEventListener('mouseover', () => {
		cursor.classList.add('active')
		follower.classList.add('active')
	})

	links[i].addEventListener('mouseout', () => {
		cursor.classList.remove('active')
		follower.classList.remove('active')
	})
}

for (let i = 0; i < btns.length; i++) {
	btns[i].addEventListener('mouseover', () => {
		cursor.classList.add('active')
		follower.classList.add('active')
	})

	btns[i].addEventListener('mouseout', () => {
		cursor.classList.remove('active')
		follower.classList.remove('active')
	})
}

for (let i = 0; i < hoverPlaces.length; i++) {
	hoverPlaces[i].addEventListener('mouseover', () => {
		cursor.classList.add('active')
		follower.classList.add('active')
	})

	hoverPlaces[i].addEventListener('mouseout', () => {
		cursor.classList.remove('active')
		follower.classList.remove('active')
	})
}

// ======== REVEAL ANIMATION ========
gsap.to('.header-wrapper', {
	opacity: 0,
	delay: 1.5,
	duration: 3,
	ease: 'power2.inOut',
})

function revealSite() {
	tl2.to('.pre-loader', 1, {
		opacity: 0,
		display: 'none',
		ease: 'power2.inOut',
	})

	tl2.to(
		'.header-row',
		0.8,
		{
			top: '0',
			ease: 'power4.inOut',
			stagger: {
				amount: 0.2,
			},
		},
		'-=1.2'
	)

	tl2.from(
		'.navbar > *',
		2,
		{
			y: 40,
			opacity: 0,
			ease: 'power4.inOut',
			stagger: {
				amount: 0.2,
			},
		},
		'-=1'
	)

	tl2.from(
		'header#home .central__content__text #name__1',
		1,
		{
			y: 100,
			opacity: 0,
			ease: 'power4.inOut',
		},
		'-=1.4'
	)

	tl2.from(
		'header#home .central__content__text #name__2',
		1,
		{
			y: 100,
			opacity: 0,
			ease: 'power4.inOut',
		},
		'-=1.2'
	)

	tl2.from(
		'.central__content__images img',
		1,
		{
			y: -100,
			opacity: 0,
			ease: 'power4.inOut',
		},
		'-=1.2'
	)

	tl2.from(
		'header#home .central__content__text #name__3',
		1,
		{
			y: 100,
			opacity: 0,
			ease: 'power4.inOut',
		},
		'-=1'
	)

	tl2.from(
		'div#social-links__wrapper__1',
		1,
		{
			y: 100,
			opacity: 0,
			ease: 'power4.inOut',
		},
		'-=0.9'
	)

	tl2.from(
		'div#social-links__wrapper__2',
		1,
		{
			y: 100,
			opacity: 0,
			ease: 'power4.inOut',
		},
		'-=0.8'
	)

	tl2.from(
		'div#social-links__wrapper__3',
		1,
		{
			y: 100,
			opacity: 0,
			ease: 'power4.inOut',
		},
		'-=0.7'
	)

	tl2.from(
		'.qr-code-btn-class',
		1,
		{
			opacity: 0,
			ease: 'power4.inOut',
		},
		'-=0.6'
	)

	tl2.from(
		'div.chat',
		1,
		{
			x: 500,
			opacity: 0,
			ease: 'power4.inOut',
		},
		'-=0.4'
	)

	tl2.from(
		'div.scroll-down__wrapper',
		1,
		{
			y: -500,
			opacity: 0,
			ease: 'elastic.inOut',
		},
		'-=0.4'
	)
}

tl2
	.to('.header > h1', 2, {
		top: 0,
		ease: 'power3.inOut',
		stagger: {
			amount: 0.3,
		},
	})
	.to('.pre-loader-btn', 0.3, {
		opacity: 1,
		delay: 2,
	})

// revealSite()
