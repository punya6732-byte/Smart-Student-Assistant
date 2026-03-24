function addtask(){
    let task =document.getElementById("task").value;
    let li=document.createElement("li");
    li.textContent=task;

    document.getElementById("taskList").appendChild(li);
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
