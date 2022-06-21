document.getElementById("add-btn").addEventListener("click", addBtnToList);

var list = [];

function addBtnToList() {
    var word = document.getElementById("add-input").value;
    list.push(word);
    document.getElementById("add-input").value = "";
}

document.getElementById("search-btn").addEventListener("click", checkList);

function checkList() {
    var word = document.getElementById("search-input").value;
    list.forEach(item => {
        if (item == word) {
            document.getElementById("success").classList.remove("d-none");
        } else {
            document.getElementById("danger").classList.remove("d-none");
        }
    });
}