const html = document.querySelector("html")
const switchButton = document.querySelector(".switch")

const img = document.querySelector(".avatar img")

switchButton.addEventListener("click", () => {
	html.classList.toggle("light")

	if (html.classList.contains("light")) {
		img.src = "assets\\sergio.png"
	} else {
		img.src = "assets\\sergio-light.png"
	}
})
