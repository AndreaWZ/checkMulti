window.onload = () => {

    const contents = document.getElementsByClassName("contents");
    const checkBoxes = document.getElementsByClassName("checkBox");
    const labels = document.getElementsByTagName("label");
    const clicks = [];

    for(let i = 0; i < checkBoxes.length; i++){
        checkBoxes[i].addEventListener("click", function() {
            if(clicks.length > 0){ // one o more elements
                if(clicks.length === 1){ // only one element
                    clicks.push(i);
                    if(clicks[0] < clicks[1]){ // increase
                        for(let i = clicks[0]; i <= clicks[1]; i++){
                            labels[i].classList.add("checked");
                            contents[i].classList.add("checked");
                            checkBoxes[i].setAttribute("checked", "true");
                        }
                    } else if(clicks[0] > clicks[1]){ // decrease
                        for(let i = clicks[1]; i <= clicks[0]; i++){
                            labels[i].classList.add("checked");
                            contents[i].classList.add("checked");
                            checkBoxes[i].setAttribute("checked", "true");
                        }
                    }
                }
            } else { // zero elememts in array
                clicks.push(i);
                labels[i].classList.add("checked");
                contents[i].classList.add("checked");
                checkBoxes[i].setAttribute("checked", "true");
            }
        });
    }
}
