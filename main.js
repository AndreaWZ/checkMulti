window.onload = () => {

    const checkBoxes = document.getElementsByClassName("checkBox");
    const labels = document.getElementsByTagName("label");

    for(let i = 0; i < checkBoxes.length; i++){
        checkBoxes[i].addEventListener("click", function() {
            labels[i].style.textDecoration = "line-through";
        })
    }

}
