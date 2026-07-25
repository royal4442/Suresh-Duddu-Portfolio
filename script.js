
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});

// ===============================
// Smooth Scrolling
// ===============================

document.querySelectorAll('nav a').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior: 'smooth'
        });

    });

});


// ===============================
// Sticky Header Shadow
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";
        header.style.background = "#111827";

    } else {

        header.style.boxShadow = "none";

    }

});


// ===============================
// Active Navigation
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");

        }

    });

});


// ===============================
// Fade Animation
// ===============================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".project-card,.skill-card,.timeline-content,.education-card,.cert-card,.info-card").forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});


// ===============================
// Scroll To Top Button
// ===============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};


// ===============================
// Typing Effect
// ===============================

const words = [

"Data Quality Engineer",

"QA Automation Engineer",

"SDET",

"Python Developer"

];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.querySelector(".hero-left h2");

function typeEffect(){

    const currentWord = words[wordIndex];

    if(isDeleting){

        typingElement.textContent = currentWord.substring(0,charIndex--);

    }else{

        typingElement.textContent = currentWord.substring(0,charIndex++);

    }

    let speed = 120;

    if(isDeleting){

        speed = 60;

    }

    if(!isDeleting && charIndex === currentWord.length){

        speed = 1500;

        isDeleting = true;

    }

    if(isDeleting && charIndex === 0){

        isDeleting = false;

        wordIndex++;

        if(wordIndex === words.length){

            wordIndex = 0;

        }

    }

    setTimeout(typeEffect,speed);

}

typeEffect();


// ===============================
// Theme Toggle
// ===============================

const toggle = document.createElement("button");

toggle.innerHTML = "🌙";

toggle.id = "themeToggle";

document.body.appendChild(toggle);

let dark = true;

toggle.onclick = ()=>{

    if(dark){

        document.body.style.background="#ffffff";
        document.body.style.color="#111";

        toggle.innerHTML="☀";

        dark=false;

    }

    else{

        document.body.style.background="#0f172a";
        document.body.style.color="#fff";

        toggle.innerHTML="🌙";

        dark=true;

    }

};


// ===============================
// Console Welcome
// ===============================

console.log("Welcome to Suresh Duddu Portfolio 🚀");
