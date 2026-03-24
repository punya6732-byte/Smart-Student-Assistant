alert("JS WORKING");
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
let words=[
    { word: "안녕하세요",
        meaning: "Hello",
        sentence: "안녕하세요! 만나서 반갑습니다."
    },
    {
        word: "감사합니다",
        meaning: "Thank you",
        sentence: "도와주셔서 감사합니다."
    },
    {
        word: "공부",
        meaning: "Study",
        sentence: "나는 매일 공부합니다."
    },
    {
        word: "학교",
        meaning: "School",
        sentence: "학교에 갑니다."
    }
];
function newWord(){
    let random=Math.floor(Math.random()*words.length);
    let selected=words[random];
    let text=selected.word + "-" + selected.meaning + "(" + selected.sentence + ")";
    document.getElementById("koreanWord").innerText=text;

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
document.getElementById("gpa").innerText="GPA:" + gpa;
}

function updateStreak(){
  let streak=parseInt(localStorage.getItem("streak"))||0;
  streak=streak + 1;

  localStorage.setItem("streak",streak);

  document.getElementById("streak").innerText=streak + "days";

}
function getSuggestion(){
    let tasks=JSON parse(localStorage.getItem("tasks"))||[];
    let streak=parseInt(localStorage.getItem("streak"))||0;
    let marks=document.getElementById ("marks").value;
let message="";
if (tasks.length ===0){
    message="You have no tasks.Start planning your study!";
}
else if (streak<2){
    message="Be consistent! Try to study daily.";
}
else if(marks && marks <50){
    message ="Your marks are low .Focus more on weak subjects.";
}
else{
    message="You are doing well,Stay consistent!";
}
document.getElementById("suggestion").innerText=message;
}

window.onload=function(){
    let tasks=JSON.parse(localStorage.getItem("tasks"))||[];
    tasks.forEach(task=>{
        let li=document.createElement("li");
        li.textContent=task;
        document.getElementById("taskList").appendChild(li);

    });
    let streak=parseInt(this.localStorage.getItem("streak"))||0;
    this.document.getElementById("streak").innerText=streak +"days";
};