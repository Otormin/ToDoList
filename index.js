const inputBox = document.getElementById("input-box")
const addBtn = document.getElementById("add-btn")
const ulLi = document.getElementById("ul-li") 



const content = []

addBtn.addEventListener("click", function(){
    content.push(inputBox.value)
    let list = ""

    for(let i = 0; i < content.length; i++){
        list = `<li>
        <h3 class="listStyle">${content[i]}</h3>
        <button class="done-btn">Done</button>
        <button class="remove-btn">Remove</button></li>`
    }

    ulLi.innerHTML += list

    inputBox.value = ""

    saveTasks()

    // Add event listeners after adding the elements to the DOM
    addEventListeners()

})


function addEventListeners() {
    const doneBtns = document.querySelectorAll(".done-btn");
    const removeBtns = document.querySelectorAll(".remove-btn");

    doneBtns.forEach( doneBtn => {
        doneBtn.addEventListener("click", function(){
            this.parentElement.classList.toggle("list");
            saveTasks()
        })
    })

    removeBtns.forEach( removeBtn => {
        removeBtn.addEventListener("click", function(){
            this.parentElement.remove();
            saveTasks()
        })
    })

}

function saveTasks()
{
localStorage.setItem("tasks", JSON.stringify(ulLi.innerHTML))
}

function displayTasks()
{
    ulLi.innerHTML = JSON.parse(localStorage.getItem("tasks"))
}
displayTasks()
addEventListeners()