// ======== INITIALIZATION APP ========
const timeline = gsap.timeline({ repeat: -1 })
const startTimeline = gsap.timeline()
const cursor = document.querySelector('.cursor')
const blocks = document.querySelectorAll('.container__gallery__block')

let duration = 0.25,
	stagger = duration,
	repeatDelay = 0.075 * (blocks.length - 1),
	previousGif = null

// ======== INITIALIZATION ROCKET VARIABLES ========
const rocketCenterXPosition =
	(document.documentElement.clientWidth +
		document.querySelector('.rockets').clientWidth) /
	2
const rocketLeftXPosition = -document.querySelector('.rockets').clientWidth
const rocketRightXPosition =
	document.documentElement.clientWidth +
	document.querySelector('.rockets').clientWidth
const rocketTopYPositionWithRocket =
	-document.querySelector('.rockets').clientHeight * 2
const rocketTopYPosition = 0
const rocketBottomYPosition =
	document.documentElement.clientHeight -
	document.querySelector('.rockets').clientHeight
const rocketBottomYPositionWithRocket =
	document.documentElement.clientHeight +
	document.querySelector('.rockets').clientHeight
const rocketCenterYPosition =
	(document.documentElement.clientHeight -
		document.querySelector('.rockets').clientHeight) /
	2
const rocketRightRotate = 0
const rocketLeftRotate = 180
const rocketTopRotate = -90
const rocketBottomRotate = 90

const rocketTopRightRotate = -45
const rocketTopLeftRotate =
	document.documentElement.clientWidth > 850 ? -145 : -135
const rocketBottomRightRotate = 45
const rocketBottomLeftRotate =
	document.documentElement.clientWidth > 850 ? 145 : 135

// ======== INITIALIZATION RUNNING | PORTAL VARIABLES ========
const runningCenterXPosition =
	(-document.documentElement.clientWidth +
		document.querySelector('.running').clientWidth) /
	2
const runningLeftXPosition =
	-document.documentElement.clientWidth -
	document.querySelector('.running').clientWidth
const runningRightXPosition = document.querySelector('.running').clientWidth

const runningTopYPositionWithRunning =
	-document.documentElement.clientHeight -
	document.querySelector('.running').clientHeight

const runningTopYPosition =
	-document.documentElement.clientHeight +
	document.querySelector('.running').clientHeight

const runningBottomYPosition = 0
const runningBottomYPositionWithRunning =
	document.querySelector('.running').clientHeight

const runningCenterYPosition =
	(-document.documentElement.clientHeight +
		document.querySelector('.running').clientHeight) /
	2

const runningRightRotate = 180
const runningLeftRotate = 0
const runningTopRotate = 90
const runningBottomRotate = -90

const runningTopRightRotate = 135
const runningTopLeftRotate = 45
const runningBottomRightRotate = -135
const runningBottomLeftRotate = -45

const runningPortalLeftXPosition =
	document.querySelector('.running-portal').clientWidth

const runningPortalRightXPosition =
	document.documentElement.clientWidth -
	document.querySelector('.running-portal').clientWidth +
	34

const runningPortalTopYPosition =
	-document.documentElement.clientHeight +
	document.querySelector('.running').clientHeight -
	10

const runningPortalBottomYPosition = 0

const runningPortalRightRotate = 0
const runningPortalLeftRotate = 180

// ======== INITIALIZATION CHAPPIC VARIABLES ========

const chappicLeftXPositionWithChappic =
	-document.querySelector('.chappic').clientWidth
const chappicRightXPositionWithChappic =
	document.documentElement.clientWidth +
	document.querySelector('.chappic').clientWidth
const chappicLeftXPosition = -document.querySelector('.chappic').clientWidth / 2
const chappicRightXPosition =
	document.documentElement.clientWidth -
	document.querySelector('.chappic').clientWidth / 2

const chappicPortalRightRotate = 45
const chappicPortalLeftRotate = -45

// ======== INITIALIZATION ROTATE VARIABLES ========
const rotateElementsTopYPositionWithRotateElements = -document.querySelector(
	'.rotate__elements-container'
).clientHeight
const rotateElementsBottomYPositionWithRotateElements =
	document.documentElement.clientHeight +
	document.querySelector('.rotate__elements-container').clientHeight

// ======== INITIALIZATION MOUSE LISTENER ========
document.body.addEventListener('mousemove', onMouseMove)

