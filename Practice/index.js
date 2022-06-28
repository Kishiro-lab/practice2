// get DOM
const addBtn = document.getElementById("addBtn");
const lists = document.getElementById("lists");

// difine Methods
function addList(user){
    const list = document.createElement("li");
    list.innerText = " id:" + user.id + " name: " + user.name;
    lists.appendChild(list);
}

async function getUsers(){
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();  
    return users;
}

async function listUsers(){
    const users = await getUsers();
    users.forEach(addList);
}

// add Events
window.addEventListener("load", listUsers);
addBtn.addEventListener("click", listUsers);
