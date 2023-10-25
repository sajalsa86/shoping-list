const addInput = document.getElementById('add-field');

const colorInput = document.getElementById("color-field");
const itemList = document.getElementById("item-list");

const listDiv = document.getElementById("list-div"); //for hiding/showing
const toggle = document.getElementById("toggle-button");

// add item
function addItem() {
    const addLi = document.createElement("li");
    addLi.innerHTML = addInput.value;
    itemList.appendChild(addLi);
    addInput.value = "";

    const lastPickedColor = colorInput.value;
    addLi.style.color = lastPickedColor;

};

// remove item
function removeItem() {
    let deleteLi = document.querySelector("#item-list li:last-child");
    itemList.removeChild(deleteLi);
}

// change color
function changeColor() {
    const List = document.querySelectorAll("#item-list li");
    const lastPickedColor = colorInput.value;
    for (let i = 0; i < List.length; i++) {
        List[i].style.color = lastPickedColor;
    }
}

// uppercase
itemList.addEventListener("mouseover", (event) => {
    if (event.target.tagName == "LI") {
        event.target.style.textTransform = "uppercase";
    }
});

// lowercase
itemList.addEventListener("mouseout", (event) => {
    if (event.target.tagName == "LI") {
        event.target.style.textTransform = "lowercase";
    }
});

// hide/show list
function toggleButton() {
    if (listDiv.style.display === "none") {
        listDiv.style.display = "block";
        toggle.textContent = "Hide list";
    } else {
        listDiv.style.display = "none";
        toggle.textContent = "Show list";
    }
};