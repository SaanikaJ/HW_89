function back(){
    window.location = "activity_1.html"; 
}

function get_score(){
    var score = localStorage.getItem("Score: "); 
    document.getElementById("update").innerHTML = "<h1> Score: " + score + " </h1"
}