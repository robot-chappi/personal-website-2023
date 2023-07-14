// ======== INITIALIZATION APP ========
const timeline = gsap.timeline()
const buttonTimeline = gsap.timeline({ repeat: -1 })

// ======== INITIALIZATION CURSOR ========
let mouseX = 0,
	mouseY = 0,
	posX = 0,
	posY = 0

const cursor = document.getElementById('cursor')
const follower = document.getElementById('aura')

function mouseCoords(e) {
	mouseX = e.pageX
	mouseY = e.pageY
}

function noscroll() {
	window.scrollTo(0, 0)
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

window.addEventListener('mousemove', event => {
	mouseCoords(event)
	cursor.classList.remove('hidden')
	follower.classList.remove('hidden')
})

window.addEventListener('mouseout', () => {
	cursor.classList.add('hidden')
	follower.classList.add('hidden')
})

// ======== START ANIMATION ========

function startAnimation() {
	timeline
		.from('.container__nav-1', 1, {
			scale: 0,
			ease: 'power2.inOut',
		})
		.from(
			'.container__nav-2',
			1,
			{
				scale: 0,
				ease: 'power2.inOut',
			},
			'-=0.5'
		)
		.from(
			'.container__nav-3',
			1,
			{
				scale: 0,
				ease: 'power2.inOut',
			},
			'-=0.5'
		)
		.from(
			'.col-1',
			1,
			{
				scale: 0,
				ease: 'power2.inOut',
			},
			'-=0.5'
		)
		.from(
			'.col-2',
			1,
			{
				scale: 0,
				ease: 'power2.inOut',
			},
			'-=0.5'
		)
}

startAnimation()

// ======== BUTTON ANIMATION ========

function buttonAnimation() {
	buttonTimeline
		.to('#carousel__btn-1', 1, {
			y: 10,
			ease: 'power2.inOut',
		})
		.to('#carousel__btn-1', 1, {
			y: -10,
			ease: 'power2.inOut',
		})
		.to('#carousel__btn-1', 1, {
			y: 0,
			ease: 'power2.inOut',
		})
		.to('#carousel__btn-1', 1, {
			x: 10,
			ease: 'power2.inOut',
		})
		.to('#carousel__btn-1', 1, {
			x: -10,
			ease: 'power2.inOut',
		})
		.to('#carousel__btn-1', 1, {
			x: 0,
			ease: 'power2.inOut',
		})
		.to('#carousel__btn-1', 1, {
			rotate: 45,
			ease: 'power2.inOut',
		})
		.to('#carousel__btn-2', 1, {
			y: 10,
			ease: 'power2.inOut',
		})
		.to('#carousel__btn-2', 1, {
			y: -10,
			ease: 'power2.inOut',
		})
		.to('#carousel__btn-2', 1, {
			y: 0,
			ease: 'power2.inOut',
		})
		.to('#carousel__btn-2', 1, {
			x: 10,
			ease: 'power2.inOut',
		})
		.to('#carousel__btn-2', 1, {
			x: -10,
			ease: 'power2.inOut',
		})
		.to('#carousel__btn-2', 1, {
			x: 0,
			ease: 'power2.inOut',
		})
		.to('#carousel__btn-2', 1, {
			rotate: -45,
			ease: 'power2.inOut',
		})
		.to('#carousel__btn-1', 1, {
			rotate: 0,
			ease: 'power2.inOut',
		})
		.to('#carousel__btn-2', 1, {
			rotate: 0,
			ease: 'power2.inOut',
		})
}

buttonAnimation()
