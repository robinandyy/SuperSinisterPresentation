


document.getElementById("start").onclick = function() {
    presWarn();
};

function presWarn() {
    const confirmation = confirm("WARNING: You are about to witness a spectacular presentation - buckle your seatbelts!");
    if (confirmation) {
        window.location.href = "myWork.html";
    }
}


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("pun").onclick = function() {
        runPun();
    };

    function runPun() {
        alert("Why are latitude and longitude so smart? Because they've got so many degrees.");
    }
});



var clickCount = 2;

document.getElementById("next").addEventListener("click", newLesson);

function newLesson() {
    document.getElementById("lesson").innerHTML = "Lesson " + clickCount + ":";

    if(clickCount == 2){
        document.getElementById("lessonPic").src = "codeLines2.jpg"
        document.getElementById("wisdom").innerHTML = "If you can accept discomfort in learning, you can learn anything."
    }

    else if(clickCount == 3){
        document.getElementById("lessonPic").src = "handstand.png"
        document.getElementById("wisdom").innerHTML = "Value daily progress and improvement more than the instant gratification of your end goal."
    }
    
    else{
        document.getElementById("lessonPic").src = "lightbulb.png"
        document.getElementById("wisdom").innerHTML = "You decide what you are capable of."
    }
    if (clickCount < 4) {
        clickCount++;
    } else {
        // If you want to disable the button after reaching a certain count
        document.getElementById("next").disabled = true;
    }

}