function onMouseMove(e) {
	gsap.to(cursor, 0.0125, {
		x: e.pageX - 5,
		y: e.pageY - 5,
	})
}

// ======== GSAP FUNCTIONS ========
gsap.from('.container__gallery__block', 5, {
	scale: 0,
	top: '50%',
	left: '50%',
	transform: 'translateZ(-200px)',
	stagger: {
		each: duration,
		repeat: -1,
		repeatDelay: repeatDelay,
	},
})

blocks.forEach(block => {
	block.addEventListener('click', event => {
		const x = event.clientX
		const y = event.clientY

		if (previousGif) {
			previousGif.remove()
		}

		const gif = document.createElement('img')
		gif.src = './dist/images/gifs/gif-animation-fire.gif'
		gif.style.position = 'absolute'
		gif.style.left = `${x - 100}px`
		gif.style.top = `${y - 100}px`
		gif.style.transform = 'scale(1)'
		gif.style.pointerEvents = 'none'

		document.body.appendChild(gif)

		setTimeout(() => {
			gif.src = ''
		}, 500)

		previousGif = gif

		block.style.display = 'none'

		setTimeout(() => {
			block.style.display = 'block'
		}, 5000)
	})
})

// ======== GSAP START FUNCTION ========

function startAnimation() {
	startTimeline
		.from('.container__menu__title', 1, {
			y: -50,
			opacity: 0,
			ease: 'power2.inOut',
		})
		.from('.container__menu__path', 1, {
			scale: 0,
			opacity: 0,
			ease: 'power2.inOut',
		})
		.from('.container__menu__content p', 1, {
			scale: 0,
			opacity: 0,
			ease: 'power2.inOut',
		})
		.to('.container__menu__button', 1, {
			opacity: 1,
			ease: 'power2.inOut',
		})
}

startAnimation()

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
	.addActor('container__menu__path-id', { speed: 0.8, accuracy: 0.6 })
	.addScene('container__menu__path-id:c:\\work\\daniel', 1000)
	.addScene('container__menu__path-id:c:\\hamster\\alena', 1000)
	.addScene('container__menu__path-id:c:\\konyaevo\\savely', 1000)
	.addScene('container__menu__path-id:c:\\poco\\maxim', 1000)
	.addScene('container__menu__path-id:c:\\gym\\roman', 1000)
	.addScene('container__menu__path-id:c:\\people\\others', 1000)
	.addScene('container__menu__path-id:c:\\<3', 1000)
	.addScene(theater.replay.bind(theater))

// ======== GSAP ANIMATION ELEMENTS ========

