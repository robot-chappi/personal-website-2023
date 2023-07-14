// ======== INITIALIZATION VARIABLES EMAIL JS ========
const button = document.querySelector('.contact__submitbtn')
const PUBLIC_KEY = ''
const SERVICE_ID = ''
const TEMPLATE_ID = ''

let countErrors = 0

// ======== INITIALIZATION FUNCTIONS EMAIL JS ========
function initEmailJs() {
	emailjs.init(PUBLIC_KEY)
}

function resetFields() {
	document.getElementById('contact__input-element__name').value = null
	document.getElementById('contact__input-element__email').value = null
	document.getElementById('contact__input-element__subject').value = null
	document.getElementById('contact__textarea-element__message').value = null
}

function validate() {
	const elementName = document.getElementById('contact__input-element__name')
	const elementEmail = document.getElementById('contact__input-element__email')
	const elementSubject = document.getElementById(
		'contact__input-element__subject'
	)
	const elementMessage = document.getElementById(
		'contact__textarea-element__message'
	)

	const emailPattern = /^\S+@\S+\.\S+$/
	const namePattern = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/
	const subjectPattern = /^[a-z]{5,}$/
	const messagePattern = /^[a-z]{30,}$/

	if (!elementName.value.match(namePattern)) {
		countErrors++
		document
			.getElementById('contact__input-label__name')
			.classList.remove('close')
	}

	if (!elementEmail.value.match(emailPattern)) {
		countErrors++
		document
			.getElementById('contact__input-label__email')
			.classList.remove('close')
	}

	if (!elementSubject.value.match(subjectPattern)) {
		countErrors++
		document
			.getElementById('contact__input-label__subject')
			.classList.remove('close')
	}

	if (!elementMessage.value.match(messagePattern)) {
		countErrors++
		document
			.getElementById('contact__textarea-label__message')
			.classList.remove('close')
	}

	if (countErrors > 0) {
		button.classList.add('error')
		setTimeout(() => {
			document
				.getElementById('contact__input-label__name')
				.classList.add('close')
			document
				.getElementById('contact__input-label__email')
				.classList.add('close')
			document
				.getElementById('contact__input-label__subject')
				.classList.add('close')
			document
				.getElementById('contact__textarea-label__message')
				.classList.add('close')
			button.classList.remove('error')
			countErrors = 0
		}, 6000)
		return false
	}

	return true
}

// ======== STARTING EMAIL JS ========
initEmailJs()

button.addEventListener('click', () => {
	if (countErrors === 0) {
		const validation = validate()
		if (validation) {
			emailjs
				.send(SERVICE_ID, TEMPLATE_ID, {
					name: document.getElementById('contact__input-element__name').value,
					email: document.getElementById('contact__input-element__email').value,
					subject: document.getElementById('contact__input-element__subject')
						.value,
					message: document.getElementById('contact__textarea-element__message')
						.value,
				})
				.then(() => {
					button.classList.add('success')
					setTimeout(() => {
						button.classList.remove('success')
						resetFields()
					}, 3000)
				})
		}
	}
})
