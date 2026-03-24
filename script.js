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
    document.getElementById("koreanWord").innerHTML="<b>"+ selected.word +"</b><br>"+ selected.meaning +"<br><i>"+ selected.sentence +"</i>";

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