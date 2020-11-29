window.onload = () => {

    const contents = document.getElementsByClassName("contents");
    const checkBoxes = document.getElementsByClassName("checkBox");
    const labels = document.getElementsByTagName("label");
    const clicks = [];

    for(let i = 0; i < checkBoxes.length; i++){
        checkBoxes[i].addEventListener("click", function() {
            clicks.push(i);
            console.log(clicks);
            // labels[i].classList.toggle("checked");
            // contents[i].classList.toggle("checked");
        });
    }

}
