var count = 3;
var countElement = document.querySelector("#count");
console.log(countElement);

function addShadow(element) {
    element.class=List.add("shadow")
}
function removeShadow(element) {
    element.class=List.remove("shadow")
}
     function likes() {
        count++;
        countElement.innerText = count + "like(s)";
        console.log(count)
     }