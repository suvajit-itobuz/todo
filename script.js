const add_btn = document.querySelector(".todo-input-button");
const all_button = document.getElementById("all-button");
const active_button = document.getElementById("active-button");
const completed_button = document.getElementById("completed-button");
const clear_button = document.getElementById("clear-button");
let completed_item;
let complete_toggle = true;

const createElement = (input_value) => {
    const todo_item = document.createElement("div");
    const output = document.getElementById("output");
    const button_container = document.createElement("div");
    const delete_button = document.createElement("button");
    const complete_button = document.createElement("button");
    const delete_icon = document.createElement("img");
    delete_icon.src = "./images/delete-icon.svg";
    const textContent = document.createTextNode(input_value);
    complete_button.innerText = "Complete";
    complete_button.setAttribute;
    button_container.appendChild(delete_button);
    button_container.appendChild(complete_button);
    delete_button.appendChild(delete_icon);
    todo_item.appendChild(textContent);
    todo_item.appendChild(button_container);
    output.appendChild(todo_item);
    todo_item.className = "output-item";
    complete_button.className = "output-item-complete-button";
    delete_button.className = "btn";

    delete_button.addEventListener("click", () => {
        todo_item.remove();
    });

    complete_button.addEventListener("click", () => {
        if (complete_toggle === true) {
            todo_item.className = "output-item line-through";
            completed_item = todo_item;
            complete_toggle = false;
        } else {
            todo_item.className = "output-item";
            complete_toggle = true;
        }
    });
};

add_btn.addEventListener("click", () => {
    const input_box = document.getElementById("todo-input-write");
    const input_value = input_box.value;
    input_box.value = "";
    if (input_value.length != 0) {
        createElement(input_value);
    }
});

active_button.addEventListener("click", (completed_item) => {
    completed_item.className = "hidden";
});
