/*====================================
    ADIS ALEM APP
====================================*/

document.addEventListener("DOMContentLoaded", () => {

    scrollAnimation();

    smoothNavigation();

    createDarkMode();

});

/*====================================
    SCROLL ANIMATION
====================================*/

function scrollAnimation() {

    const elements = document.querySelectorAll(

        ".card, .about, .simple-section, .hero-image"

    );

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: .15

    });

    elements.forEach(element => {

        observer.observe(element);

    });

}

/*====================================
    SMOOTH ACTIVE MENU
====================================*/

function smoothNavigation() {

    const links = document.querySelectorAll(".nav-links a");

    links.forEach(link => {

        link.addEventListener("click", () => {

            links.forEach(item => item.classList.remove("active"));

            link.classList.add("active");

        });

    });

}

/*====================================
    DARK MODE
====================================*/

function createDarkMode() {

    const button = document.createElement("button");

    button.innerHTML = "🌙";

    button.className = "theme-btn";

    document.body.appendChild(button);

    button.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        button.innerHTML =

        document.body.classList.contains("dark")

        ? "☀️"

        : "🌙";

    });

}
/*====================================
    COUNTER ANIMATION
====================================*/

animateCounters();

function animateCounters(){

const counters=document.querySelectorAll(".counter");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=+counter.dataset.target;

let current=0;

const speed=target/100;

const update=()=>{

current+=speed;

if(current<target){

counter.innerText=Math.floor(current);

requestAnimationFrame(update);

}else{

counter.innerText=target+"+";

}

};

update();

observer.unobserve(counter);

}

});

});

counters.forEach(counter=>observer.observe(counter));

}
/*====================================
    SCROLL PROGRESS
====================================*/

window.addEventListener("scroll",()=>{

const winScroll=document.documentElement.scrollTop;

const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

const progress=(winScroll/height)*100;

document.getElementById("progress-bar").style.width=progress+"%";

});
/*====================================
    MOBILE MENU
====================================*/

const menu=document.querySelector(".menu-toggle");

const nav=document.querySelector(".nav-links");

menu.addEventListener("click",()=>{

nav.classList.toggle("active");

});

document.querySelectorAll(".nav-links a").forEach(link=>{

link.addEventListener("click",()=>{

nav.classList.remove("active");

});

});
/*====================================
    CURSOR GLOW
====================================*/

const glow=document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});
/*====================================
    DAILY QUOTES
====================================*/

const quotes=[

"Every small step today creates a stronger tomorrow.",

"Discipline is choosing what you want most over what you want now.",

"Your past does not define your future.",

"One good decision can change your entire life.",

"Progress is more important than perfection.",

"You are stronger than your urges.",

"Today's struggle can become tomorrow's strength.",

"Choose purpose over temporary pleasure."

];

const quote=document.getElementById("daily-quote");

if(quote){

const day=new Date().getDate();

quote.textContent=quotes[day % quotes.length];

}
/*==============================
JOURNAL MESSAGE
==============================*/

const saveBtn=document.getElementById("saveJournal");

if(saveBtn){

saveBtn.addEventListener("click",()=>{

const message=document.getElementById("savedMessage");

message.textContent="✅ Great job! Keep moving forward.";

message.style.color="#16a34a";

message.style.marginTop="20px";

});

}
/*====================================
    SMALL WINS
====================================*/

/*====================================
DAILY HABITS
====================================*/

const habits=document.querySelectorAll(".habit");

function updateProgress(){

let completed=0;

habits.forEach((habit,index)=>{

if(habit.checked){

completed++;

}

localStorage.setItem("habit"+index,habit.checked);

});

const percent=Math.round((completed/habits.length)*100);

document.getElementById("progressFill").style.width=percent+"%";

document.getElementById("progressText").innerHTML=

percent+"% Completed";

}

habits.forEach((habit,index)=>{

habit.checked=localStorage.getItem("habit"+index)==="true";

habit.addEventListener("change",updateProgress);

});

updateProgress();
/*====================================
SAVE REFLECTION
====================================*/

const journal=document.getElementById("journalText");

const save=document.getElementById("saveReflection");

const status=document.getElementById("journalStatus");

if(journal){

journal.value=localStorage.getItem("reflection") || "";

}

if(save){

save.addEventListener("click",()=>{

localStorage.setItem(

"reflection",

journal.value

);

status.innerHTML="💚 Your reflection has been saved.";

});
}
/*====================================
ENCOURAGEMENT BUTTON
====================================*/

const messages = [

"🌱 One decision can change your whole day.",

"💚 You are stronger than this urge.",

"✨ Progress is built one choice at a time.",

"🌅 A new beginning is always possible.",

"🙏 Allah sees your effort. Keep going.",

"🌿 Your future is worth protecting.",

"⭐ Don't quit. Your best days are still ahead."

];

const motivateBtn = document.getElementById("motivateBtn");

const motivationText = document.getElementById("motivationText");

if(motivateBtn){

motivateBtn.addEventListener("click",()=>{

const random=Math.floor(Math.random()*messages.length);

motivationText.innerHTML=messages[random];

});

}
/*====================================
PERSONAL DASHBOARD
====================================*/

function updateDashboard(){

const habits=document.querySelectorAll(".habit");

let completed=0;

habits.forEach(h=>{

if(h.checked){

completed++;

}

});

const percent=Math.round(

(completed/habits.length)*100

);

const habitPercent=document.getElementById("habitPercent");

if(habitPercent){

habitPercent.innerHTML=percent+"%";

}

const reflection=document.getElementById("journalText");

const reflectionStatus=document.getElementById("reflectionStatus");

if(reflectionStatus){

reflectionStatus.innerHTML=

reflection.value.trim()===""

?

"Empty"

:

"Saved ✅";

}

}

setInterval(updateDashboard,1000);
// ==============================
// Resources Accordion
// ==============================

const toggles = document.querySelectorAll(".resource-toggle");

toggles.forEach(toggle => {

    toggle.addEventListener("click", () => {

        const content = toggle.nextElementSibling;

        // Close all other sections
        document.querySelectorAll(".resource-content").forEach(item => {

            if(item !== content){

                item.style.display = "none";

            }

        });

        // Toggle current section
        if(content.style.display === "block"){

            content.style.display = "none";

        }else{

            content.style.display = "block";

        }

    });

});