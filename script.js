document.addEventListener('DOMContentLoaded', () => {
const cursor = document.querySelector('.cursor');
const links  = document.getElementsByTagName('a');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")

    mouseCoords(e)
		cursor.classList.remove('hidden')
})

function mouseCoords(e) {

    mouseX = e.pageX
    mouseY = e.pageY

}

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)

})

// document.addEventListener('hover', () => {
//     a.classList.add("active");

//     setTimeout(() => {
//         a.classList.remove("active");
//     }, 500)

// })

document.addEventListener('mouseout', () => {
		cursor.classList.add('hidden')
	})


    for(let i = 0; i < links.length; i++) {

		links[i].addEventListener('mouseover', () => {
			cursor.classList.add('active')
		})

		links[i].addEventListener('mouseout', () => {
			cursor.classList.remove('active')
		})

	}    

})