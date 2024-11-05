let btn = document.getElementById("btn")
let inp = document.getElementById("inp")
let lst = document.getElementById("lst")

let tasks = []

console.log(btn,inp,lst)
console.log(tasks)


btn.addEventListener("click", addTask)

function addTask(e){
    console.log(inp.value)

    newElement = document.createElement("li")
    newElement.innerHTML = "<input onclick=crossOutTask() type='checkbox'></input>" // Vet ikke åssen jeg kan få boksen foran
    newElement.innerHTML += inp.value
    lst.prepend(newElement)
    tasks.push({
        text: inp.value,
        element: newElement,
    })

    inp.value = ""



    let completedTasks = 0

    for (let i = 0; i < tasks.length; i++){
        //console.log(tasks[i])
        let li = tasks[i].element
        console.log(li)
        if (li.firstElementChild.checked) {
            completedTasks += 1
        }
    }

    let totalCompleted = document.getElementById("completed")
    totalCompleted.innerText = completedTasks + "/" + tasks.length + " completed"
    
    //lst.innerHTML += "<li>"+task+" <input type='checkbox'></input></li>"
}

// checkbox.addEventListener("click", addTask)

function crossOutTask(e){
    //console.log(e.target)

    console.log(tasks);
    
    let completedTasks = 0

    for (let i = 0; i < tasks.length; i++){
        //console.log(tasks[i])
        let li = tasks[i].element
        console.log(li)
        if (li.firstElementChild.checked) {
            li.style.textDecoration = "line-through"; 
            completedTasks += 1
        }
        else {
            li.style.textDecoration = "none"; 
        }
    }
    
    console.log(completedTasks)
    let totalCompleted = document.getElementById("completed")
    totalCompleted.innerText = completedTasks + "/" + tasks.length + " completed"

    
    
}
