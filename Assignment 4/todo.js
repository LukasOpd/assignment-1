let btn = document.getElementById("btn")
let inp = document.getElementById("inp")
let lst = document.getElementById("lst")

console.log(btn,inp,lst)


btn.addEventListener("click", addTask)

function addTask(e){
    let task = inp.value
    console.log(task)

    newElement = document.createElement("li")
    newElement.innerText = task
    newElement.innerHTML += "<input type='checkbox'></input>" // Vet ikke åssen jeg kan få boksen foran
    lst.prepend(newElement)
    
    //lst.innerHTML += "<li>"+task+" <input type='checkbox'></input></li>"
}
