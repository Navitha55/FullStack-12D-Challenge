const URL = "https://jsonplaceholder.typicode.com/users";
let users = [];

async function getData() {
    try {
        const response = await fetch(URL);
        users = await response.json();
        display(users);
    } catch (error) {
        console.error("Error fetching users:", error);
    }
}

function display(data) {
    const userList = document.getElementById("user-list");
    if (!userList) return;

    userList.innerHTML = "";

    data.forEach((user, index) => {
        const row = document.createElement("div");
        row.classList.add("container");
        row.dataset.id = user.id;

        row.innerHTML = `<div class="text">${index + 1}. ${user.name}</div><div class="wrapper"><div class="CTA btn-update"><button class="links btn-raw update-btn">Update</button></div><div class="CTA btn-delete"><button class="links btn-raw delete-btn">Delete</button></div></div>`;

        row.querySelector(".update-btn").addEventListener("click", function () {
            showUpdateInput(user.id, row);
        });

        row.querySelector(".delete-btn").addEventListener("click", function () {
            deleteObj(user.id);
        });

        userList.appendChild(row);

        if (index < data.length - 1) {
            const divider = document.createElement("hr");
            divider.classList.add("row-divider");
            userList.appendChild(divider);
        }
    });
}

function deleteObj(id) {
    users = users.filter((user) => user.id !== id);
    display(users);
}

function showUpdateInput(id, row) {
    const user = users.find((user) => user.id === id);
    if (!user) return;

    const index = users.findIndex((user) => user.id === id);
    const textDiv = row.querySelector(".text");
    const updateButton = row.querySelector(".update-btn");

    textDiv.innerHTML = `${index + 1}. <input type="text" class="edit-input" value="${user.name}">`;

    updateButton.textContent = "Save";

    updateButton.replaceWith(updateButton.cloneNode(true));

    const saveButton = row.querySelector(".update-btn");

    saveButton.addEventListener("click", function () {
        saveUpdatedUser(id, row);
    });
}

function saveUpdatedUser(id, row) {
    const input = row.querySelector(".edit-input");

    if (!input) return;

    const newName = input.value.trim();

    if (newName === "") {
        alert("Name cannot be empty.");
        input.focus();
        return;
    }

    const user = users.find((user) => user.id === id);

    if (!user) return;

    user.name = newName;

    display(users);

    alert("User updated successfully!");
}

function showAddUserForm() {
    const userList = document.getElementById("user-list");

    if (!userList) return;

    if (document.getElementById("add-user-form")) return;

    const addForm = document.createElement("div");
    addForm.id = "add-user-form";
    addForm.classList.add("container");
    addForm.classList.add("add-user-row");

    addForm.innerHTML = `<div class="text add-user-text"><span>${users.length + 1}. </span><input type="text" id="new-user-name" class="edit-input add-input" placeholder="Enter user name"></div><div class="wrapper"><div class="CTA btn-update"><button class="links btn-raw" id="save-new-user">Add</button></div></div>`;

    userList.appendChild(addForm);

    const input = document.getElementById("new-user-name");
    input.focus();

    document.getElementById("save-new-user").addEventListener("click", addObj);
}

function addObj() {
    const input = document.getElementById("new-user-name");

    if (!input) return;

    const name = input.value.trim();

    if (name === "") {
        alert("Please enter a name.");
        input.focus();
        return;
    }

    const newId = users.length > 0 ? Math.max(...users.map((user) => user.id)) + 1 : 1;

    const newUser = {
        id: newId,
        name: name,
        username: "",
        email: "",
        phone: "",
        website: "",
        address: {
            street: "",
            suite: "",
            city: "",
            zipcode: "",
            geo: {
                lat: "",
                lng: ""
            }
        },
        company: {
            name: "",
            catchPhrase: "",
            bs: ""
        }
    };

    users.push(newUser);

    display(users);

    alert("User added successfully!");
}

if (document.getElementById("user-list")) {
    getData();
}

const headerAddButton = document.getElementById("header-add-btn");

if (headerAddButton) {
    headerAddButton.addEventListener("click", showAddUserForm);
}