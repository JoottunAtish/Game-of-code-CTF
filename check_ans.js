
function Good(){
    alert("Very Good!!")
}

function Bad(){
    alert("very bad")
}

document.querySelector(".good").addEventListener("click", Good);
document.querySelector(".bad").addEventListener("click", Bad);