function animation() {
	timeline
		// rockets animation
		.to('.rockets', 3, {
			x: rocketRightXPosition,
			y: rocketTopYPosition,
			ease: 'power2.inOut',
		})
		.to('.rockets', 0.5, {
			rotate: `${rocketBottomLeftRotate}deg`,
			ease: 'power2.inOut',
		})
		.to('.rockets', 6, {
			x: rocketLeftXPosition,
			y: rocketBottomYPosition,
			ease: 'power2.inOut',
		})
		.to('.rockets', 0.5, {
			rotate: `${rocketRightRotate}deg`,
			ease: 'power2.inOut',
		})
		.to('.rockets', 3, {
			x: rocketRightXPosition,
			y: rocketBottomYPosition,
			ease: 'power2.inOut',
		})
		.to('.rockets', 0.5, {
			rotate: `${rocketTopLeftRotate}deg`,
			ease: 'power2.inOut',
		})
		.to('.rockets', 6, {
			x: rocketLeftXPosition,
			y: rocketTopYPosition,
			ease: 'power2.inOut',
		})
		.to('.rockets', 0.5, {
			y: rocketCenterYPosition,
			rotate: `${rocketRightRotate}deg`,
			ease: 'power2.inOut',
		})
		.to('.rockets', 3, {
			x: rocketRightXPosition,
			ease: 'power2.inOut',
		})
		.to('.rockets', 0.5, {
			rotate: `${rocketLeftRotate}deg`,
			ease: 'power2.inOut',
		})
		.to('.rockets', 3, {
			x: rocketCenterXPosition,
			ease: 'power2.inOut',
		})
		.to('.rockets', 0.5, {
			rotate: `${rocketBottomRotate}deg`,
			ease: 'power2.inOut',
		})
		.to('.rockets', 2, {
			y: rocketBottomYPositionWithRocket,
			ease: 'power2.inOut',
		})
		.to('.rockets', 0.5, {
			rotate: `${rocketTopRotate}deg`,
			ease: 'power2.inOut',
		})
		.to('.rockets', 6, {
			y: rocketTopYPositionWithRocket,
			ease: 'power2.inOut',
		})
		// running animation
		.from('.running-portal img', 0.5, {
			scale: 0,
			opacity: 0,
			ease: 'power2.inOut',
		})
		.to('.running', 5, {
			x: runningLeftXPosition,
			y: runningBottomYPosition,
			ease: 'power0',
		})
		.to(
			'.running',
			1,
			{
				scale: 0.1,
				opacity: 0.1,
				ease: 'power2.inOut',
			},
			'-=1'
		)
		.to(
			'.running-portal',
			0.3,
			{
				scale: 1.5,
				opacity: 1,
				ease: 'power2.inOut',
			},
			'-=1'
		)
		.to(
			'.running-portal',
			0.5,
			{
				scale: 0.1,
				opacity: 0.1,
				ease: 'power2.inOut',
			},
			'-=0.2'
		)
		.to('.running-portal', 0.1, {
			x: runningPortalRightXPosition,
			y: runningPortalTopYPosition,
			rotate: runningPortalLeftRotate,
			ease: 'power0',
		})
		.to('.running-portal', 0.5, {
			scale: 1,
			opacity: 1,
			ease: 'power2.inOut',
		})
		.to('.running', 0.5, {
			y: runningTopYPosition,
			rotate: `${runningRightRotate}deg`,
			ease: 'power0',
		})
		.to('.running', 1, {
			scale: 1,
			opacity: 1,
			ease: 'power2.inOut',
		})
		.to('.running', 5, {
			x: runningRightXPosition,
			ease: 'power0',
		})
		.to(
			'.running',
			1.4,
			{
				scale: 0.1,
				opacity: 0.1,
				ease: 'power2.inOut',
			},
			'-=1.4'
		)
		.to(
			'.running-portal',
			0.3,
			{
				scale: 1.5,
				opacity: 1,
				ease: 'power2.inOut',
			},
			'-=1'
		)
		.to(
			'.running-portal',
			1,
			{
				scale: 0.1,
				opacity: 0.1,
				ease: 'power2.inOut',
			},
			'-=0.4'
		)
		// rotateElements animation
		.to('#rotate__elements-container-1', 0.5, {
			opacity: 1,
			ease: 'power0',
		})
		.to('#rotate__elements-container-1', 5, {
			y: rotateElementsBottomYPositionWithRotateElements,
			ease: 'power0',
		})
		.to('#rotate__elements-container-2', 0.5, {
			opacity: 1,
			ease: 'power0',
		})
		.to('#rotate__elements-container-2', 5, {
			y: rotateElementsBottomYPositionWithRotateElements,
			ease: 'power0',
		})
		.to('#rotate__elements-container-3', 0.5, {
			opacity: 1,
			ease: 'power0',
		})
		.to('#rotate__elements-container-3', 5, {
			y: rotateElementsBottomYPositionWithRotateElements,
			ease: 'power0',
		})
		// chappic animation
		.to('.chappic', 0.5, {
			x: chappicLeftXPositionWithChappic,
			ease: 'power0',
		})
		.to('.chappic', 0.5, {
			opacity: 1,
			ease: 'power0',
		})
		.to('.chappic', 3, {
			x: chappicLeftXPosition,
			ease: 'power2.inOut',
		})
		.to('.chappic', 0.5, {
			x: chappicLeftXPositionWithChappic,
			ease: 'power2.inOut',
		})
		.to('.chappic', 0.5, {
			opacity: 0,
			ease: 'power0',
		})
		.to('.chappic', 0.5, {
			x: chappicRightXPositionWithChappic,
			ease: 'power0',
		})
		.to('.chappic', 0.5, {
			opacity: 1,
			ease: 'power0',
		})
		.to('.chappic', 3, {
			x: chappicRightXPosition,
			rotate: chappicPortalLeftRotate,
			ease: 'power2.inOut',
		})
		.to('.chappic', 0.5, {
			x: chappicRightXPositionWithChappic,
			rotate: chappicPortalRightRotate,
			ease: 'power2.inOut',
		})
}

animation()
