
let button = document.getElementById("myButton") as HTMLButtonElement;
let div = document.getElementById("skills") as HTMLDivElement;

function showskills(){
    div.style.display = div.style.display === 'none' ? 'block' : 'none';
}


button.addEventListener("click",showskills)

