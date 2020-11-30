window.onload = () => {

    const contents = document.getElementsByClassName("contents");
    const checkBoxes = document.getElementsByClassName("checkBox");
    const labels = document.getElementsByTagName("label");
    const clicks = [];
    var lastIndex = -1;

    for(let i = 0; i < checkBoxes.length; i++){
        checkBoxes[i].addEventListener("click", function(e) {
            let isDeselected = false;

            for(let j = 0; j < clicks.length; j++){
                if(i === clicks[j]){
                    labels[i].classList.remove("checked");
                    contents[i].classList.remove("checked");
                    checkBoxes[i].setAttribute("checked", "false");
                    clicks.splice(j, 1);
                    isDeselected = true;
                }
            }

            if(isDeselected === false){
                clicks.push(i);
                checkedBoxes(i);
                if(e.shiftKey && clicks.length >= 2){
                    if(i < lastIndex) {
                        for(let j = i +1; j < lastIndex; j++){
                            clicks.push(j);
                            checkedBoxes(j);
                        }
                    } else if(i > lastIndex) {
                        for(let j = i -1; j > lastIndex; j--){
                            clicks.push(j);
                            checkedBoxes(j);
                        }
                    }
                }
                lastIndex = i;
            }
        });
    }

    function checkedBoxes(index) {
        labels[index].classList.add("checked");
        contents[index].classList.add("checked");
        checkBoxes[index].setAttribute("checked", "true");
    }
}
