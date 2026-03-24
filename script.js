function addtask(){
    let task =document.getElementById("task").value;
    if (task ===" ") return;
    let li=document.createElement("li");
    li.textContent=task;
    
    document.getElementById("taskList").appendChild(li);
    savetask(task);
    document.getElementById("task").value=" ";
}
function saveTask(task){
    let tasks=JSON.parse(localStorage.getItem("tasks"))||[];
    tasks.push(task);
    localStorage.setItem("tasks",JSON.stringify(tasks));
}
let words=["안녕하세요 (Hello)", "감사합니다 (Thank you)", "사랑해요 (I love you)", "공부 (Study)"];
function newWord(){
    let random=Math.floor(Math.random()*words.length);
    document.getElementById("koreanWord").textContent=words[random];

}

let quotes=[
    "Success is not final,keep going!",
    "Study now,shine later.",
    "Dream big,work hard.",
    "Your future is built today."
];

function newQuote(){
    let random=Math.floor(Math.random()*quotes.length);
    document.getElementById("quote").textContent=quotes[random];
}

function calculateGPA(){
    let marks=document.getElementById("marks").value;
    if (marks ===" ")return;
    let gpa =(marks/10).toFixed(2);
document.getElementById("gpa").textContent="GPA:" +gpa;
}

function updateStreak(){
    let streak=localStorage.getItem("streak")||0;
    streak++;
    localStorage.setItem("streak").textContent=streak +" days";

}

window.onlosd=function(){
    let tasks=JSON.parse(localStorage.getItem("tasks"))||[];
    tasks.forEach(task=>{
        let li=document.createElement("li");
        li.textContent=task;
        document.getElementById("taskList").appendChild(li);

    });
    let streak=localStorage.getItem("streak").textContent=streak +" days";
};