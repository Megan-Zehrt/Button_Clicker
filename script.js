console.log("hello there")

function removeButton(elem) {
    elem.remove();
}

function logout(element) {
    element.innerText = "LogOut";
}

function like(id) {
    var elem = document.querySelector(id)

    elem.innerText++;
}


