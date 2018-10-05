function validateLunch(food) {
    var food = document.getElementById("lunchWeAte").value 
    console.log(food);
    if (food === 'gyro') {
        alert("My Stomach Is Fat");
    } else {
        alert("I'm still hungry!");
    }
}
