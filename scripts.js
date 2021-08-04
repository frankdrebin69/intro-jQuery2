var color = "purple"
var number = 10
var word = "cool"

if (color === "purple") {
    $('.first-centered').css("background", color)
}

if (number > 100) {
    $('.second-centered').text("wow, de nagy szám")
} else {
    $(".second-centered").text("ez csak egy közönséges szám")
}

if (word === "cool") {
    $('.third-centered').text("A DOM ereje")
} else {
    $('.fourth-centered').text("A DOM ereje")
}