window.onload = () => {

    const contents = document.getElementsByClassName("contents");
    const checkBoxes = document.getElementsByClassName("checkBox");
    const labels = document.getElementsByTagName("label");

    for(let i = 0; i < checkBoxes.length; i++){
        checkBoxes[i].addEventListener("click", function() {
            labels[i].classList.toggle("checked");
            contents[i].classList.toggle("checked");
        });
    }
   


}
