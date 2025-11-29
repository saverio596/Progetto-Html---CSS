document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

const textMultipleElements = document.querySelectorAll(".animate");

textMultipleElements.forEach((textElement, index) => {
let combinedText = "";

// Combina i nodi di testo
textElement.childNodes.forEach(child => {
if (child.nodeType === Node.TEXT_NODE || child.nodeType === Node.ELEMENT_NODE) {
combinedText += child.textContent.trim();
}
});

// Dividi in caratteri e avvolgi in <span>
const splitText = combinedText.split("").map(char => `<span>${char}</span>`).join("");
textElement.innerHTML = splitText;

const chars = textElement.querySelectorAll("span");

// Crea una timeline per ogni elemento con scrollTrigger personalizzato
gsap.timeline({
scrollTrigger: {
trigger: textElement,
start: "top 50%",
end: "bottom 50%",
scrub: true,
markers: false
}
}).from(chars, {
color: "#AAAAAA",
stagger: 1,
duration: 1
}, "+=0.5");
});	
});
