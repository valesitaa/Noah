var count = 3;
var countElement = document.querySelector("#count");
console.log(countElement);

function addShadow(element) {
    element.classList.add("shadow")
}
function removeShadow(element) {
    element.classList.remove("shadow")
}
     function likes() {
        count++;
        countElement.innerText = count + "like(s)";
        console.log(count)
     }