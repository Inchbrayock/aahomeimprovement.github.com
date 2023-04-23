const fadeInText = document.getElementById("fadeIn");

setTimeout(() => {
	fadeInText.style.opacity = "1";
}); // Adjust the time in milliseconds to change when the text fades in

window.addEventListener("scroll", function () {
	const header = document.querySelector("header");
	header.classList.toggle("scroll", window.scrollY > 0);
});

function scrollToAboutMe() {
	const element = document.querySelector(".aboutMe");
	const offset = element.offsetTop - 175;
	window.scrollTo({
		top: offset,
		behavior: "smooth",
	});
}

function scrollToContactMe() {
	const element = document.querySelector(".container");
	const offset = element.offsetTop - 250;
	window.scrollTo({
		top: offset,
		behavior: "smooth",
	});
}

// get all elements with the id "contact-me"
const elements = document.querySelectorAll("#slide-in");

// function to check if an element is in view with an offset
function isInViewport(element, offset) {
	const rect = element.getBoundingClientRect();
	return (
		rect.top >= -offset &&
		rect.left >= 0 &&
		rect.bottom <=
			(window.innerHeight || document.documentElement.clientHeight) + offset &&
		rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
}

// function to handle scroll event
function onScroll() {
	elements.forEach((element) => {
		if (isInViewport(element, 390)) {
			// adjust the offset as needed
			element.classList.add("visible");
			element.classList.remove("hidden");
		}
	});
}

// add event listener for scroll
window.addEventListener("scroll", onScroll);

// check if any of the elements are in view on page load
onScroll();
