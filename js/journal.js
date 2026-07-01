/*====================================
        DAILY JOURNAL
====================================*/

document.addEventListener("DOMContentLoaded",()=>{

loadJournal();

showDate();

});

const gratitude=document.getElementById("gratitude");

const lesson=document.getElementById("lesson");

const goal=document.getElementById("goal");

const save=document.getElementById("saveJournal");

const message=document.getElementById("savedMessage");

save.addEventListener("click",()=>{

localStorage.setItem("gratitude",gratitude.value);

localStorage.setItem("lesson",lesson.value);

localStorage.setItem("goal",goal.value);

message.innerHTML="💚 Reflection Saved Successfully";

});

function loadJournal(){

gratitude.value=localStorage.getItem("gratitude")||"";

lesson.value=localStorage.getItem("lesson")||"";

goal.value=localStorage.getItem("goal")||"";

}

function showDate(){

const date=new Date();

document.getElementById("todayDate").innerHTML=

date.toDateString();

}

document.querySelectorAll(".mood").forEach(btn=>{

btn.addEventListener("click",()=>{

document.querySelectorAll(".mood")

.forEach(b=>b.classList.remove("selected"));

btn.classList.add("selected");

localStorage.setItem("mood",btn.innerHTML);

});

});

const savedMood=localStorage.getItem("mood");

if(savedMood){

document.querySelectorAll(".mood").forEach(btn=>{

if(btn.innerHTML===savedMood){

btn.classList.add("selected");

}

});

}