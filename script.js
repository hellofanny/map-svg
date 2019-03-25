

document.addEventListener('click', function (event) {
    colorState(event)
}, false);

function colorState(state) {
    var clickedElement = event.target;
    console.log(clickedElement);

    if (clickedElement.classList.contains('active')) {
        console.log("heree");
        clickedElement.classList.remove("active");
    }
    else {
        clickedElement.classList.add("active");
    }
}