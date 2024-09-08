let button = document.getElementById("myButton");
let div = document.getElementById("skills");
function showskills() {
    div.style.display = div.style.display === 'none' ? 'block' : 'none';
}
button.addEventListener("click", showskills);
export {};
