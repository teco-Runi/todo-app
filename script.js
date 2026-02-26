const taskCounter = document.getElementById("task-counter");
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function updateCounter(){
    const tasks = document.querySelectorAll("#list-container li:not(.checked)");
    const count = tasks.length;

    if(count === 1){
        taskCounter.textContent = "1 task remaining";
    } else {
        taskCounter.textContent = `${count} tasks remaining`;
    }
}
function addTask(){
    if (inputBox.value === '') {
     alert("You must write something !")   
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBox.value ="";
    saveData();
     updateCounter(); 
}
listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");        
        saveData();
        updateCounter(); 
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData(); 
        updateCounter(); 
    }
}, false);
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
 function showTask(params) {
    listContainer.innerHTML = localStorage.getItem("data");
 }

 showTask();
const themeBtn = document.getElementById("theme-toggle");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌙";
    }
});