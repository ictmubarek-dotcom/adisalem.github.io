/*=========================================
        አዲስ አለም Dashboard
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    initializeHabits();
    updateQuote();
    updateReflectionStatus();
    updateStreak();

});

/*=========================================
            HABITS
=========================================*/

const habits = document.querySelectorAll(".habit");

function initializeHabits() {

    habits.forEach((habit, index) => {

        const saved = localStorage.getItem("habit_" + index);

        if (saved === "true") {

            habit.checked = true;

        }

        habit.addEventListener("change", () => {

            localStorage.setItem(

                "habit_" + index,

                habit.checked

            );

            updateProgress();

        });

    });

    updateProgress();

}

/*=========================================
        PROGRESS
=========================================*/

function updateProgress() {

    let completed = 0;

    habits.forEach(habit => {

        if (habit.checked) completed++;

    });

    const percent = Math.round(

        (completed / habits.length) * 100

    );

    document.getElementById("progressFill").style.width =

        percent + "%";

    document.getElementById("progressText").innerHTML =

        percent + "% Completed";

    document.getElementById("progress").innerHTML =

        percent + "%";

}

/*=========================================
        REFLECTION
=========================================*/

function updateReflectionStatus() {

    const reflection =

        localStorage.getItem("reflection");

    const status =

        document.getElementById("reflection");

    if (!status) return;

    if (reflection && reflection.trim() !== "") {

        status.innerHTML = "Yes ✅";

    } else {

        status.innerHTML = "No";

    }

}

/*=========================================
        DAILY QUOTE
=========================================*/

const quotes = [

"Small progress is still progress.",

"Discipline creates freedom.",

"A better future starts today.",

"Choose purpose over pleasure.",

"You are stronger than your excuses.",

"One good habit changes everything.",

"Protect your peace.",

"Don't count the days. Make the days count.",

"Your future self is watching.",

"Keep going. You're becoming stronger.",

"Allah loves those who keep trying.",

"Every sunrise is another opportunity."

];

function updateQuote(){

const quote=document.getElementById("daily-quote");

if(!quote) return;

const today=new Date().getDate();

quote.innerHTML=quotes[today % quotes.length];

}

/*=========================================
            STREAK
=========================================*/

function updateStreak(){

let streak=Number(

localStorage.getItem("streak")

)||0;

const streakElement=document.getElementById("streak");

if(streakElement){

streakElement.innerHTML=streak;

}

}

/*=========================================
        RESET HABITS
=========================================*/

function resetHabits(){

habits.forEach((habit,index)=>{

habit.checked=false;

localStorage.removeItem("habit_"+index);

});

updateProgress();

}

/*=========================================
        KEYBOARD SHORTCUT
=========================================*/

document.addEventListener("keydown",(event)=>{

if(event.key==="r" && event.ctrlKey){

event.preventDefault();

if(confirm("Reset today's habits?")){

resetHabits();

}

}

});

/*=========================================
        GREETING
=========================================*/

const hour=new Date().getHours();

let greeting="";

if(hour<12){

greeting="Good Morning ☀️";

}else if(hour<18){

greeting="Good Afternoon 🌿";

}else{

greeting="Good Evening 🌙";

}

const hero=document.querySelector(".dashboard-hero h1");

if(hero){

hero.innerHTML=greeting+", Mubarek 👋";

}