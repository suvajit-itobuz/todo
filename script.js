const add_btn = document.querySelector(".todo-input-button");
const all_button = document.getElementById("all-button");
const active_button = document.getElementById("active-button");
const completed_button = document.getElementById("completed-button");
const clear_button = document.getElementById("clear-button");
let complete_toggle = true;
let completed_item;
let not_completed_items;
let toggle = true;
let item_obj = [];
const contains = (value) => {
  const present = item_obj.find((obj) => obj.title === value);
  if (present === undefined) {
    return true;
  } else {
    return false;
  }
};
const createElement = (input_value) => {
  input_value=input_value.trim();
  if (contains(input_value)) {
    const todo_item = document.createElement("div");
    const output = document.getElementById("output");
    const button_container = document.createElement("div");
    const para = document.createElement("p");
    const delete_button = document.createElement("button");
    const complete_button = document.createElement("button");
    const delete_icon = document.createElement("img");
    delete_icon.src = "./images/delete-icon.svg";
    const textContent = document.createTextNode(input_value);
    complete_button.innerText = "Complete";
    complete_button.setAttribute("class", "output-item-complete-button");
    button_container.appendChild(delete_button);
    button_container.appendChild(complete_button);
    delete_button.appendChild(delete_icon);
    para.appendChild(textContent);
    todo_item.appendChild(para);
    button_container.className = "button-container";
    todo_item.appendChild(button_container);
    output.appendChild(todo_item);
    todo_item.className = "output-item";
    complete_button.className = "output-item-complete-button";
    delete_button.className = "btn";
    let item_array = {
      title: input_value,
      completed: false,
      item: todo_item,
    };

    delete_button.addEventListener("click", () => {
      todo_item.remove();
    });

    complete_button.addEventListener("click", () => {
      const objIndex = item_obj.findIndex((obj) => obj.title === input_value);
      if (item_obj[objIndex].completed === false) {
        item_obj[objIndex].completed = true;
        todo_item.className = "output-item line-through";
      } else {
        item_obj[objIndex].completed = false;
        todo_item.className = "output-item";
      }
    });
    item_obj.push(item_array);
  }
};
const add = () => {
  const input_box = document.getElementById("todo-input-write");
  const input_value = input_box.value;
  input_box.value = "";
  if (input_value.trim().length !== 0) {
    createElement(input_value);
  }
};

add_btn.addEventListener("click", add);
addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    add();
  }
});

all_button.addEventListener("click", () => {
  item_obj.forEach((element) => {
    if (element.completed) {
      element.item.className = "output-item line-through";
    } else {
      element.item.className = "output-item";
    }
  });
});

active_button.addEventListener("click", () => {
  toggle = true;
  completed_item = item_obj.filter((obj) => obj.completed === true);
  not_completed_items = item_obj.filter((obj) => obj.completed === false);
  completed_item.forEach((element) => {
    element.item.className = "output-item hidden ";
  });
  not_completed_items.forEach((element) => {
    element.item.className = "output-item ";
  });
});

completed_button.addEventListener("click", () => {
  toggle = false;
  not_completed_items = item_obj.filter((obj) => obj.completed === false);
  completed_item = item_obj.filter((obj) => obj.completed === true);
  not_completed_items.forEach((element) => {
    element.item.className = "output-item hidden";
  });
  completed_item.forEach((element) => {
    element.item.className = "output-item line-through";
  });
});

clear_button.addEventListener("click", () => {
  const completed_items = item_obj.filter((obj) => obj.completed === true);
  completed_items.forEach((element) => {
    element.item.remove();
    item_obj = item_obj.filter((obj) => obj.title !== element.title);
  });
});
