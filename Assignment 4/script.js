/* Task  1.2 */
for (let i = 1; i<21; i+=1){
console.log(i);
}

/* Task  1.3 */
console.log('Task  1.3')

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
for (let i = 0; i< numbers.length; i++){
    if (numbers[i] % 3 == 0){
        console.log("eple")
    }
    else if(numbers[i] % 5 == 0){
        console.log("Kake")
    }
    else {
        console.log(numbers[i])
    }
}

/* Task  1.4 */
let t1 = document.getElementById("title")
t1.innerText = "Hello, Javascript"
/* Task  1.5 */
let mgc = document.getElementById("magic")

function changeDisplay () {
    console.log("Display changed")
    mgc.style.display = "none"

}

function changeVisibility () {
    mgc.style.visibility = "hidden"
}

function reset () {

    mgc.style.visibility = "visible"
    mgc.style.display = "block"
}

/* Task 1.6 */
const technologies = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'Python',
    'Java',
    'AJAX',
    'JSON',
    'React',
    'Angular',
    'Bootstrap',
    'Node.js'
];
let liste = document.getElementById("tech")
for (i = 0; i<technologies.length; i+=1){
    liste.innerHTML += "<li>" +technologies[i] + "</li>"
    
}
