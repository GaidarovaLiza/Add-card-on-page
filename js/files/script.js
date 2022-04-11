const openBtn = document.getElementById('add-card'),
	bg = document.querySelector('.popup__wrapper'),
	content = document.querySelector('.popup__content'),
	closeBtn = document.querySelector('.content__close'),
	// items = document.getElementById('input'),
	btn = document.querySelector('.content__card-add-btn');

openBtn.addEventListener('click', (e) => {
	bg.classList.add('open');
	content.classList.add('open')
})

closeBtn.addEventListener('click', (e) => {
	bg.classList.remove('open');
	content.classList.remove('open')
})

document.addEventListener('click', (e) => {
	if (e.target == bg) {
		bg.classList.remove('open');
		content.classList.remove('open')
	}
})


//======================================================

function test() {
	let input1 = document.querySelector('.content__card-title-input')
	let input2 = document.querySelector('.content__card-img-alt-input')
	let input3 = document.querySelector('.content__card-img-url-input')
	let input4 = document.querySelector('.content__card-img-url-input')

	const collection = {
		img: input1.value,
		title: input2.value,
		discription: input3.value,
		coast: input4.value,
	}

	const addWrapper = document.createElement('div');
	addWrapper.classList.add('forma__wrapper');

	const divWrapper = document.querySelector('.forma');


	const img = document.createElement('div');
	img.classList.add('img-style');

	const title = document.createElement('div');
	title.classList.add('title-style');

	const discription = document.createElement('div');
	discription.classList.add('discription-style');

	const coast = document.createElement('div');
	coast.classList.add('coast-style');

	divWrapper.appendChild(addWrapper)
	addWrapper.appendChild(img)
	addWrapper.appendChild(title)
	addWrapper.appendChild(discription)
	addWrapper.appendChild(coast)

	const addCard = () => {
		img.append(collection.img)
		title.append(collection.title)
		discription.append(collection.discription)
		coast.append(collection.coast)
	}
	return addCard()
}


btn.addEventListener('click', () => {
	test()
	bg.classList.remove('open');
	content.classList.remove('open')
})

//============================================================

// const createCount = () => {
// 	let x = 0;

// 	function showTest() {d
// 		return x++
// 	}

// 	return showTest
// };
// const count = createCount();

// console.log(count()); // 1
// console.log(count()); // 2
// console.log(count()); // 3
// console.log(count()); // 4
