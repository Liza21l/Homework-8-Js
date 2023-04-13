let username = prompt ("Enter username:") 
let NameEl = document.querySelector('#Name') 
NameEl.innerHTML = `Welcome, ${username}`

let noteStore = [
    {
        title: "Orders:",
        text1: "product: phone case",
        text: "praice: 5,42$"
    },
    {
        title: "Orders:",
        text1: "product: IPhone",
        text: "praice: 550$"
    },
    {
        title: "Orders:",
        text1: "product: Pizza",
        text: "praice: 2,50$"
    },

]

let notesList = document.querySelector('#notesList')

noteStore.forEach((note) => {
    notesList.innerHTML += `
        <div class="note">
            <h2>${note.title}</h2>
            <p>${note.text1}</p>
            <p>${note.text}</p>
        </div>
    `
})

let inputText = document.querySelector('#inputText')
let inputTitle = document.querySelector('#inputTitle')
let btnCreate = document.querySelector('#btnCreate')
const clickToCreate = () => {
    notesList.innerHTML += `
        <div class="note">
            <h2>${inputTitle.value}</h2>
            <p>${inputText1.value}</p>
            <p>${inputText.value}</p>
        </div>
    `
    inputTitle.value = ""
    inputText.value = ""
}
btnCreate.onclick = clickToCreate


