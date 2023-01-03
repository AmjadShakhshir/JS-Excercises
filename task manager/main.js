let inputField = document.querySelector(".input");
let submitBtn = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");
let taskObj = [];


inputField.onblur = function() {
    window.sessionStorage.setItem("tasks", inputField.value);
};

if (window.sessionStorage.getItem("tasks")){
    inputField.value = window.sessionStorage.getItem("tasks");
}

if (window.localStorage.getItem("tasks")){
    let tasksRetreiver = JSON.parse(window.localStorage.getItem("tasks"));
    tasksRetreiver.map((task) => {
        index = Object.keys(task);
        createTask(task,index);
    });

}


function createTask(tasksText = "", taskIndex = 0){
    let taskSpanText = document.createTextNode(tasksText.title);
    let addTasksDiv = document.createElement("div");
    let taskSpan = document.createElement("span");
    let taskSpanPara = document.createElement("p");
    let addTaskSpanBtn = document.createElement("button");

    addTaskSpanBtn.textContent = "Delete";
    addTasksDiv.appendChild(taskSpan);
    taskSpan.appendChild(taskSpanPara);
    taskSpan.appendChild(addTaskSpanBtn);
    taskSpanPara.appendChild(taskSpanText);

    addTaskSpanBtn.addEventListener("click", () =>{
        console.table(tasksText);

        /* let c = JSON.parse(window.localStorage.getItem("tasks"));
        if (c.some(e => e.id === tasksText.id)){
            console.log(taskIndex);
            c = c.splice(taskIndex,1);
            window.localStorage.setItem("tasks", JSON.stringify(c));
        }
        console.log(c);
        addTasksDiv.remove(); */
    });

    document.body.appendChild(addTasksDiv);
}

function addTask() {
    if(inputField.value !== ""){
        taskObj.push({id:Date.now(), title: inputField.value});
        //console.log(taskObj);
        //console.log(Object.values(taskObj[counter]));
        window.localStorage.setItem("tasks", JSON.stringify(taskObj));
        let c = JSON.parse(window.localStorage.getItem("tasks"));
       // console.log(c[counter][counter].id);
       // console.log(taskObj.indexOf(c[counter][counter].id));
    }
}

submitBtn.addEventListener("click", ()=>{
    addTask();
    createTask();

});

