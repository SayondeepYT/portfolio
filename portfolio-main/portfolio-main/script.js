/* ==========================================
   LOADER
========================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    setTimeout(() => {

        loader.style.display = "none";

    }, 600);

});

/* ==========================================
   AOS
========================================== */

AOS.init({

    duration: 900,

    once: true,

    easing: "ease-in-out"

});

/* ==========================================
   TYPING EFFECT
========================================== */

new Typed(".typing", {

    strings: [

        "Computer Science Student",

        "Full Stack Developer",

        "Web Developer",

        "YouTuber",

        "Gamer",

        "Tech Enthusiast"

    ],

    typeSpeed: 70,

    backSpeed: 45,

    backDelay: 1800,

    loop: true

});

/* ==========================================
   CURSOR GLOW
========================================== */

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";

    glow.style.top = e.clientY + "px";

});

/* ==========================================
   SCROLL PROGRESS
========================================== */

const progressBar = document.querySelector(".scroll-progress");

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const height =

        document.documentElement.scrollHeight -

        document.documentElement.clientHeight;

    const progress = (scrollTop / height) * 100;

    progressBar.style.width = progress + "%";

});

/* ==========================================
   BACK TO TOP
========================================== */

const backTop = document.createElement("div");

backTop.className = "back-to-top";

backTop.innerHTML = '<i class="ri-arrow-up-line"></i>';

document.body.appendChild(backTop);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backTop.classList.add("show");

    }

    else {

        backTop.classList.remove("show");

    }

});

backTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* ==========================================
   ACTIVE NAVBAR
========================================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/* ==========================================
   DARK / LIGHT MODE
========================================== */

const themeBtn = document.getElementById("themeToggle");

const body = document.body;

const savedTheme = localStorage.getItem("theme");

if(savedTheme === "light"){

    body.classList.add("light");

    themeBtn.innerHTML='<i class="ri-sun-fill"></i>';

}

themeBtn.addEventListener("click",()=>{

    body.classList.toggle("light");

    if(body.classList.contains("light")){

        localStorage.setItem("theme","light");

        themeBtn.innerHTML='<i class="ri-sun-fill"></i>';

    }else{

        localStorage.setItem("theme","dark");

        themeBtn.innerHTML='<i class="ri-moon-fill"></i>';

    }

});


/* ==========================================
   MOBILE MENU
========================================== */

const menuBtn=document.querySelector(".menu-btn");

const nav=document.querySelector(".nav-links");

menuBtn.addEventListener("click",()=>{

    nav.classList.toggle("active");

});

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        nav.classList.remove("active");

    });

});


/* ==========================================
   NAVBAR BLUR ON SCROLL
========================================== */

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY>60){

        navbar.style.padding="12px 28px";

        navbar.style.background="rgba(10,15,30,.85)";

    }else{

        navbar.style.padding="15px 30px";

        navbar.style.background="rgba(255,255,255,.06)";

    }

});


/* ==========================================
   PROJECT CARD TILT
========================================== */

const cards=document.querySelectorAll(".project-card");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=((x/rect.width)-0.5)*12;

const rotateX=((y/rect.height)-0.5)*-12;

card.style.transform=`

perspective(1000px)

rotateX(${rotateX}deg)

rotateY(${rotateY}deg)

translateY(-10px)

`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="";

});

});


/* ==========================================
   GLASS CARD ANIMATION
========================================== */

const glassCards=document.querySelectorAll(".glass-card");

glassCards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.boxShadow="0 25px 70px rgba(96,165,250,.25)";

});

card.addEventListener("mouseleave",()=>{

card.style.boxShadow="";

});

});


/* ==========================================
   PARALLAX BACKGROUND
========================================== */

const blobs=document.querySelectorAll(".blob");

window.addEventListener("mousemove",(e)=>{

const x=e.clientX/window.innerWidth;

const y=e.clientY/window.innerHeight;

blobs.forEach((blob,index)=>{

const speed=(index+1)*20;

blob.style.transform=`
translate(${x*speed}px,${y*speed}px)
`;

});

});


/* ==========================================
   REVEAL ELEMENTS
========================================== */

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("fade-up");

}

});

},{threshold:.15});

document.querySelectorAll(

".project-card,.skill-card,.contact-card,.info-box"

).forEach(el=>observer.observe(el));


/* ==========================================
   COPY EMAIL
========================================== */

const emailCard=document.querySelector(

' a[href^="mailto"] '

);

if(emailCard){

emailCard.addEventListener("click",(e)=>{

e.preventDefault();

navigator.clipboard.writeText(

"sayondeepghosh@gmail.com"

);

emailCard.querySelector("p").textContent="Copied!";

setTimeout(()=>{

emailCard.querySelector("p").textContent=

"sayondeepghosh@gmail.com";

},2000);

});

}


/* ==========================================
   YEAR
========================================== */

const year=document.getElementById("year");

if(year){

year.textContent=new Date().getFullYear();

}


/* ==========================================
   EASTER EGG
========================================== */

let keys=[];

const secret="sayondeep";

window.addEventListener("keydown",(e)=>{

keys.push(e.key.toLowerCase());

keys=keys.slice(-secret.length);

if(keys.join("")===secret){

alert("🚀 Welcome, Sayondeep! Keep Building Amazing Things!");

}

});


/* ==========================================
   CONSOLE MESSAGE
========================================== */

console.log(

"%cWelcome to Sayondeep's Portfolio 🚀",

"font-size:22px;color:#38bdf8;font-weight:bold;"

);

console.log(

"%cInterested in the code? Let's connect!",

"color:#8b5cf6;font-size:15px;"

);